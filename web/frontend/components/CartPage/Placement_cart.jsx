import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartPageContext } from "../../context/CartPageContext";
import CheckBoxComponent from "../Fields/CheckBoxComponent";
import CustomPosition from "../layouts/CustomPosition";
import TimerBadge_cart from "./TimerBadge_cart";

const Placement_cart = () => {
  const { content, design, placement, setPlacement, dataId } =
    useContext(CartPageContext);
  const [selectedPro, setProducts] = useState(
    placement.selectProduct !== undefined
      ? placement.selectProduct
      : {
          topOfCart: true,
          customPosition: false,
        }
  );

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let id = urlParams.get("id");

  if (dataId !== undefined && id == null) {
    id = dataId;
  }

  console.log("placement Id data", id);
  const updateState = async (keyData) => {
    Object.keys(selectedPro).forEach((key) => {
      selectedPro[key] = false;
    });
    selectedPro[keyData] = true;
    setProducts(selectedPro);
    setPlacement({ selectProduct: selectedPro });
  };

  return (
    <>
      <div className="row px-3 py-3">
        <div className="col col-md-4">
          <div className="Polaris-Card" style={{ maxWidth: "380px" }}>
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
                      checked={selectedPro.topOfCart}
                      label="At the top of the cart"
                      onChange={(e) => {
                        updateState("topOfCart");
                      }}
                    />
                  </div>

                  <CheckBoxComponent
                    id="cstmPosition"
                    name="products"
                    label="Custom position"
                    checked={selectedPro.customPosition}
                    onChange={(e) => {
                      updateState("customPosition");
                    }}
                  />
                  <div
                    className="Polaris-Labelled__HelpText  "
                    id="insideTopSpacingHelpText"
                    style={{ paddingLeft: "50px" }}
                  >
                    Add timer anywhere using app blocks or code snippet provided
                    below.
                  </div>
                </div>
              </div>
            </div>

            <CustomPosition id={id} checked={selectedPro.customPosition} />
          </div>
        </div>
        <div className="col col-md-8">
          <TimerBadge_cart design={design} content={content} />
        </div>
      </div>
    </>
  );
};

export default Placement_cart;
