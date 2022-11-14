import { Card, RangeSlider } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'

const Rangeslider = (props) => {
  const [rangeValue, setRangeValue] = useState(32)

  const handleRangeSliderChange = useCallback(
    (value) => setRangeValue(value),
    [],
  )

  return (
    <>
      <RangeSlider
        label="Gradient angle degree"
        min={0}
        max={360}
        value={props.state1}
        onChange={props.onChange}
        output
      />
    </>
  )
}

export default Rangeslider
