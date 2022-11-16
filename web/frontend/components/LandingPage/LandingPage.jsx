import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { LandingContext } from '../../context/LandingContext'
import { TimerNav } from '../TimerNav'

const LandingPage = () => {
  const { content, design, placement } = useContext(LandingContext)

  const navData_land = [
    {
      title: 'Content',
      path: '',
      class: 'active',
    },
    {
      title: 'Design',
      path: 'Design_land',
    },
    {
      title: 'Placement',
      path: 'Placement_land',
    },
  ]
  const handelPublish = async () => {
    // console.log('Content-', content)
    // console.log('Design-', design)
    // console.log('Placement-', placement)
    const body = { content: content, design: design, placement: placement }
    console.log(body)
    const res = await fetch('/submitLanding', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    console.log('response', data)
  }
  return (
    <section className="product_main_page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12" id="top-bar">
            <div className="Polaris-Page-Header Polaris-Page-Header--hasNavigation Polaris-Page-Header--hasActionMenu Polaris-Page-Header--mediumTitle">
              <div className="Polaris-Page-Header__Row">
                <div className="Polaris-Page-Header__BreadcrumbWrapper">
                  <nav role="navigation">
                    <NavLink className="count_btn" to="/TimerType">
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
                      <div className="Polaris-Header-Title__TitleWithMetadataWrapper">
                        <h1 className="Polaris-Header-Title">
                          {content.timerName}
                        </h1>
                        <div className="Polaris-Header-Title__TitleMetadata">
                          <span className="Polaris-Badge">Not published</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="Polaris-Header-Title__SubTitle"><p>Timer ID: Save or Publish to show timer ID</p></div>
                </div>
                <div className="Polaris-Page-Header__RightAlign">
                  <div className="Polaris-ActionMenu">
                    <div className="Polaris-ActionMenu-Actions__ActionsLayout">
                      <div className="Polaris-ButtonGroup Polaris-ButtonGroup--extraTight">
                        <div className="Polaris-ButtonGroup__Item">
                          <span className="Polaris-ActionMenu-SecondaryAction">
                            <button
                              className="Polaris-Button Polaris-Button--outline"
                              type="button"
                            >
                              <span className="Polaris-Button__Content">
                                <span className="Polaris-Button__Text">
                                  Save
                                </span>
                              </span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Polaris-Page-Header__PrimaryActionWrapper">
                    <button
                      className="Polaris-Button Polaris-Button--primary"
                      type="button"
                      onClick={handelPublish}
                    >
                      <span className="Polaris-Button__Content">
                        <span className="Polaris-Button__Text">Publish</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <TimerNav nav={navData_land} />
        </div>
      </div>
    </section>
  )
}

export default LandingPage
