import React from 'react'
import DatePickerExample from './DatePickerInput'
import { DatePicker } from '@shopify/polaris'
import { useState, useCallback } from 'react'
function DateInput(props) {
  const [{ month, year }, setDate] = useState({ month: 1, year: 2018 })
  const [selectedDates, setSelectedDates] = useState({
    start: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
    end: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
  })

  const handleMonthChange = useCallback(
    (month, year) => setDate({ month, year }),
    [],
  )

  return (
    <>
      <div className="dateSelector">
        <div className="Polaris-Connected">
          <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
            <div className="Polaris-TextField Polaris-TextField--hasValue ">
              <input
                id={props.id}
                className="Polaris-TextField__Input"
                type={props.type}
                defaultValue={props.default}
                placeholder={props.placeholder}
                name={props.name}
                default={props.default}
                aria-labelledby={props.label}
              />
              <div className="Polaris-TextField__Backdrop" />
            </div>
          </div>
        </div>
        {/* <DatePickerExample /> */}
      </div>
    </>
  )
}

export default DateInput
