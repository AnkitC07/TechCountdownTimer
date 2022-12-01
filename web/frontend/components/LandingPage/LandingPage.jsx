import React, { useContext,useEffect,useState } from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import { LandingContext,LandingContent,LandingDesign,LandingPlacement } from '../../context/LandingContext'
import { useAuthenticatedFetch } from '../../hooks'
import { TimerNav } from '../TimerNav'
import {getShopName} from '../common_functions/functions.js'
import { Button ,Badge} from "@shopify/polaris";
import CustomModal from '../layouts/Modal'
import ToastComp from '../layouts/ToastComp'
import {UpdateTimerType} from "../common_functions/functions"

const LandingPage = () => {
  const { content,
    setContent,
    design,
    setDesign,
    placement,
    setPlacement,
    ispublished, setIspublished,
    Html, setHtml,
    setId,dataId
  } = useContext(LandingContext)

  const navData_land = [
    {
      title: 'Content',
      path: 'Content_land',
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
  const fetch = useAuthenticatedFetch()
  const navigate = useNavigate()
  const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	let id = urlParams.get("id");
  const [btnMain, setBtnMain] = useState(id == null ? true : false);
  const [btnLoading, setBtnLoading] = useState({
    type: "",
    status: false,
  });
  const [active, setActive] = useState(false);
  const [msg, setMsg] = useState("");
  const [modalbtnloading, loadingModalbtn] = useState(false);
  const [modal, modalState] = useState({
    status: false,
    title: "",
    content: "",
    primary: [],
  });

  useEffect(()=>{
    if (id == null ) {
      setDesign(LandingDesign)
      setPlacement(LandingPlacement)
      setContent(LandingContent)
    }
    const getDataById = async () => {
      console.log(id)
      const res = await fetch('/api/getDataById', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      })
      const data = await res.json()
      console.log("Landing page",data)
      if(data.data !== null){
        setContent({...data.data.Content,timerType:UpdateTimerType(data,'Content')})
        setDesign(data.data.Design)
        setPlacement(data.data.Placement)
        setHtml(data.data.Html)
        setIspublished(data.data.IsPublished)
        setBtnMain(data.data.IsPublished == "published"?false:true)
      }
    }
   
    if (id !== null)
      getDataById()
      return () => {
        setId(null)
      }
  },[])

  if (dataId !== null && id == null || dataId !== undefined && id == null) {
    id = dataId;
  }

  const handelPublish = async (statusUpdate) => {
    console.log(statusUpdate,"checking type")
    setBtnLoading({
      type: statusUpdate,
      status: true,
    });
    const setHtml = document.querySelector('#getHTMLData').innerHTML
    const body = {
      type: 'Landing Page',
      content: content,
      design: design,
      placement: placement,
      Html: setHtml,
      ispublished:  statusUpdate == "save" ? ispublished : statusUpdate,
      store: getShopName()
    }

    console.log(body)
    if (statusUpdate == "Duplicate") {
      body.content.timerName = `${content.timerName} Duplicate`;
    }

    const res = await fetch(`/api/submitTopBottom?status=${statusUpdate}&id=${id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    console.log(data,"checking data landing page")
    if (data) {
      setBtnLoading({
        type: statusUpdate,
        status: false,
      });
      if (data.status == "published") {
        setMsg("Published");
        setBtnMain(false);
        setIspublished("published")
      } else if (data.status == "save") {
        setMsg("Save");
      } else if (data.status == "Duplicate") {
        setMsg("Duplicate");
        loadingModalbtn(false);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setMsg("Unpublished");
        setIspublished("Unpublished")
        setBtnMain(true);
      }
      setActive(true);
    }
    setId(data.id);
  }

  const modalActivator = async (type) => {
    if (type == "Delete") {
      modalState({
        state: true,
        title: "Delete timer",
        content: `Are you sure you want to delete this timer?`,
        primary: [
          {
            content: "Delete",
            onAction: () => {
              loadingModalbtn(true);
              deleteBtn(id);
            },
            destructive: true,
            loading: modalbtnloading,
          },
        ],
      });
      return false;
    } else if (type == "Duplicate") {
      modalState({
        state: true,
        title: "Duplicate timer",
        content: `Are you sure you want to duplicate ${content.timerName}?`,
        primary: [
          {
            content: "Duplicate",
            onAction: () => {
              loadingModalbtn(true);
              handelPublish("Duplicate");
            },
          },
        ],
      });
      return false;
    }
    console.log(modal);
  };
  
  const deleteBtn = async (idrec) => {
    loadingModalbtn(true);
    const deletebyid = await fetch(`/api/deleterecord?id=${idrec}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const getResult = await deletebyid.json();
    if (getResult.code == 200) {
      setActive(true);
      setMsg("Deleted");
      loadingModalbtn(false);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  // const handleChange = useCallback(() => setActive(!active), [active]);
  return (
    <section className="product_main_page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12" id="top-bar">
            <div className="Polaris-Page-Header Polaris-Page-Header--hasNavigation Polaris-Page-Header--hasActionMenu Polaris-Page-Header--mediumTitle">
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
                      <div className="Polaris-Header-Title__TitleWithMetadataWrapper">
                        <h1 className="Polaris-Header-Title">
                          {content.timerName}
                        </h1>
              
                        <div className="Polaris-Header-Title__TitleMetadata">
                          {ispublished == "published"?<Badge status='success'>Published</Badge>:<Badge >Not published</Badge>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="Polaris-Header-Title__SubTitle"><p>Timer ID: {id !== null?id:"Save or Publish to show timer ID"}</p></div>
                </div>
                <div class="Polaris-Page-Header__RightAlign">
                  <div class="Polaris-ActionMenu">
                    <div class="Polaris-ActionMenu-Actions__ActionsLayout">
                      <div class="Polaris-ButtonGroup Polaris-ButtonGroup--extraTight">
                        {id != null ? (
                          <>
                            <div class="Polaris-ButtonGroup__Item">
                              <span class="Polaris-ActionMenu-SecondaryAction Polaris-ActionMenu-SecondaryAction--destructive">
                                <button
                                  class="Polaris-Button Polaris-Button--outline"
                                  aria-disabled="false"
                                  type="button"
                                  onClick={() => {
                                    modalActivator("Delete");
                                  }}
                                >
                                  <span class="Polaris-Button__Content">
                                    <span class="Polaris-Button__Text">
                                      Delete
                                    </span>
                                  </span>
                                </button>
                              </span>
                            </div>
                            <div class="Polaris-ButtonGroup__Item">
                              <span class="Polaris-ActionMenu-SecondaryAction">
                                <button
                                  class="Polaris-Button Polaris-Button--outline"
                                  aria-disabled="false"
                                  type="button"
                                  onClick={() => modalActivator("Duplicate")}
                                >
                                  <span class="Polaris-Button__Content">
                                    <span class="Polaris-Button__Text">
                                      Duplicate
                                    </span>
                                  </span>
                                </button>
                              </span>
                            </div>
                          </>
                        ) : (
                          ""
                        )}

                        <div class="Polaris-ButtonGroup__Item">
                          <span class="Polaris-ActionMenu-SecondaryAction">
                            <Button
                              onClick={() => handelPublish("save")}
                              loading={
                                btnLoading.type == "save"
                                  ? btnLoading.status
                                  : false
                              }
                            >
                              Save
                            </Button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="Polaris-Page-Header__PrimaryActionWrapper">
                    {btnMain ? (
                      <Button
                        primary
                        onClick={() => {
                          handelPublish("published");
                        }}
                        loading={
                          btnLoading.type == "published"
                            ? btnLoading.status
                            : false
                        }
                      >
                        Publish
                      </Button>
                    ) : (
                      <Button
                        destructive
                        onClick={() => {
                          handelPublish("unPublished");
                        }}
                        loading={
                          btnLoading.type == "unPublished"
                            ? btnLoading.status
                            : false
                        }
                      >
                        Unpublish
                      </Button>
                    )}
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
      <ToastComp active={active} setActive={setActive} msg={msg} />
      {modal.state == true ? (
        <CustomModal
          state={true}
          primaryAction={[
            {
              content: modal.primary[0].content,
              onAction: modal.primary[0].onAction,
              loading: modalbtnloading,
              destructive: modal.primary[0].destructive,
            },
          ]}
          secondaryActions={[
            {
              content: "Cancel",
              onAction: async () => {
                modalState({ ...modal, state: false });
              },
            },
          ]}
          title={modal.title}
          content={modal.content}
          onClose={()=>modalState({ ...modal, state: false })}
        />
      ) : (
        ""
      )}
    </section>
  )
}

export default LandingPage
