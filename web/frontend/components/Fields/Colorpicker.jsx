import React from 'react'
import {
  ColorPicker,
  hsbToHex,
  Popover,
  rgbToHsb,
  // hexToRgb,
} from '@shopify/polaris'
import { useState } from 'react'
// import { hexToRgb } from '@shopify/polaris/build/ts/latest/src/utilities/color-transformers'
import hexRgb from 'hex-rgb'

const Colorpicker = (props) => {
  const [color, setColor] = useState({
    hue: 0,
    brightness: 0,
    saturation: 39,
  })

  // console.log(hsbToHex(color))
  const [popoverActive, setPopoverActive] = useState(false)

  function handlePopoverClose() {
    setPopoverActive(false)
  }

  function handlePopoverOpen() {
    setPopoverActive(true)
  }
  // console.log(props.state1)

  const rbg = props.state1

  const activator = (
    <div
      className="kEdTUc"
      onClick={handlePopoverOpen}
      style={{
        height: '36px',
        width: '48px',
        cursor: 'pointer',
        border: '1px solid',
        borderRadius: '0.3rem',
        background: `${rbg}`,
      }}
    />
  )
  return (
    <div className="Polaris-Connected__Item">
      <Popover
        active={popoverActive}
        activator={activator}
        onClose={handlePopoverClose}
      >
        <Popover.Section>
          <ColorPicker
            onChange={props.onChange}
            // color={props.state1}
            // color={rgbToHsb(
            //   hexRgb(
            //     props.state1.length <= 6 || props.state1.length > 7
            //       ? '#000000'
            //       : props.state1,
            //   ),
            // )}
          />
        </Popover.Section>
      </Popover>
    </div>
  )
}

export default Colorpicker
