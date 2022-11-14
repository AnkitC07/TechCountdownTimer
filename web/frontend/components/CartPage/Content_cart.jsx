import React, { useContext, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { CartPageContext } from '../../context/CartPageContext'
import InputAreaComp from '../Fields/InputAreaComp'
import InputComponent from '../Fields/InputComponent'
import InputNumber from '../Fields/InputNumber'
import InputSelect from '../Fields/InputSelect'
import TimerBadge_cart from './TimerBadge_cart'

const Content_cart = () => {
  const { design, content, setContent } = useContext(CartPageContext)
  const myoption = [
    {
      data: 'Repeat the countdown',
      value: 'Repeat the countdown',
    },
    {
      data: 'Hide the timer for the buyer',
      value: 'Hide the timer for the buyer',
    },
    {
      data: 'Delete all the items in the cart',
      value: 'Delete all the items in the cart',
    },
  ]

  return (
    <div className="row px-2 py-3  ">
      <div className="col col-md-4">
        <div className="Polaris-Card">
          <div className="Polaris-Card__Section">
            <div className="Polaris-FormLayout">
              <div className="Polaris-FormLayout__Item">
                <div className="Polaris-Labelled__LabelWrapper">
                  <div className="Polaris-Label">
                    <label
                      id="nameLabel"
                      htmlFor="name"
                      className="Polaris-Label__Text"
                    >
                      Countdown name
                    </label>
                  </div>
                </div>
                <InputComponent
                  id="name"
                  type="text"

                  default={content.timerName}
                  state2={setContent}
                  onChange={(e) => {
                    setContent({ ...content, timerName: e.target.value })
                    console.log(content)
                  }}
                />
                <div className="Polaris-Labelled__HelpText" id="nameHelpText">
                  Only visible to you. For your own internal reference.
                </div>
              </div>
              <div className="Polaris-FormLayout__Item">
                <div className="Polaris-Labelled__LabelWrapper">
                  <div className="Polaris-Label">
                    <label
                      id="textLabel"
                      htmlFor="text"
                      className="Polaris-Label__Text"
                    >
                      Text
                    </label>
                  </div>
                </div>
                <InputAreaComp
                  id="title"
                  type="text"
                  default={content.title}
                  state2={setContent}
                  onChange={(e) => {
                    setContent({ ...content, title: e.target.value })
                  }}
                />
                <div className="Polaris-Labelled__HelpText" id="nameHelpText">
                  {'Use {timer} where you want to display the timer.'}
                </div>
              </div>
            </div>
          </div>
          <div className="Polaris-Card__Section">
            <div className="Polaris-FormLayout">
              <div className="Polaris-FormLayout__Item">
                <span className="Polaris-TextStyle--variationStrong">
                  Timer
                </span>
              </div>
              <div className="Polaris-FormLayout__Item">
                <div className="Polaris-Labelled__LabelWraspper">
                  <div className="Polaris-Label">
                    <label
                      id="mnt"
                      htmlFor="mnt"
                      className="Polaris-Label__Text"
                    >
                      Minutes
                    </label>
                  </div>
                </div>
                <InputNumber
                  id="timermnt"
                  label="mnt"
                  defaultValue={content.mnt}
                  onChange={(e) => {
                    setContent({
                      ...content,
                      mnt: e,
                    })
                  }}
                />
                <div
                  className="Polaris-Labelled__HelpText"
                  id="insideTopSpacingHelpText"
                >
                  Individual fixed minutes countdown for each buyer session.
                </div>
              </div>
              <div className="Polaris-FormLayout__Item">
                <div className="">
                  <div className="Polaris-Labelled__LabelWrapper">
                    <div className="Polaris-Label">
                      <label
                        id="onceItEndsLabel"
                        htmlFor="onceItEnds"
                        className="Polaris-Label__Text"
                      >
                        Once it ends
                      </label>
                    </div>
                  </div>
                  <InputSelect
                    id="onceItEnds"
                    option={myoption}
                    value={content.onceItEnd}
                    placeholder="Repeat the countdown"
                    onChange={(e) => {
                      setContent({
                        ...content,
                        onceItEnd: e.target.value,
                      })
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Polaris-Card__Section">
            <NavLink to="/CartPage/Design_cart">
              <button
                className="Polaris-Button Polaris-Button--fullWidth"
                type="button"
              >
                <span className="Polaris-Button__Content">
                  <span className="Polaris-Button__Text">
                    Continue to Design
                  </span>
                </span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col col-md-8" id="preview">
        <div
          className="top_product_timer_wrapper"
          style={{
            marginLeft: '30px',
            position: 'sticky',
            top: '20px',
          }}
        >
          <TimerBadge_cart design={design} content={content} />
        </div>
        {/* 
          <div
            className="top_product_timer"
            style={{
              borderRadius: '8px',
              marginTop: '20px',
              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'center',
              backgroundColor: 'white',
              paddingTop: '20px',
              paddingBottom: '20px',
              border: '0px solid rbg(197, 200, 209)',
              alignItems: 'center',
              border: '1px solid rgb(197, 200, 209)',
            }}
          >
            <h2
              style={{
                fontSize: '16px',
                color: 'rgb(32, 34, 35)',
                lineHeight: '1',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                whiteSpace: 'break-spaces',
              }}
            >
              {content.title}
            </h2>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Content_cart
