import React, { useCallback, useContext, useEffect, useState } from 'react'
import { LandingContext } from '../../context/LandingContext'
import CheckBoxComponent from '../Fields/CheckBoxComponent'
import DateInput from '../Fields/DateInput'
import InputComponent from '../Fields/InputComponent'
import ResourcePickerComp from '../Fields/ResourcePickerComp'
import Modalcomp from '../Modalcomp'
import TimerBadge_land from './TimerBadge_land'


const Placement_land = () => {
  const { content, design, placement, setPlacement } = useContext(LandingContext)
  const [open, setOpen] = useState(false)
  const [selectedPro,setProducts] = useState(placement.selected !== undefined?placement.selected:{
    allCollection:true,
    specificCollection:false,
    passowrdPage:false,
    customPosition:false
  })

  useEffect(()=>{
    // if(placement.selected !== undefined){
    //   console.log("inside the uffE")
    //   setProducts(placement.selected)
    // }
  },[])

  console.log(placement.selected)
  console.log(selectedPro)
  const updateState = async (keyData) =>{
    Object.keys(selectedPro).forEach(key => {
      selectedPro[key] = false;
    });
    selectedPro[keyData] = true
    setProducts(selectedPro)
    setPlacement({selected:selectedPro})
  }

  return (
    <>
      {/* <Top_BottomPage /> */}
      <div className="row px-2 py-3 ">
        <div className="col col-md-4">
          <div className="Polaris-Card">
            {/* <div className="Polaris-Card__Section"></div> */}
            <div className="Polaris-Card__Section">
              <div className="sc-bczRLJ czvMoD">
                <div className="Polaris-FormLayout">
                  <div>
                    <div className="Polaris-FormLayout__Item">
                      <span className="Polaris-TextStyle--variationStrong">
                        Select Products
                      </span>
                    </div>
                    <CheckBoxComponent
                      id="allcollection"
                      name="products"
                      label="All collection pages"
                      checked={selectedPro.allCollection}
                      value="All collection"
                      onChange={(e) => {
                        updateState('allCollection')
                        document
                          .getElementById('spcProductbtnLand')
                          .classList.add('disable-div')

                        document
                          .getElementById('timerCardLand')
                          .classList.add('hide-div')
                      }}
                    />
                    <CheckBoxComponent
                      id="spccollection"
                      name="products"
                      label="Specific collection pages"
                      checked={selectedPro.specificCollection}
                      value={"Specific collection"}
                      onChange={(e) => {
                        updateState('specificCollection')
                        document
                          .getElementById('spcProductbtnLand')
                          .classList.remove('disable-div')

                        document
                          .getElementById('timerCardLand')
                          .classList.add('hide-div')
                      }}
                    />
                  </div>
                  <div className="Polaris-FormLayout__Item">
                    <button
                      className="Polaris-Button Polaris-Button--fullWidth disable-div"
                      type="button"
                      onClick={() => setOpen(true)}
                      id="spcProductbtnLand"

                    >
                      <span className="Polaris-Button__Content">
                        <span className="Polaris-Button__Text">
                          Select Products
                        </span>
                      </span>
                    </button>
                  </div>
                  <CheckBoxComponent
                    id="pswrd"
                    name="products"
                    value="password"
                    label="Password page"
                    checked={selectedPro.passowrdPage}
                    onChange={(e) => {
                      updateState('passowrdPage')
                      document
                        .getElementById('spcProductbtnLand')
                        .classList.add('disable-div')

                      document
                        .getElementById('timerCardLand')
                        .classList.add('hide-div')
                    }}
                  />

                  <CheckBoxComponent
                    id="cstmPosition"
                    name="products"
                    label="Custom position"
                    checked={selectedPro.customPosition}
                    value="custom position"
                    onChange={(e) => {
                      updateState('customPosition')
                      document
                        .getElementById('spcProductbtnLand')
                        .classList.add('disable-div')

                      document
                        .getElementById('timerCardLand')
                        .classList.remove('hide-div')
                    }}
                  />
                  <div
                    className="Polaris-Labelled__HelpText  "
                    id="insideTopSpacingHelpText"
                    style={{ paddingLeft: '50px' }}
                  >
                    Add timer anywhere using app blocks or code snippet provided
                    below.
                  </div>
                </div>
              </div>
            </div>
            <div className="Polaris-Card__Section">
              <span className="Polaris-TextStyle--variationStrong">
                Timer ID
              </span>
              <div
                className="Polaris-TextContainer"
                style={{ marginTop: '5px' }}
              >
                <p>Save or Publish to show timer ID</p>
              </div>
              <div
                className="Polaris-Labelled__HelpText  "
                id="insideTopSpacingHelpText"
                style={{ marginTop: '5px' }}
              >
                Countdown timer app block can be added, removed, repositioned,
                and customized through the theme editor using timer ID.
              </div>
            </div>
            <div id="timerCardLand" className="Polaris-Card__Section hide-div">
              <span className="Polaris-TextStyle--variationStrong">
                Timer code snippet
              </span>
              <div
                className="Polaris-TextContainer"
                style={{ marginTop: '5px' }}
              >
                <p>Save or Publish to show code snippet</p>
              </div>
              <div
                className="Polaris-Labelled__HelpText  "
                id="insideTopSpacingHelpText"
                style={{ marginTop: '5px' }}
              >
                You can use this code snippet anywhere in your theme.
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-8" id="preview">
          {/* <div
            className="top_product_timer_wrapper"
            style={{
              marginLeft: '30px',
              position: 'sticky',
              top: '20px',
            }}
          >
            <div
              className="top_product_timer"
              style={{
                borderRadius: '8px',
                marginTop: '20px',
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'center',
                backgroundColor: 'white',
                paddingTop: '30px',
                paddingBottom: '30px',
                border: '0px solid rbg(197, 200, 209)',
                alignItems: 'center',
              }}
            >
              <h2
                className="product-heading"
                style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: 'rgb(32, 34, 35)',
                  lineHeight: '1',
                }}
              >
                Hurry up!
              </h2>
              <p
                className="product-para"
                style={{
                  fontSize: '16px',
                  color: 'rgb(32, 34, 35)',
                  paddingTop: '2px',
                  lineHeight: '1.5',
                }}
              >
                Sale ends in:
              </p>

              <span
                className="product-timer"
                style={{ lineHeight: '1', textAlign: 'left' }}
              >
                <div className="timer-wrapper">
                  <div
                    className="time"
                    style={{
                      fontSize: '40px',
                      color: 'rgb(32, 34,35)',
                      fontFeatureSettings: 'tnum',
                      fontVariantNumeric: 'tabular-nums',
                      fontWeight: 'bold',
                      letterSpacing: '1px',
                    }}
                  >
                    00:23:59:59
                  </div>
                  <div
                    className="timer-label"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr 1fr 1fr',
                      placeItems: 'center',
                    }}
                  >
                    <div
                      class="Polaris-Labelled__HelpText"
                      id="insideTopSpacingHelpText"
                      style={{ fontSize: '14px' }}
                    >
                      Days
                    </div>
                    <div
                      class="Polaris-Labelled__HelpText"
                      id="insideTopSpacingHelpText"
                      style={{ fontSize: '14px' }}
                    >
                      Hrs
                    </div>
                    <div
                      class="Polaris-Labelled__HelpText"
                      id="insideTopSpacingHelpText"
                      style={{ fontSize: '14px' }}
                    >
                      Mins
                    </div>
                    <div
                      class="Polaris-Labelled__HelpText"
                      id="insideTopSpacingHelpText"
                      style={{ fontSize: '10px' }}
                    >
                      Secs
                    </div>
                  </div>
                </div>
              </span>
              <div className="button-shop" style={{ marginLeft: '10px' }}>
                <button
                  style={{
                    backgroundColor: 'black',
                    border: '0px solid',
                    borderRadius: '4px',
                    color: 'white',
                    padding: '8px 16px',
                    marginTop: '20px',
                  }}
                >
                  Shop now!
                </button>
              </div>
            </div>
          </div> */}
          <TimerBadge_land design={design} content={content} />
        </div>
      </div>
      <div>
        <ResourcePickerComp type="Product" state1={open} state2={setOpen} />
      </div>
    </>
  )
}

export default Placement_land
