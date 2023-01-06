import { Button, DatePicker, Popover } from '@shopify/polaris'
import { useEffect, useContext } from 'react'
import { useState, useCallback } from 'react'
import { ProductContext } from '../../context/ProductContext'
import InputComponent from './InputComponent'

export default function DatePickerExample(props) {
  const d = new Date()

  const checkData = useContext(ProductContext)

  const [active, setActive] = useState(false)
  const [{ month, year }, setDate] = useState({
    month: d.getMonth(),
    year: d.getFullYear(),
  })

  const handleMonthChange = useCallback(
    (month, year) => setDate({ month, year }),
    [],
  )
  const togglePopover = () => {
    setActive(!active)
  }

  const Activator = () => {
    return (
      <div onClick={togglePopover}>
        <InputComponent
          onChange={() => { }}
          default={String(props.state1.end).substring(4, 15)}
        />
      </div>
    )
  }

  let beforeDate = new Date()
  beforeDate.setDate(beforeDate.getDate() - 1)

  return (
    <>
      <div className="date_picker">
        <Popover
          active={active}
          activator={<Activator />}
          onClose={togglePopover}
          sectioned
        >
          <DatePicker
            month={month}
            year={year}
            disableDatesBefore={beforeDate}
            onChange={props.onChange}
            onMonthChange={handleMonthChange}
            selected={props.state1}
          />
        </Popover>
      </div>
    </>
  )
}
