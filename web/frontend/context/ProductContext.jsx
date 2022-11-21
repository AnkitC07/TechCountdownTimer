import React, { useState, createContext, useRef } from 'react'

export const ProductContext = createContext()
let date = new Date()
date.setDate(date.getDate() + 1)

export const productContent = {
  productTimer: 'Timer Name',
  productTitle: 'Hurry up!',
  productSubheading: 'Sale ends in: ',
  productDays: 'Days',
  productHrs: 'Hrs',
  productMin: 'Mins',
  productSec: 'Secs',
  timerType: 'toDate',
  fixedTime: '120',
  RepeatOn: {
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: true,
  },
  dailyStartHrs: '11',
  dailyStartMnt: '30',
  dailyEndHrs: '12',
  dailyEndMnt: '37',
  timerStart: 'rightNow',
  selectedDates: {
    start: new Date(),
    end: new Date(),
  },
  startHrs: date.getHours(),
  startMnt: date.getMinutes(),
  selectedEndDates: {
    start: date,
    end: date,
  },
  endHrs: '12',
  endMnt: '00',
  starts: '',
  ends: '',
  onceItEnd: 'Unpublish timer',
}

export const productDesign = {
  template: 'Custom',
  backtype: 'singleBackground',
  singleColor: '#FFFFFF',
  gradAngle: '90',
  gradClr1: '#DDDDDD',
  gradClr2: '#FFFFFF',
  cornerRadus: '8',
  borderSize: '0',
  borderColor: '#c5c8d1',
  spaceIntop: '30',
  spaceInbottom: '30',
  spaceOuttop: '20',
  spaceOutbottom: '20',
  font: 'Use your theme fonts',
  titleSize: '28',
  titleColor: '#202223',
  subheadingSize: '16',
  subheadingColor: '#202223',
  timerSize: '40',
  timerColor: '#202223',
  legendSize: '14',
  legendColor: '#6d7175',
}

export const productPlacement = {
  selectProduct: '',
  specProduct: [],
  tags: '',
}

export const ProductProvider = (props) => {
  let date = new Date()
  date.setDate(date.getDate() + 1)
  const [days, setDays] = React.useState(0)
  const [hours, setHours] = React.useState(0)
  const [minutes, setMinutes] = React.useState(0)
  const [seconds, setSeconds] = React.useState(0)



  const [content, setContent] = useState(productContent)



  const [design, setDesign] = useState(productDesign)

  const [placement, setPlacement] = useState(productPlacement)
  const [Html, setHtml] = useState('')
  const [ispublished, setIspublished] = useState(false)
  
  return (
    <ProductContext.Provider
      value={{
        days, setDays,
        hours, setHours,
        minutes, setMinutes,
        seconds, setSeconds,
        content,
        setContent,
        design,
        setDesign,
        placement,
        setPlacement,
        ispublished, setIspublished,
        Html, setHtml,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  )
}
