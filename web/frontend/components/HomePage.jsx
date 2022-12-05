import {
  Page,
  Spinner
} from "@shopify/polaris";

import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { useAuthenticatedFetch } from "../hooks/useAuthenticatedFetch";
import PublishedList from "./Fields/PublishedList";
import { AppFooter } from "./layouts/AppFooter";
import { CheckBoxRef } from "./layouts/CheckBoxRef";
import CheckHead from "./layouts/CheckHead";
import { getShopName } from "../components/common_functions/functions.js";
// import trophyImgUrl from "../assets/home-trophy.png";

// import { ProductsCard } from "./ProductsCard";

export default function Homepage() {
  const fetch = useAuthenticatedFetch();
  const [TimerData, setTimerData] = useState([]);
  const shopName = getShopName();
  const [loading,loadingState] = useState(true)
  useEffect(() => {
    const handelPublish = async () => {
      const res = await fetch("/api/getAllTimer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ shop: getShopName() }),
      });
      const data = await res.json();
      console.log(data)
      console.log("response", data);
      setTimerData(data.status);
      console.log(TimerData.status);
      loadingState(false)
    };
    handelPublish();
  }, []);

  return (
    <Page>
      <section className="countdown_main">
        <div className="container">
         
         {/* { loading == true?'':<> */}
         <div className="row">
            <div className="col-md-12">
              <CheckHead />
              <div className="Polaris-Page-Header Polaris-Page-Header--noBreadcrumbs Polaris-Page-Header--mediumTitle Polaris-PageActions">
                <div className="Polaris-Page-Header__Row">
                  <div className="Polaris-Page-Header__TitleWrapper">
                    <div>
                      <div className="Polaris-Header-Title__TitleAndSubtitleWrapper">
                        <h1 className="Polaris-Header-Title">
                          Your countdown timers
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="Polaris-Page-Header__RightAlign">
                    <div className="Polaris-Page-Header__PrimaryActionWrapper">
                      <NavLink className="count_btn" to="/TimerType">
                        <button
                          className="Polaris-Button Polaris-Button--primary"
                          type="button"
                        >
                          <span className="Polaris-Button__Content">
                            <span className="Polaris-Button__Text">
                              Create a new timer
                            </span>
                          </span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                  
                </div>
              </div>

              {loading == true?
                <div className="Polaris-Card text-center p-5">
                   <Spinner accessibilityLabel="Spinner example" size="large" />
                </div>
              :
                <><div className="Polaris-Card">
                {TimerData.length !== 0 ? (
                  <PublishedList item={TimerData} />
                ) : (
                  <div className="Polaris-Card__Section">
                    <div className="Polaris-EmptyState Polaris-EmptyState--withinContentContainer">
                      <div className="Polaris-EmptyState__Section">
                        <div className="Polaris-EmptyState__DetailsContainer">
                          <div className="Polaris-EmptyState__Details">
                            <div className="Polaris-TextContainer">
                              <p className="Polaris-DisplayText Polaris-DisplayText--sizeSmall">
                                This is where you'll manage your timers
                              </p>
                              <div className="Polaris-EmptyState__Content">
                                <p>
                                  Start by creating your first countdown timer
                                  and publishing it to your store.
                                </p>
                              </div>
                            </div>
                            <div className="Polaris-EmptyState__Actions">
                              <div className="Polaris-Stack Polaris-Stack--spacingTight Polaris-Stack--distributionCenter Polaris-Stack--alignmentCenter">
                                <div className="Polaris-Stack__Item">
                                  <NavLink
                                    className="count_btn"
                                    to="/TimerType"
                                  >
                                    <button
                                      className="Polaris-Button Polaris-Button--primary"
                                      type="button"
                                    >
                                      <span className="Polaris-Button__Content">
                                        <span className="Polaris-Button__Text">
                                          Create a new timer
                                        </span>
                                      </span>
                                    </button>
                                  </NavLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="Polaris-EmptyState__ImageContainer">
                          <img
                            alt=""
                            src="CountDown-Timer.png"
                            className="Polaris-EmptyState__Image"
                            role="presentation"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div></>}


            </div>
          </div>
          {/* </>} */}

        </div>

        <div className="container enabledTheme m-4">
            <p>Countdown Timer not displaying?</p>
            <p style={{display:'flex',justifyContent:'center'}}>
              Make sure they are <a
                href={`https://${shopName}/admin/themes/current/editor?context=apps`}
                className="Polaris-Link"
                target="_blank"
                style={{display:'flex',marginLeft:'5px'}}
              >
                enabled in your theme.
                <span className="Polaris-Link__IconLockup">
                  <span className="Polaris-Link__IconLayout">
                    <span className="Polaris-Icon">
                      <span className="Polaris-VisuallyHidden">
                        (opens a new window)
                      </span>
                      <svg
                        viewBox="0 0 20 20"
                        className="Polaris-Icon__Svg"
                        focusable="false"
                        aria-hidden="true"
                      >
                        <path d="M14 13v1a1 1 0 0 1-1 1H6c-.575 0-1-.484-1-1V7a1 1 0 0 1 1-1h1c1.037 0 1.04 1.5 0 1.5-.178.005-.353 0-.5 0v6h6V13c0-1 1.5-1 1.5 0zm-3.75-7.25A.75.75 0 0 1 11 5h4v4a.75.75 0 0 1-1.5 0V7.56l-3.22 3.22a.75.75 0 1 1-1.06-1.06l3.22-3.22H11a.75.75 0 0 1-.75-.75z"></path>
                      </svg>
                    </span>
                  </span>
                </span>
              </a>
            </p>
        </div>


        

        <div className="container-fluid ref_app">
          <div className="row ">
            <div className="Polaris-Page-Header Polaris-Page-Header--noBreadcrumbs Polaris-Page-Header--mediumTitle">
              <div className="Polaris-Page-Header__Row">
                <div className="Polaris-Page-Header__TitleWrapper">
                  <div>
                    <div className="Polaris-Header-Title__TitleAndSubtitleWrapper">
                      <h1 className="Polaris-Header-Title">
                        Apps you might like
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CheckBoxRef
              title="Shop Pre Order Manager "
              src="Main_revised_PreOrder-Lite-App-ScreenShot.png"
              description="Get more sales and revenue by taking preorders for coming soon items and items out of stock. Capture purchase intent, get more sales."
              rating="4.7"
              btnText="View on Shopify app store"
              link="https://apps.shopify.com/cancode-preorder"
            />
            <CheckBoxRef
              title="Posh Wrap: Gift Option Manager"
              src="App_Marketplace_MainBanner_Shopify.jpg"
              description="Upsell gift options to your customers from product pages and the shopping cart to increase your order value."
              rating="5.0"
              btnText="View on Shopify app store"
              link="https://apps.shopify.com/shop-gift-option"
            />
            <CheckBoxRef
              title="CanCode.io Terms & Conditions"
              src="Mainpage_2versionCheckbox-App-ScreenShot.png"
              description="Compliance made easy with I Agree: Terms & Conditions Checkbox"
              rating=""
              btnText="View on Shopify app store"
              link="https://apps.shopify.com/cancodeio_checklist"
            />
          </div>
        </div>
      </section>
      <AppFooter />
    </Page>
  );
}
