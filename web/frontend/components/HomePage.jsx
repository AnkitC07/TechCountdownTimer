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

import { NavLink } from 'react-router-dom'

// import trophyImgUrl from "../assets/home-trophy.png";

// import { ProductsCard } from "./ProductsCard";

export default function Homepage() {
  return (
    <Page>
      <section className="countdown_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="Polaris-Page-Header Polaris-Page-Header--noBreadcrumbs Polaris-Page-Header--mediumTitle">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}
