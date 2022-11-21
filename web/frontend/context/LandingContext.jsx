import React, { useState, createContext } from 'react'

export const LandingContext = createContext()
export const LandingProvider = (props) => {
  let date = new Date()
  date.setDate(date.getDate() + 1)

  const [content, setContent] = useState({
    timerName: 'Timer name',
    title: 'Hurry up!',
    subHeading: 'Sale ends in: ',
    callToAction: 'No call to action',
    buttonText: 'Shop now!',
    link: '#',
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
  })
  const [design, setDesign] = useState({
    template: 'Custom',
    backtype: 'singleBackground',
    singleColor: '#FFFFFF',
    gradAngle: '90',
    gradClr1: '#DDDDDD',
    gradClr2: '#FFFFFF',
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
    buttonColor: '#202223',
    buttonFontSize: '14',
    buttonFontColor: '#FFFFFF',
    cornerRadus: '4',
  })
  const [placement, setPlacement] = useState({
    selectProduct: '',
    specProduct: [],
    tags: '',
  })
  const [Html, setHtml] = useState()
  const [ispublished, setIspublished] = useState(false)
  return (
    <LandingContext.Provider
      value={{
        content,
        setContent,
        design,
        setDesign,
        placement,
        setPlacement,
        Html, setHtml,
        ispublished, setIspublished
      }}
    >
      {props.children}
    </LandingContext.Provider>
  )
}
