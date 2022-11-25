import React, { useCallback, useContext, useEffect, useState } from 'react'
import { LandingContext } from '../../context/LandingContext'
import CheckBoxComponent from '../Fields/CheckBoxComponent'
import DateInput from '../Fields/DateInput'
import InputComponent from '../Fields/InputComponent'
import ResourcePickerComp from '../Fields/ResourcePickerComp'
import Modalcomp from '../Modalcomp'
import TimerBadge_land from './TimerBadge_land'
import CustomPosition from '../layouts/CustomPosition'

const Placement_land = () => {
  const { content, design, placement, setPlacement ,dataId} = useContext(LandingContext)
  const [open, setOpen] = useState(false)
  const [selectedPro,setProducts] = useState(placement.selected !== undefined?placement.selected:{
    allCollection:true,
    specificCollection:false,
    passowrdPage:false,
    customPosition:false
  })

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let id = urlParams.get("id");

  if(dataId !== undefined && id == null){
    id = dataId
  }

  const updateState = async (keyData) =>{
    Object.keys(selectedPro).forEach(key => {
      selectedPro[key] = false;
    });
    selectedPro[keyData] = true
    setProducts(selectedPro)
    setPlacement({...placement,selected:selectedPro})
  }

  return (
    <>
      <div className="row px-2 py-3 ">
        <div className="col col-md-4">
          <div className="Polaris-Card">
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
                      }}
                    />
                  </div>
                  <div className="Polaris-FormLayout__Item">
                    <button
                      className={`Polaris-Button Polaris-Button--fullWidth ${selectedPro.specificCollection == true?'':"disable-div"}`}
                      type="button"
                      onClick={() => setOpen(true)}
                      id="spcProductbtnLand"
                    >
                      <span className="Polaris-Button__Content">
                        <span className="Polaris-Button__Text">
                          Select Collections 
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
        <div className="col col-md-8" id="preview">
          <TimerBadge_land design={design} content={content} />
        </div>
      </div>
      <div>
        <ResourcePickerComp 
        type="Collection" 
        state1={open} 
        state2={setOpen}
        onSelection={(e) => {
          setOpen(false)
          setPlacement({...placement,
            specificCollections:e.selection.map(x=>{
              return {id:x.id}
            })
          }) 
        }}
        initialSelectionIds={placement.specificCollections}
         />
      </div>
    </>
  )
}

export default Placement_land
