import React, { useCallback, useContext, useState } from 'react'
import CheckBoxComponent from '../Fields/CheckBoxComponent'
import DateInput from '../Fields/DateInput'
import InputComponent from '../Fields/InputComponent'
import Modalcomp from '../Modalcomp'
// import InputNumber from './Fields/InputNumber'
// import InputSelect from './Fields/InputSelect'
import { ProductPage } from '../Product/ProductPage'
import Top_BottomPage from './Top_BottomPage'
import { MobileCancelMajor } from '@shopify/polaris-icons'
import { TopBottomContext } from '../../context/Top_Bottom_Context'
import ResourcePickerComp from '../Fields/ResourcePickerComp'
import TimerBagde_Top from './TimerBagde_Top'
function Placement() {
  const { content, design, placement, setPlacement } = useContext(TopBottomContext)
  const [open, setOpen] = useState(false)
  const [openCol, setOpenCol] = useState(false)

  document.addEventListener('scroll', () => {
    const height = window.scrollY
    console.log(height)
    if (height >= '30') {
      document.getElementById('top-change').classList.remove('top-change')
      document.getElementById('preview').classList.add('extra-margin')
    } else {
      document.getElementById('top-change').classList.add('top-change')
      document.getElementById('preview').classList.remove('extra-margin')
    }
  })
  return (
    <>
      {/* <Top_BottomPage /> */}
      <div className="row px-5 py-3 top-change " id="top-change">
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
                      id="everyPage"
                      name="products"
                      label="Show on every page"
                      onChange={(e) => {
                        setPlacement({
                          ...placement,
                          selectProduct: e.target.value,
                        })
                        document
                          .getElementById('products_top')
                          .classList.add('disable-div')
                        document
                          .getElementById('collection_top')
                          .classList.add('disable-div')
                      }}
                    />
                    <CheckBoxComponent
                      id="homePage"
                      name="products"
                      label="Show on home page only"
                      onChange={(e) => {
                        setPlacement({
                          ...placement,
                          selectProduct: e.target.value,
                        })
                        document
                          .getElementById('products_top')
                          .classList.add('disable-div')
                        document
                          .getElementById('collection_top')
                          .classList.add('disable-div')
                      }}
                    />
                    <CheckBoxComponent
                      id="allproducts"
                      name="products"
                      label="Show on all product pages"
                      onChange={(e) => {
                        setPlacement({
                          ...placement,
                          selectProduct: e.target.value,
                        })
                        document
                          .getElementById('products_top')
                          .classList.add('disable-div')
                        document
                          .getElementById('collection_top')
                          .classList.add('disable-div')
                      }}
                    />
                    <CheckBoxComponent
                      id="spcProduct"
                      name="products"
                      label="Show on specific product pages"
                      onChange={(e) => {
                        setPlacement({
                          ...placement,
                          selectProduct: e.target.value,
                        })
                        document
                          .getElementById('products_top')
                          .classList.remove('disable-div')
                        document
                          .getElementById('collection_top')
                          .classList.add('disable-div')
                      }}
                    />
                  </div>
                  <div id='products_top' className="Polaris-FormLayout__Item disable-div">
                    <button
                      className="Polaris-Button Polaris-Button--fullWidth"
                      type="button"
                      onClick={() => setOpen(true)}
                    >
                      <span className="Polaris-Button__Content">
                        <span className="Polaris-Button__Text">
                          Select Products
                        </span>
                      </span>
                    </button>
                  </div>
                  <CheckBoxComponent
                    id="allCollection"
                    name="products"
                    label="Show on all collection pages"
                    onChange={(e) => {
                      setPlacement({
                        ...placement,
                        selectProduct: e.target.value,
                      })
                      document
                        .getElementById('products_top')
                        .classList.add('disable-div')
                      document
                        .getElementById('collection_top')
                        .classList.add('disable-div')
                    }}
                  />
                  <CheckBoxComponent
                    id="spcCollection"
                    name="products"
                    label="Show on specific collection pages"
                    onChange={(e) => {
                      setPlacement({
                        ...placement,
                        selectProduct: e.target.value,
                      })
                      document
                        .getElementById('products_top')
                        .classList.add('disable-div')
                      document
                        .getElementById('collection_top')
                        .classList.remove('disable-div')
                    }}
                  />
                  <div id='collection_top' className="Polaris-FormLayout__Item disable-div">
                    <button
                      className="Polaris-Button Polaris-Button--fullWidth"
                      type="button"
                      onClick={() => setOpenCol(true)}
                    >
                      <span className="Polaris-Button__Content">
                        <span className="Polaris-Button__Text">
                          Select Collection
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-18" id="preview">

          <TimerBagde_Top design={design} content={content} />

        </div>
      </div>
      <div>
        <ResourcePickerComp type="Product" state1={open} state2={setOpen} />
        <ResourcePickerComp
          type="Collection"
          state1={openCol}
          state2={setOpenCol}
        />
      </div>
    </>
  )
}

export default Placement
