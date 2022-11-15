import React, { useCallback, useContext, useState } from 'react'
import CheckBoxComponent from '../Fields/CheckBoxComponent'
import DateInput from '../Fields/DateInput'
import InputComponent from '../Fields/InputComponent'
import Modalcomp from '../Modalcomp'
import InputNumber from '../Fields/InputNumber'
import InputSelect from '../Fields/InputSelect'
import { ProductPage } from './ProductPage'
import { ProductContext } from '../../context/ProductContext'
import { ResourcePicker } from '@shopify/app-bridge-react'
import ResourcePickerComp from '../Fields/ResourcePickerComp'
import { useEffect } from 'react'
import TImer from '../TImer'
import Timerbadge from './Timerbadge'
function Placement() {
  const { content, design, placement, setPlacement } = useContext(ProductContext)
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="row px-4 py-3">
        <div className="col col-md-7">
          <div className="Polaris-Card" style={{ maxWidth: '360px' }}>
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
                      id="allproducts"
                      name="products"
                      label="All products"
                      checked={true}
                      onChange={(e) => {
                        setPlacement({
                          ...placement,
                          selectProduct: e.target.value,
                        })

                        document
                          .getElementById('spcProduct-btn')
                          .classList.add('disable-div')
                        document
                          .getElementById('customPosition')
                          .classList.add('hide-div')
                        document
                          .getElementById('timer-card')
                          .classList.add('hide-div')
                      }}
                    />
                    <CheckBoxComponent
                      id="spcProduct"
                      name="products"
                      label="Specific products"
                      onChange={(e) => {
                        setPlacement({
                          ...placement,
                          selectProduct: e.target.value,
                        })
                        document
                          .getElementById('spcProduct-btn')
                          .classList.remove('disable-div')
                        document
                          .getElementById('customPosition')
                          .classList.add('hide-div')
                        document
                          .getElementById('timer-card')
                          .classList.add('hide-div')
                      }}
                    />
                  </div>
                  <div className="Polaris-FormLayout__Item ">
                    <button
                      className="Polaris-Button Polaris-Button--fullWidth disable-div"
                      type="button"
                      onClick={() => setOpen(true)}
                      id="spcProduct-btn"
                    >
                      <span className="Polaris-Button__Content">
                        <span className="Polaris-Button__Text">
                          Select Products
                        </span>
                      </span>
                    </button>
                  </div>
                  <CheckBoxComponent
                    id="spcTags"
                    name="products"
                    label="All products with specific tags"
                    onChange={(e) => {
                      setPlacement({
                        ...placement,
                        selectProduct: e.target.value,
                      })
                      document
                        .getElementById('spcProduct-btn')
                        .classList.add('disable-div')
                      document
                        .getElementById('customPosition')
                        .classList.remove('hide-div')
                      document
                        .getElementById('timer-card')
                        .classList.add('hide-div')
                    }}
                  />
                  <div
                    id="customPosition"
                    className="Polaris-FormLayout__Item hide-div"
                  >
                    <InputComponent
                      placeholder={'Add tags'}
                      default={placement.tags}
                      onChange={(e) => {
                        setPlacement({
                          ...placement,
                          tags: e.target.value,
                        })
                      }}
                    />
                  </div>
                  <CheckBoxComponent
                    id="cstmPosition"
                    name="products"
                    label="Custom position"
                    onChange={(e) => {
                      setPlacement({
                        ...placement,
                        selectProduct: e.target.value,
                      })
                      document
                        .getElementById('spcProduct-btn')
                        .classList.add('disable-div')
                      document
                        .getElementById('customPosition')
                        .classList.add('hide-div')
                      document
                        .getElementById('timer-card')
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
            <div id="timer-card" className="Polaris-Card__Section hide-div">
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
        <div className="col col-md-5">
          <Timerbadge design={design} content={content} />

        </div>
      </div>
      <div>
        {/* <ResourcePicker
          resourceType="Product"
          open={open}
          showVariants={false}
          onCancel={() => setOpen(false)}
        /> */}
        <ResourcePickerComp type="Product" state1={open} state2={setOpen} />
      </div>
    </>
  )
}

export default Placement
