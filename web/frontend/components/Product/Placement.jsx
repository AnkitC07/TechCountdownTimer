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
import TImer from '../TImer'
import Timerbadge from './Timerbadge'
import CustomPosition from '../layouts/CustomPosition'

function Placement() {
  const { content, design, placement, setPlacement,dataId } = useContext(ProductContext)
  const [open, setOpen] = useState(false)
  const [selectedPro,setProducts] = useState(placement.selectProduct)

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let id = urlParams.get("id");

  if(dataId !== undefined && id == null){
    id = dataId
  }

  console.log(id,"checking placement data")

  
  const updateState = async (keyData) =>{
    Object.keys(selectedPro).forEach(key => {
      selectedPro[key] = false;
    });
    selectedPro[keyData] = true
    console.log(selectedPro)
    setProducts(selectedPro)
    setPlacement({...placement,selectProduct:selectedPro})
  }

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
                      checked={selectedPro.allProducts}
                      onChange={(e) => {
                        updateState('allProducts')
                        // setPlacement({
                        //   ...placement,
                        //   selectProduct: e.target.value,
                        // })

                        // document
                        //   .getElementById('spcProduct-btn')
                        //   .classList.add('disable-div')
                        // document
                        //   .getElementById('customPosition')
                        //   .classList.add('hide-div')
                        // document
                        //   .getElementById('timer-card')
                        //   .classList.add('hide-div')
                      }}
                    />
                    <CheckBoxComponent
                      id="spcProduct"
                      name="products"
                      label="Specific products"
                      checked={selectedPro.specificProducts}
                      onChange={(e) => {
                        updateState('specificProducts')
                      }}
                    />
                  </div>
                  <div className="Polaris-FormLayout__Item ">
                    <button
                      className={`Polaris-Button Polaris-Button--fullWidth ${selectedPro.specificProducts == true?"":"disable-div"}`}
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
                    checked={selectedPro.allProductsWithTags}
                    onChange={(e) => {
                      updateState('allProductsWithTags')
                    }}
                  />
                  <div
                    id="customPosition"
                    className={`Polaris-FormLayout__Item ${selectedPro.allProductsWithTags == true?'':"hide-div"}`}
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
                    checked={selectedPro.customPosition}
                    onChange={(e) => {
                      updateState('customPosition')
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

            <CustomPosition 
            id={id}
            checked={selectedPro.customPosition}
            />
            
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
        <ResourcePickerComp 
        type="Product" 
        state1={open} 
        state2={setOpen} 
        onSelection={(e) => {
          setOpen(false)
          setPlacement({...placement,
            specificProducts:e.selection.map(x=>{
              return {id:x.id}
            })
          }) 
        }}
        initialSelectionIds={placement.specificProducts}
        />
      </div>
    </>
  )
}

export default Placement
