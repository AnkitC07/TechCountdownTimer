import React, { useCallback, useContext, useState } from 'react'
import CheckBoxComponent from '../Fields/CheckBoxComponent'
import { TopBottomContext } from '../../context/Top_Bottom_Context'
import ResourcePickerComp from '../Fields/ResourcePickerComp'
import TimerBagde_Top from './TimerBagde_Top'
import { useEffect } from 'react'
function Placement() {
  const { content, design, placement, setPlacement } = useContext(TopBottomContext)
  const [open, setOpen] = useState(false)
  const [openCol, setOpenCol] = useState(false)
  const [options,setOptions] = useState(placement.selectOptions)
 console.log(placement.selectOptions,"asdjlakdsjlkasjlkasjd")
  let height;
  document.addEventListener('scroll', () => {
    height = window.scrollY
      if (height >= '30') {
        document.getElementById('top-change').classList.remove('top-change')
        document.getElementById('preview').classList.add('extra-margin')
      } else {
        document.getElementById('top-change').classList.add('top-change')
        document.getElementById('preview').classList.remove('extra-margin')
      }
  })

  console.log(placement)

  const updateState = async (keyData) =>{
    Object.keys(options).forEach(key => {
      options[key] = false;
    });
    console.log(keyData,"chekcing checked values")
    options[keyData] = true
    console.log(options,"opetion checked")
    setOptions(options)
    setPlacement({...placement,selectOptions:options})
  }

  return (
    <>
      {/* <Top_BottomPage /> */}
      {height >= 53 ? <div className="row px-5 py-3  " id="top-change">
        <div className="col col-md-4">
          <div className="Polaris-Card">
            {/* <div className="Polaris-Card__Section"></div> */}
            <div className="Polaris-Card__Section" style={{marginBottom:"100px"}}>
              <div className="sc-bczRLJ czvMoD">
                <div className="Polaris-FormLayout">
                  <div>
                    <div className="Polaris-FormLayout__Item">
                      <span className="Polaris-TextStyle--variationStrong">
                      Select pages to display the bar
                      </span>
                    </div>
                    <CheckBoxComponent
                      id="everyPage"
                      name="products"
                      label="Show on every page"
                      checked={options.every}
                      onChange={(e) => {
                        updateState('every')
                      }}
                    />
                    <CheckBoxComponent
                      id="homePage"
                      name="products"
                      label="Show on home page only"
                      checked={options.home}
                      onChange={(e) => {
                        updateState('home')
                      }}
                    />
                    <CheckBoxComponent
                      id="allproducts"
                      name="products"
                      label="Show on all product pages"
                      checked={options.allProducts}
                      onChange={(e) => {
                        updateState('allProducts')
                      }}
                    />
                    <CheckBoxComponent
                      id="spcProduct"
                      name="products"
                      label="Show on specific product pages"
                      checked={options.specificProducts}
                      onChange={(e) => {
                        updateState('specificProducts')
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
                    id="allCollections"
                    name="products"
                    label="Show on all collection pages"
                    checked={options.allCollections}
                    onChange={(e) => {
                      updateState('allCollections')
                    }}
                  />
                  <CheckBoxComponent
                    id="spcCollection"
                    name="products"
                    checked={options.specificCollections}
                    label="Show on specific collection pages"
                    onChange={(e) => {
                      updateState('specificCollections')
                    }}
                  />
                  <div id='collection_top' className={`Polaris-FormLayout__Item disable-div ${options.specificCollections?"":"disable-div"}`}>
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
        <div className="col col-md-18 extra-margin" id="preview">

          <TimerBagde_Top design={design} content={content} />

        </div>
      </div> : <div className="row px-5 py-3 top-change " id="top-change">
        <div className="col col-md-4">
          <div className="Polaris-Card">
            {/* <div className="Polaris-Card__Section"></div> */}
            <div className="Polaris-Card__Section" style={{marginBottom:"100px"}}>
              <div className="sc-bczRLJ czvMoD">
                <div className="Polaris-FormLayout">
                  <div>
                    <div className="Polaris-FormLayout__Item">
                      <span className="Polaris-TextStyle--variationStrong">
                      Select pages to display the bar
                      </span>
                    </div>
                    <CheckBoxComponent
                      id="everyPage"
                      name="products"
                      label="Show on every page"
                      checked={options.every}
                      onChange={(e) => {
                        updateState('every')
                      }}
                    />
                    <CheckBoxComponent
                      id="homePage"
                      name="products"
                      label="Show on home page only"
                      checked={options.home}
                      onChange={(e) => {
                        updateState('home')
                      }}
                    />
                    <CheckBoxComponent
                      id="allproducts"
                      name="products"
                      label="Show on all product pages"
                      checked={options.allProducts}
                      onChange={(e) => {
                        updateState('allProducts')
                      }}
                    />
                    <CheckBoxComponent
                      id="spcProduct"
                      name="products"
                      label="Show on specific product pages"
                      checked={options.specificProducts}
                      onChange={(e) => {
                        updateState('specificProducts')
                      }}
                    />
                  </div>
                  <div id='products_top' className={`Polaris-FormLayout__Item ${options.specificProducts?'':"disable-div"}`}>
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
                    id="allCollections"
                    name="products"
                    label="Show on all collection pages"
                    checked={options.allCollections}
                    onChange={(e) => {
                      updateState('allCollections')
                    }}
                  />
                  <CheckBoxComponent
                    id="spcCollection"
                    name="products"
                    label="Show on specific collection pages"
                    checked={options.specificcollections}
                    onChange={(e) => {
                      updateState('specificcollections')
                    }}
                  />
                  <div id='collection_top' className={`Polaris-FormLayout__Item ${options.specificcollections?'':"disable-div"}`}>
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
      </div>}


      <div>
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
        <ResourcePickerComp
          type="Collection"
          state1={openCol}
          state2={setOpenCol}
          onSelection={(e) => {
            setOpenCol(false)
            setPlacement({...placement,
              specificCollection:e.selection.map(x=>{
                return {id:x.id}
              })
            }) 
          }}
          initialSelectionIds={placement.specificCollection}
        />
      </div>
    </>
  )
}

export default Placement
