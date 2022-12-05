import React from 'react'
import { NavLink } from 'react-router-dom'

export const TimerType = () => {
  const TimerType = [
    {
      title: 'Product page',
      description: 'Block in product page below add to cart button.',
      src: 'product_page.svg',
      btnText: 'Select this timer type',
      path: '/ProductPage/Content',
      nav: 'navdata',
    },
    {
      title: 'Top/bottom bar',
      description: 'Fixed or sticky bar on the top or the bottom of any page.',
      src: 'bar.svg',
      btnText: 'Select this timer type',
      path: '/Top_BottomPage/Content_top',
      nav: 'navData_top',
    },
    {
      title: 'Landing page',
      description: 'Block in home, collection, password, or any other page.',
      src: 'landing_page.svg',
      btnText: 'Select this timer type',
      path: '/LandingPage/Content_land',
      nav: 'navData_Landing',
    },
    {
      title: 'Cart page',
      description: 'Add a countdown timer to cart page.',
      src: 'cart_page.svg',
      btnText: 'Select this timer type',
      path: '/CartPage/Content_cart',
      nav: 'navData_suggest',
    },
    {
      title: 'Suggest a new timer type',
      description: 'Let us know what other timer type you would like to use.',
      src: 'request_feature.svg',
      btnText: 'Suggest a type to us',
      path: '/Suggestion',
      nav: 'navData_suggest',
    },
  ]

  return (
    <section className="timertype_section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="Polaris-Page-Header Polaris-Page-Header--isSingleRow Polaris-Page-Header--hasNavigation Polaris-Page-Header--mediumTitle">
              <div className="Polaris-Page-Header__Row">
                <div className="Polaris-Page-Header__BreadcrumbWrapper">
                  <nav role="navigation">
                    <NavLink className="count_btn" to="/">
                      <button
                        className="Polaris-Breadcrumbs__Breadcrumb"
                        type="button"
                      >
                        <span className="Polaris-Breadcrumbs__Icon">
                          <span className="Polaris-Icon">
                            <span className="Polaris-VisuallyHidden"></span>
                            <svg
                              viewBox="0 0 20 20"
                              className="Polaris-Icon__Svg"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <path d="M17 9h-11.586l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-3.293-3.293h11.586a1 1 0 1 0 0-2z"></path>
                            </svg>
                          </span>
                        </span>
                      </button>
                    </NavLink>
                  </nav>
                </div>
                <div className="Polaris-Page-Header__TitleWrapper">
                  <div>
                    <div className="Polaris-Header-Title__TitleAndSubtitleWrapper">
                      <h1 className="Polaris-Header-Title">
                        Choose timer type
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {TimerType.map((item) => (
            <TimerTypeBox
              title={item.title}
              description={item.description}
              src={item.src}
              btnText={item.btnText}
              path={item.path}
              key={item.title}
            />
          ))}
          {/* <TimerTypeBox
            title="Product page"
            description="Block in product page below add to cart button."
            src="product_page.svg"
            btnText="Select this timer type"
            path="/ProductPage"
          />
          <TimerTypeBox
            title="Top/bottom bar"
            description="Fixed or sticky bar on the top or the bottom of any page."
            src="bar.svg"
            btnText="Select this timer type"
            path="/ProductPage"
          />
          <TimerTypeBox
            title="Landing page"
            description="Block in home, collection, password, or any other page."
            src="landing_page.svg"
            btnText="Select this timer type"
            path="/ProductPage"
          />
          <TimerTypeBox
            title="Suggest a new timer type"
            description="Let us know what other timer type you would like to use."
            src="request_feature.svg"
            btnText="Select this timer type"
            path="/ProductPage"
          /> */}
        </div>
      </div>
    </section>
  )
}

const TimerTypeBox = (props) => {
  return (
    <div className="col-md-4">
      <div className="Polaris-Stack__Item">
        <div className="Polaris-Card">
          <div className="Polaris-Card__Section">
            <img src={props.src} />
            <div className="Polaris-TextContainer">
              <h2 className="Polaris-Heading">{props.title}</h2>
              <p style={{height:'50px'}}>{props.description}</p>
              <NavLink className="count_btn" to={props.path}>
                <button
                  className="Polaris-Button Polaris-Button--fullWidth"
                  type="button"
                >
                  <span className="Polaris-Button__Content">
                    <span className="Polaris-Button__Text">
                      {props.btnText}
                    </span>
                  </span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
