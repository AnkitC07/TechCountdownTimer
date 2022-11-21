import React, { useState, createContext, useEffect } from 'react'

export const TopBottomContext = createContext()

let date = new Date()
date.setDate(date.getDate() + 1)
export const contentCheck = {
  timerName: 'Timer name',
  title: 'Hurry up! Sale ends in: ',
  subHeading: '',
  callToAction: 'No call to action',
  buttonText: 'Shop now!',
  link: '#',
  closeIcon: true,
  days: 'Days',
  hrs: 'Hrs',
  mins: 'Mins',
  secs: 'Secs',
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
  dailyStartMnt: '37',
  dailyEndHrs: '12',
  dailyEndMnt: '37',
  timerStart: 'rightNow',
  startDate: {
    start: new Date(),
    end: new Date(),
  },
  startHrs: date.getHours(),
  startMnt: date.getMinutes(),
  endDate: {
    start: date,
    end: date,
  },
  endHrs: '00',
  endMnt: '12',
  starts: '',
  ends: '',
  onceItEnd: 'Unpublish timer',
}

export const designCheck = {
  positioning: 'Top page',
  stickyBar: false,
  template: 'Custom',
  backtype: 'singleBackground',
  singleColor: '#FFFFFF',
  gradAngle: '90',
  gradClr1: '#DDDDDD',
  gradClr2: '#FFFFFF',
  borderSize: '0',
  borderColor: '#c5c8d1',
  font: 'Custom',
  titleSize: '18',
  titleColor: '#202223',
  subheadingSize: '14',
  subheadingColor: '#202223',
  timerSize: '22',
  timerColor: '#202223',
  legendSize: '10',
  legendColor: '#6d7175',
  buttonColor: '#202223',
  buttonFontSize: '14',
  buttonFontColor: '#FFFFFF',
  cornerRadus: '4',
  closeIconColorl: '#6d7175',
}

export const placementCheck = {
  selectProduct: '',
  specProduct: [],
  specCollection: [],
}

export const TopBottomProvider = (props) => {



  const [ID, setID] = useState('')
  const [content, setContent] = useState(contentCheck)
  const [design, setDesign] = useState(designCheck)
  const [placement, setPlacement] = useState(placementCheck)
  const [Html, setHtml] = useState('')
  const [ispublished, setIspublished] = useState(false)

  return (
    <TopBottomContext.Provider
      value={{
        ID, setID,
        content,
        setContent,
        design,
        setDesign,
        placement,
        setPlacement,
        ispublished, setIspublished,
        Html, setHtml
      }}
    >
      {props.children}
    </TopBottomContext.Provider>
  )
}
