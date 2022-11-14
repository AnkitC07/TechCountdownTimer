import { TextField } from '@shopify/polaris'
import React from 'react'

function InputNumber(props) {
  return (
    <div className="input-number-box">
      <div className="px" style={{ display: 'none' }}>
        px
      </div>
      {/* <div className="Polaris-Connected">
        <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
          <div className="Polaris-TextField Polaris-TextField--hasValue pxicon">
            <input
              id={props.id}
              className="Polaris-TextField__Input"
              type="number"
              aria-labelledby={props.label}
              aria-invalid="false"
              defaultValue={props.defaultValue}
              onChange={props.onChange}
            />
            <div className="Polaris-TextField__Spinner" aria-hidden="true">
              <div
                role="button"
                className="Polaris-TextField__Segment prev"
                tabIndex={-1}
              >
                <div className="Polaris-TextField__SpinnerIcon">
                  <span className="Polaris-Icon">
                    <span className="Polaris-VisuallyHidden" />
                    <svg
                      viewBox="0 0 20 20"
                      className="Polaris-Icon__Svg"
                      focusable="false"
                      aria-hidden="true"
                    >
                      <path d="M6.902 12h6.196c.751 0 1.172-.754.708-1.268l-3.098-3.432c-.36-.399-1.055-.399-1.416 0l-3.098 3.433c-.464.513-.043 1.267.708 1.267Z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div
                role="button"
                className="Polaris-TextField__Segment next"
                tabIndex={-1}
              >
                <div className="Polaris-TextField__SpinnerIcon">
                  <span className="Polaris-Icon">
                    <span className="Polaris-VisuallyHidden" />
                    <svg
                      viewBox="0 0 20 20"
                      className="Polaris-Icon__Svg"
                      focusable="false"
                      aria-hidden="true"
                    >
                      <path d="M13.098 8h-6.196c-.751 0-1.172.754-.708 1.268l3.098 3.432c.36.399 1.055.399 1.416 0l3.098-3.433c.464-.513.043-1.267-.708-1.267Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="Polaris-TextField__Backdrop" />
          </div>
        </div>
      </div> */}
      <TextField
        type="number"
        value={props.defaultValue}
        onChange={props.onChange}
        autoComplete="off"
      />
    </div>
  )
}

export default InputNumber
