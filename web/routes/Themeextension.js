import express from "express";
import mongoose, { now } from "mongoose";
import Product from "../model/Product.js";
mongoose.Promise = global.Promise;
const Theme = express.Router();

Theme.post("/checkingStore", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", " *");
  try {
    const shop = req.body.storename;
    let type = req.body.type;
    if (shop == undefined) {
      res.send("store name is missing");
    }
    if (type == "product") {
      type = "Product Page";
    } else if (type == "cart") {
      type = "Cart Page";
    } else if (type == "collection") {
      type = "Landing Page";
    }
    const data = await Product.find({
      IsPublished: "published",
      Store: shop,
      $and: [
        {
          $or: [{ Type: "Top/Bottom Page" }, { Type: type }],
        },
        {
          $or: [
            {
              "Content.timerType.countdownDate.status": {
                $ne: false,
              },
              "Content.timerType.countdownDate.startDate.date.start": new Date(this) <= new Date()
            },
            {
              "Content.timerType.recurring.status": {
                $ne: false,
              },
              "Content.timerType.countdownDate.start.date.start": function () {
                new Date(this) >= new Date();
              },
            },
            {
              "Content.timerType.fixedTime.status": {
                $ne: false,
              },
            },
          ],
        },
      ],
    });

    res.send({ data });
  } catch (err) {}
});

export default Theme;
