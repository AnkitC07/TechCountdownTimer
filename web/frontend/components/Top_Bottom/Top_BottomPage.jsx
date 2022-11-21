import { Button } from '@shopify/polaris'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { TopBottomContext, contentCheck, designCheck, placementCheck } from '../../context/Top_Bottom_Context'
import { useAuthenticatedFetch } from '../../hooks'
import ToastComp from '../layouts/ToastComp'
import { TimerNav } from '../TimerNav'

const Top_BottomPage = () => {
	const fetch = useAuthenticatedFetch()
	const navigate = useNavigate();
	const {
		ID, setID,
		content,
		setContent,
		design,
		setDesign,
		placement,
		setPlacement,
		ispublished, setIspublished,
		Html, setHtml
	} = useContext(TopBottomContext)
	const navData_top = [
		{
			title: 'Content',
			path: 'Content_top',
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


	// Getting Id
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const id = urlParams.get("id");
	console.log('ID', ID)
	const [active, setActive] = useState(false);
	const [msg, setMsg] = useState('');
	const [btnLoading, setBtnLoading] = useState({
		type:"",
		status:false
	  })
	const [status, setStatus] = useState('')
	const [btnMain, setBtnMain] = useState(id == null ? true : false)

	// Updating states by Id
	useEffect(() => {
		if (id == null) {
			setDesign(designCheck)
			setPlacement(placementCheck)
			setContent(contentCheck)
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
			console.log(data)
			console.log('updated Content', new Date(data.data.Content.startDate.start).getMonth())
			setContent(() => {
				return {
					...data.data.Content,
					startDate: {
						start: new Date(data.data.Content.startDate.start),
						end: new Date(data.data.Content.startDate.end),
					},
					endDate: {
						start: new Date(data.data.Content.endDate.start),
						end: new Date(data.data.Content.endDate.end),
					},
				}
			})
			setDesign(data.data.Design)
			setPlacement(data.data.Placement)
			setHtml(data.data.Html)
			setIspublished(data.data.IsPublished)
			setBtnMain(data.data.IsPublished == "published"?false:true)
		}
		if (id !== null)
			getDataById()

		return () => {

			setID(null)
		}
	}, [])



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

	const handelPublish = async (statusUpdate) => {
		setBtnLoading({
			type:statusUpdate,
			status:true
		  })
		const getShopName = () => {
			return window.location.ancestorOrigins[0].replaceAll("https://", "");
		};
		const body = {
			type: 'Top/Bottom Page',
			content: content,
			design: design,
			placement: placement,
			Html: Html,
			ispublished: statusUpdate == "save"?ispublished:statusUpdate,
			store: getShopName()
		}

		if(statusUpdate == "Duplicate"){
			body.content.timerName = content.timerName+` Duplicate`
		}

		const res = await fetch(`/api/submitTopBottom?status=${statusUpdate}&id=${id}`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		})
		const data = await res.json()
		console.log(data)
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
		setID(data.id)
		setStatus(data.status)
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
					<TimerNav nav={navData_top} />
				</div>
			</div>
			<ToastComp active={active} setActive={setActive} msg={msg} />
		</section>
	)
}

export default Top_BottomPage
