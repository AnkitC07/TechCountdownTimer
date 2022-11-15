import React from 'react'
import { useContext } from 'react'
import { CartPageContext } from '../../context/CartPageContext'
import CheckBoxComponent from '../Fields/CheckBoxComponent'
import TimerBadge_cart from './TimerBadge_cart'

const Placement_cart = () => {
  const { content, design, placement, setPlacement } = useContext(CartPageContext)

  return (
    <>
      <div className="row px-3 py-3">
        <div className="col col-md-4">
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
                      checked={true}
                      label="At the top of the cart"
                      onChange={(e) => {
                        setPlacement({
                          ...placement,
                          selectProduct: e.target.value,
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


            {placement.selectProduct == 'cstmPosition' ? <div className="Polaris-Card__Section">
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
            </div> : ''}





          </div>
        </div>
        <div className="col col-md-8">
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
          <TimerBadge_cart design={design} content={content} />

        </div>
      </div>
    </>
  )
}

export default Placement_cart
