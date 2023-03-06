// @ts-check
import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import cookieParser from "cookie-parser";
import { Shopify, LATEST_API_VERSION } from "@shopify/shopify-api";
import applyAuthMiddleware from "./middleware/auth.js";
import verifyRequest from "./middleware/verify-request.js";
// import LandingRouter from './routes/LandingRouter.js'
// import ProductRouter from './routes/ProductRouter.js'
import TopBottomRouter from "./routes/TopBottomRouter.js";
import bodyparser from "body-parser";
import "./databse/config.js";



import { setupGDPRWebHooks } from "./gdpr.js";
import productCreator from "./helpers/product-creator.js";
import redirectToAuth from "./helpers/redirect-to-auth.js";
import { BillingInterval } from "./helpers/ensure-billing.js";
import { AppInstallations } from "./app_installations.js";
import * as dotenv from "dotenv";
// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// import CartRouter from "./routes/CartRouter.js";
import AllTimer from "./routes/AllTimer.js";
import GetDatabyId from "./routes/GetDatabyId.js";
import Theme from "./routes/Themeextension.js";
import Cors from "cors";
import stores from "./model/stores.js";
import createHmac from "create-hmac";
import { updateStore } from "./model/Controller/store.js";
import loadCurrentSession from "@shopify/shopify-api/dist/utils/load-current-session.js";
// import stores from "./model/stores.js";
dotenv.config();
const USE_ONLINE_TOKENS = false;
const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10);

// TODO: There should be provided by env vars
const DEV_INDEX_PATH = `${process.cwd()}/frontend/`;
const PROD_INDEX_PATH = `${process.cwd()}/frontend/dist/`;

const DB_PATH = `${process.cwd()}/database.sqlite`;

export async function getSession(req,res){
  const session = await Shopify.Utils.loadCurrentSession(
    req,
    res,
    false
  );
  return session
}

Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SCOPES.split(","),
  HOST_NAME: process.env.HOST.replace(/https?:\/\//, ""),
  HOST_SCHEME: process.env.HOST.split("://")[0],
  API_VERSION: LATEST_API_VERSION,
  IS_EMBEDDED_APP: true,
  // This should be replaced with your preferred storage strategy
  // See note below regarding using CustomSessionStorage with this template.
  SESSION_STORAGE: new Shopify.Session.SQLiteSessionStorage(DB_PATH),
  ...(process.env.SHOP_CUSTOM_DOMAIN && {
    CUSTOM_SHOP_DOMAINS: [process.env.SHOP_CUSTOM_DOMAIN],
  }),
});

// NOTE: If you choose to implement your own storage strategy using
// Shopify.Session.CustomSessionStorage, you MUST implement the optional
// findSessionsByShopCallback and deleteSessionsCallback methods.  These are
// required for the app_installations.js component in this template to
// work properly.

Shopify.Webhooks.Registry.addHandler("APP_UNINSTALLED", {
  path: "/api/uninstalltheapp",
  webhookHandler: async (_topic, shop, _body) => {
    await AppInstallations.delete(shop);
  },
});

// The transactions with Shopify will always be marked as test transactions, unless NODE_ENV is production.
// See the ensureBilling helper to learn more about billing in this template.
const BILLING_SETTINGS = {
  required: false,
  // This is an example configuration that would do a one-time charge for $5 (only USD is currently supported)
  // chargeName: "My Shopify One-Time Charge",
  // amount: 5.0,
  // currencyCode: "USD",
  // interval: BillingInterval.OneTime,
};

// This sets up the mandatory GDPR webhooks. You’ll need to fill in the endpoint
// in the “GDPR mandatory webhooks” section in the “App setup” tab, and customize
// the code when you store customer data.
//
// More details can be found on shopify.dev:
// https://shopify.dev/apps/webhooks/configuration/mandatory-webhooks
setupGDPRWebHooks("/api/webhooks");

// export for test use only
export async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === "production",
  billingSettings = BILLING_SETTINGS
) {
  const app = express();

  app.use(express.json());
  app.use(bodyparser.json());

  app.use(Cors());

  app.set("use-online-tokens", USE_ONLINE_TOKENS);
  app.use(cookieParser(Shopify.Context.API_SECRET_KEY));

  applyAuthMiddleware(app, {
    billing: billingSettings,
  });

  app.get("/api/checking", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", " *");
    res.send({ code: "checking" });
  });

  // Do not call app.use(express.json()) before processing webhooks with
  // Shopify.Webhooks.Registry.process().

  app.post("/api/uninstalltheapp", async (req, res) => {
    try {
      const shop = req.body.domain;
      await AppInstallations.delete(shop);
      // await Shopify.Webhooks.Registry.process(req, res);
      console.log(`Webhook processed, returned status code 200`, shop);
    } catch (e) {
      console.log("err", e);
      console.log(`Failed to process webhook: ${e.message}`);
      if (!res.headersSent) {
        res.status(500).send(e.message);
      }
    }
  });

  function verifyWebhook(payload, hmac) {
    const message = JSON.stringify(payload).toString();
    var check = createHmac("sha256", process.env.SHOPIFY_API_SECRET)
      .update(message)
      .digest("base64");
    return check === hmac;
  }

  // START GDPR end point =====================================================================
  app.post("/api/data-request", async (req, res) => {
    console.log('checking')
    const hmac = req.headers["x-shopify-hmac-sha256"];
    const topic = req.header("X-Shopify-Topic");
    const verified = verifyWebhook(req.body, hmac);
    if (verified) {
      console.log("GDPR is verified",topic)
      res.status(200).send({ data: "data-request triggered" });
    } else {
      console.log("GDPR is not verified",topic)
      res.status(401).send({ data: "data-request triggered" });
    }
  });

  app.post("/api/data-erasure", (req, res) => {
    const hmac = req.headers["x-shopify-hmac-sha256"];
    const topic = req.header("X-Shopify-Topic");
    const verified = verifyWebhook(req.body, hmac);
    if (verified) {
      console.log("GDPR is verified",topic)
      res.status(200).send({ data: "data-request triggered" });
    } else {
      console.log("GDPR is not verified",topic)
      res.status(401).send({ data: "data-request triggered" });
    }
  });

  app.post("/api/shop-data-erasure", (req, res) => {
    const hmac = req.headers["x-shopify-hmac-sha256"];
    const topic = req.header("X-Shopify-Topic");
    const verified = verifyWebhook(req.body, hmac);
    if (verified) {
      console.log("GDPR is verified",topic)
      res.status(200).send({ data: "data-request triggered" });
    } else {
      console.log("GDPR is not verified",topic)
      res.status(401).send({ data: "data-request triggered" });
    }
  });

  app.use("/api", Theme);
  // All endpoints after this point will require an active session
  app.use(
    "/api/*",
    verifyRequest(app, {
      billing: billingSettings,
    })
  );

  app.get("/api/products/count", async (req, res) => {
    const session = await Shopify.Utils.loadCurrentSession(
      req,
      res,
      app.get("use-online-tokens")
    );
    const { Product } = await import(
      `@shopify/shopify-api/dist/rest-resources/${Shopify.Context.API_VERSION}/index.js`
    );

    const countData = await Product.count({ session });
    res.status(200).send(countData);
  });

  app.get("/api/products/create", async (req, res) => {
    const session = await Shopify.Utils.loadCurrentSession(
      req,
      res,
      app.get("use-online-tokens")
    );
    let status = 200;
    let error = null;

    try {
      await productCreator(session);
    } catch (e) {
      console.log(`Failed to process products/create: ${e.message}`);
      status = 500;
      error = e.message;
    }
    res.status(status).send({ success: status === 200, error });
  });

  // All endpoints after this point will have access to a request.body
  // attribute, as a result of the express.json() middleware

  // app.use('/submitCart', CartRouter)
  // app.use('/api', LandingRouter)
  app.use("/api", TopBottomRouter);
  // app.use('/api', ProductRouter)
  app.use("/api", AllTimer);
  app.use("/api", GetDatabyId);

  app.get("/api/getTheme", async (req, res) => {
    try {
      const session = await Shopify.Utils.loadCurrentSession(
        req,
        res,
        app.get("use-online-tokens")
      );
      const { Theme } = await import(
        `@shopify/shopify-api/dist/rest-resources/${Shopify.Context.API_VERSION}/index.js`
      );
      const themes = await Theme.all({ session });
      res.status(200).json({ status: 200, data: themes });
    } catch (err) {
      res.status(200).json({ status: 400, err: err });
    }
  });

  app.get("/api/updateonboarding", async (req, res) => {
    const url = req.headers['referer']
    const search = new URLSearchParams(url)
    req.query.shopName = search.get('shop')

    try {
      const shopName = req.query.shopName;
      console.log(shopName,"update values shop")
      await updateStore(shopName);
      res.status(200).json({ status: 200, msg: "success" });
    } catch (err) {
      res.status(200).json({ status: 400, testing: "asdasd" });
    }
  });

  app.get("/api/getDetails", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
      const session = await Shopify.Utils.loadCurrentSession(
        req,
        res,
        app.get("use-online-tokens")
      );
      const shopName = session.shop
      const findshop = await stores.findOne({
        storename: shopName,
      });
      console.log(findshop, "shop");
      res.status(200).json({ status: 200, data: findshop });
    } catch (err) {
      res.status(200).json({ status: 400, testing: err });
    }
  });

  app.use((req, res, next) => {
    const shop = Shopify.Utils.sanitizeShop(req.query.shop);
    if (Shopify.Context.IS_EMBEDDED_APP && shop) {
      res.setHeader(
        "Content-Security-Policy",
        `frame-ancestors https://${encodeURIComponent(
          shop
        )} https://admin.shopify.com;`
      );
    } else {
      res.setHeader("Content-Security-Policy", `frame-ancestors 'none';`);
    }
    next();
  });

  if (isProd) {
    const compression = await import("compression").then(
      ({ default: fn }) => fn
    );
    const serveStatic = await import("serve-static").then(
      ({ default: fn }) => fn
    );
    app.use(compression());
    app.use(serveStatic(PROD_INDEX_PATH, { index: false }));
  }

  app.use("/*", async (req, res, next) => {
    if (typeof req.query.shop !== "string") {
      res.status(500);
      return res.send("No shop provided");
    }

   
    const shop = Shopify.Utils.sanitizeShop(req.query.shop);
    const appInstalled = await AppInstallations.includes(shop);
    
    if (!appInstalled && !req.originalUrl.match(/^\/exitiframe/i)) {
      return redirectToAuth(req, res, app);
    }

    if (Shopify.Context.IS_EMBEDDED_APP && req.query.embedded !== "1") {
      const embeddedUrl = Shopify.Utils.getEmbeddedAppUrl(req);
      return res.redirect(embeddedUrl + req.path);
    }

    const htmlFile = join(
      isProd ? PROD_INDEX_PATH : DEV_INDEX_PATH,
      "index.html"
    );

    return res
      .status(200)
      .set("Content-Type", "text/html")
      .send(readFileSync(htmlFile));
  });

  return { app };
}

createServer().then(({ app }) => app.listen(PORT));
