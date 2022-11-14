import { Checkbox } from '@shopify/polaris'
import { useState, useCallback } from 'react'

function CheckboxExample(props) {
  return (
    <Checkbox
      label={props.label}
      checked={props.state1}
      onChange={props.onChange}
    />
  )
}
export default CheckboxExample
