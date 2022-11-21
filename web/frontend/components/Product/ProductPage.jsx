import React, { useContext } from 'react'
import { useState } from 'react'
import { Button } from '@shopify/polaris'
import { useEffect } from 'react'
import { NavLink,useNavigate} from 'react-router-dom'
import { ProductContext,productDesign,productPlacement,productContent } from '../../context/ProductContext'
import { TimerNav } from '../TimerNav'
import { useAuthenticatedFetch } from '../../hooks/useAuthenticatedFetch.js'
import ToastComp from '../layouts/ToastComp'
import { useRef } from 'react'

export const ProductPage = () => {
  const {
		content,
		setContent,
		design,
		setDesign,
		placement,
		setPlacement,
		ispublished, setIspublished,
		Html, setHtml
  } = useContext(ProductContext)

  const navigate = useNavigate()
  const fetch = useAuthenticatedFetch()
  const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const id = urlParams.get("id");
  const [active, setActive] = useState(false);
	const [msg, setMsg] = useState('');
	const [btnLoading, setBtnLoading] = useState({
    type:"",
    status:false
  })
	// const [status, setStatus] = useState('')
	const [btnMain, setBtnMain] = useState(id == null ? true : false)

  const navdata = [
    {
      title: 'Content',
      path: '',
    },
    {
      title: 'Design',
      path: 'Design',
    },
    {
      title: 'Placement',
      path: 'Placement',
    },
  ]

  useEffect(() => {
    if (id == null ) {
      setDesign(productDesign)
      setPlacement(productPlacement)
      setContent(productContent)
    }

    const getDataById = async () => {
      const res = await fetch('/api/getDataById', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      })
      const data = await res.json()
      setContent(() => {
        return {
          ...data.data.Content,
          selectedDates: {
            start: new Date(data.data.Content.selectedDates.start),
            end: new Date(data.data.Content.selectedDates.end),
          },
          selectedEndDates: {
            start: new Date(data.data.Content.selectedEndDates.start),
            end: new Date(data.data.Content.selectedEndDates.end),
          },
        }
      })
      console.log(data.data.Content)
      setDesign(data.data.Design)
      setPlacement(data.data.Placement)
      setHtml(data.data.Html)
      setIspublished(data.data.IsPublished)
      setBtnMain(data.data.IsPublished == "published"?false:true)
    }
    if (id !== null)
      getDataById()
  }, [])

  const handelPublish = async (statusUpdate) => {

		setBtnLoading({
      type:statusUpdate,
      status:true
    })

		const getShopName = () => {
			return window.location.ancestorOrigins[0].replaceAll("https://", "");
		};

		const body = {
			type: 'Product Page',
			content: content,
			design: design,
			placement: placement,
			Html: Html,
			ispublished: statusUpdate == "save"?ispublished:statusUpdate,
			store: getShopName()
		}

		if(statusUpdate == "Duplicate"){
			body.content.productTimer = `${content.productTimer} Duplicate`
		}

		const res = await fetch(`/api/submitTopBottom?status=${statusUpdate}&id=${id}`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		})
		const data = await res.json()
		if (data) {
			setBtnLoading({
        type:statusUpdate,
        status:false
      })
			if (data.status == 'published') {
				setMsg('Published')
				setBtnMain(false)
			} else if(data.status == "save"){
				setMsg('Save')
			}else if(data.status == "Duplicate"){
				setMsg("Duplicate")
        setTimeout(() => {
          navigate("/")
        }, 1500)
			}else{
				setMsg('Unpublished')
				setBtnMain(true)
			}
			setActive(true);
		}
		// setStatus(data.status)
	}


  const deleteBtn = async (idrec) => {
		const deletebyid = await fetch(`/api/deleterecord?id=${idrec}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const getResult = await deletebyid.json()
		if (getResult.code == 200) {
			setActive(true)
			setMsg("Deleted")
			setTimeout(() => {
				navigate("/")
			}, 1500)
		}
	}

  return (
    <section className="product_main_page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
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
                          {content.productTimer}
                        </h1>
                        <div className="Polaris-Header-Title__TitleMetadata">
                          <span className="Polaris-Badge">Not published</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="Polaris-Header-Title__SubTitle"><p>Timer ID: Save or Publish to show timer ID</p></div>
                </div>
                <div class="Polaris-Page-Header__RightAlign">
									<div class="Polaris-ActionMenu">
										<div class="Polaris-ActionMenu-Actions__ActionsLayout">
											<div class="Polaris-ButtonGroup Polaris-ButtonGroup--extraTight">
												{id != null ? <>
													<div class="Polaris-ButtonGroup__Item">
														<span class="Polaris-ActionMenu-SecondaryAction Polaris-ActionMenu-SecondaryAction--destructive">
															<button class="Polaris-Button Polaris-Button--outline" aria-disabled="false" type="button"
																onClick={() => {
																	deleteBtn(id)
																}}
															>
																<span class="Polaris-Button__Content">
																	<span class="Polaris-Button__Text">Delete</span>
																</span>
															</button>
														</span>
													</div>
													<div class="Polaris-ButtonGroup__Item">
														<span class="Polaris-ActionMenu-SecondaryAction">
															<button class="Polaris-Button Polaris-Button--outline" aria-disabled="false" type="button" 
															onClick={()=>handelPublish("Duplicate")}
															>
																<span class="Polaris-Button__Content">
																	<span class="Polaris-Button__Text">Duplicate</span>
																</span>
															</button>
														</span>
													</div>
												</> : ''}

												<div class="Polaris-ButtonGroup__Item">
													<span class="Polaris-ActionMenu-SecondaryAction">
                            <Button
                            onClick={()=>handelPublish("save")}
                            loading={btnLoading.type== "save"?btnLoading.status:false}
                            >Save</Button>
													</span>
												</div>
											</div>
										</div>
									</div>
									<div class="Polaris-Page-Header__PrimaryActionWrapper">
										{btnMain ? <Button primary onClick={() => {
											handelPublish("published")
										}} loading={btnLoading.type== "published"?btnLoading.status:false}>Publish</Button> : <Button destructive onClick={() => {
											handelPublish("unPublished")
										}} loading={btnLoading.type== "unPublished"?btnLoading.status:false}>Unpublish</Button>}

									</div>
								</div>


              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <TimerNav nav={navdata} />
        </div>
      </div>
      <ToastComp active={active} setActive={setActive} msg={msg} />
    </section>
  )
}
