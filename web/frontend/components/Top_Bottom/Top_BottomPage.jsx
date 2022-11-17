import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { TopBottomContext } from '../../context/Top_Bottom_Context'
import { useAuthenticatedFetch } from '../../hooks'
import { TimerNav } from '../TimerNav'

const Top_BottomPage = () => {
  const {
    content,
    setContent,
    design,
    setDesign,
    placement,
    setPlacement,
    ispublished, setIspublished,
    Html, setHtml
  } = useContext(TopBottomContext)
  const fetch = useAuthenticatedFetch()
  const navData_top = [
    {
      title: 'Content',
      path: '',
      class: 'active',
    },
    {
      title: 'Design',
      path: 'Design_top',
    },
    {
      title: 'Placement',
      path: 'Placement_top',
    },
  ]
  // const [ID, setID] = useState('')
  console.log('original Content', typeof content.startDate.start)
  // setID((state) =>
  //   id == null ? state : id
  // )
  // const id = window.location.href.split('id=')[1]

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");


  const update = () => {


  }

  useEffect(() => {

    const getDataById = async () => {
      const res = await fetch('/api/getDataById', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      })
      const data = await res.json()
      console.log('response', data.data.Content)
      console.log('updated Content', new Date(data.data.Content.startDate.start).getMonth())
      setContent(data.data.Content)


      setContent(() => {
        return {
          ...data.data.Content,
          startDate: {
            ...content.startDate,
            start: new Date(data.data.Content.startDate.start),
          },
        }
      })
      setContent(() => {
        return {
          ...data.data.Content,
          startDate: {
            ...content.startDate,
            end: new Date(data.data.Content.startDate.end),
          },
        }
      })
      setContent(() => {
        return {
          ...data.data.Content,
          endDate: {
            ...content.endDate,
            start: new Date(data.data.Content.endDate.start),
          },
        }
      })
      setContent(() => {
        return {
          ...data.data.Content,
          endDate: {
            ...content.endDate,
            end: new Date(data.data.Content.endDate.end),
          },
        }
      })
      setDesign(data.data.Design)
      setPlacement(data.data.Placement)
      setHtml(data.data.Html)
      setIspublished(data.data.IsPublished)

    }
    getDataById()
  }, [])

  const handelPublish = async () => {
    const getShopName = () => {
      return window.location.ancestorOrigins[0].replaceAll("https://", "");
    };
    const body = {
      type: 'Top/Bottom Page',
      content: content,
      design: design,
      placement: placement,
      Html: Html,
      ispublished: ispublished,
      store: getShopName()
    }
    const res = await fetch('/api/submitTopBottom', {
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
            <div class="Polaris-Page-Header Polaris-Page-Header--hasNavigation Polaris-Page-Header--hasActionMenu Polaris-Page-Header--mediumTitle">
              <div class="Polaris-Page-Header__Row">
                <div class="Polaris-Page-Header__BreadcrumbWrapper">
                  <nav role="navigation">
                    <NavLink className="count_btn" to="/TimerType">
                      <button
                        class="Polaris-Breadcrumbs__Breadcrumb"
                        type="button"
                      >
                        <span class="Polaris-Breadcrumbs__Icon">
                          <span class="Polaris-Icon">
                            <span class="Polaris-VisuallyHidden"></span>
                            <svg
                              viewBox="0 0 20 20"
                              class="Polaris-Icon__Svg"
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
                <div class="Polaris-Page-Header__TitleWrapper">
                  <div>
                    <div class="Polaris-Header-Title__TitleAndSubtitleWrapper">
                      <div class="Polaris-Header-Title__TitleWithMetadataWrapper">
                        <h1 class="Polaris-Header-Title">
                          {content.timerName}
                        </h1>
                        <div class="Polaris-Header-Title__TitleMetadata">
                          <span class="Polaris-Badge">Not published</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="Polaris-Header-Title__SubTitle">
                    <p>
                      Timer ID: <span>  {id ? `${id}` : 'Save or Publish to show timer ID'}</span>
                    </p>
                  </div>

                </div>
                <div class="Polaris-Page-Header__RightAlign">
                  <div class="Polaris-ActionMenu">
                    <div class="Polaris-ActionMenu-Actions__ActionsLayout">
                      <div class="Polaris-ButtonGroup Polaris-ButtonGroup--extraTight">
                        <div class="Polaris-ButtonGroup__Item">
                          <span class="Polaris-ActionMenu-SecondaryAction">
                            <button
                              class="Polaris-Button Polaris-Button--outline"
                              type="button"
                            >
                              <span class="Polaris-Button__Content">
                                <span class="Polaris-Button__Text">Save</span>
                              </span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="Polaris-Page-Header__PrimaryActionWrapper">
                    <button
                      class="Polaris-Button Polaris-Button--primary"
                      type="button"
                      onClick={handelPublish}
                    >
                      <span class="Polaris-Button__Content">
                        <span class="Polaris-Button__Text">Publish</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <TimerNav nav={navData_top} />
        </div>
      </div>
    </section>
  )
}

export default Top_BottomPage
