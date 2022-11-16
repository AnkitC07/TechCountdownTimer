import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from '@shopify/polaris'
import { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'
import { useAuthenticatedFetch } from '../hooks/useAuthenticatedFetch'
import PublishedList from './Fields/PublishedList'
import { AppFooter } from './layouts/AppFooter'
import { CheckBoxRef } from './layouts/CheckBoxRef'
import CheckHead from './layouts/CheckHead'

// import trophyImgUrl from "../assets/home-trophy.png";

// import { ProductsCard } from "./ProductsCard";


export default function Homepage() {
  const fetch = useAuthenticatedFetch()
  const [TimerData, setTimerData] = useState([])

  useEffect(() => {
    const handelPublish = async () => {

      const res = await fetch('/api/getAllTimer', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(body),
      })
      const data = await res.json()
      console.log('response', data)
      setTimerData(data.status)
      console.log(TimerData.status)
    }
    handelPublish()
  }, [])
  return (
    <Page>
      <section className="countdown_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <CheckHead />
              <div className="Polaris-Page-Header Polaris-Page-Header--noBreadcrumbs Polaris-Page-Header--mediumTitle Polaris-PageActions" >
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
              <div className="Polaris-Card">

                {TimerData.length !== 0 ? <PublishedList item={TimerData} /> :
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
                                  Start by creating your first countdown timer and
                                  publishing it to your store.
                                </p>
                              </div>
                            </div>
                            <div className="Polaris-EmptyState__Actions">
                              <div className="Polaris-Stack Polaris-Stack--spacingTight Polaris-Stack--distributionCenter Polaris-Stack--alignmentCenter">
                                <div className="Polaris-Stack__Item">
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
                        </div>
                        <div className="Polaris-EmptyState__ImageContainer">
                          <img
                            alt=""
                            src="empty.png"
                            className="Polaris-EmptyState__Image"
                            role="presentation"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
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
              title="CanCode.io Discount & Bundle"
              src="App_Marketplace_MainBanner_Shopify.jpg"
              description="Get more sales by offering customers discounts and bundle deals."
              rating=""
              btnText="Coming Soon"
              style={{ background: "lightgray", pointerEvents: "none" }}
              link=""
            />
          </div>
        </div>


      </section>
      <AppFooter />
    </Page>
  )
}
