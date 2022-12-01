import React, { useState, createContext } from 'react'
let date = new Date()
date.setDate(date.getDate() + 1)

export const LandingContent = {
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
  timerType:{
    countdownDate:{
      status:true,
      rightNow:true,
      schedule:false,
      startDate:{
        date:{
          start:new Date(),
          end:new Date()
        },
        hr:date.getHours(),
        min:date.getMinutes()
      },
      endDate:{
        date:{
          start:date,
          end:date
        },
        hr:date.getHours(),
        min:date.getMinutes()
      }
    },
    fixedTime:{
      status:false,
      time:'120'
    },
    recurring:{
      status:false,
      repeatOn: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
      },
      dailyStart:{
        hr:'11',
        min:'30'
      },
      dailyEnd:{
        hr:'11',
        min:'30'
      },
      start:{
        today:false,
        speceficDate:true,
        date:{
          start:new Date(),
          end:new Date()
        }
      },
      end:{
        never:false,
        speceficDate:true,
        date:{
          start:date,
          end:date
        }
      }
    },
  },
  // fixedTime: '120',
  // RepeatOn: {
  //   monday: true,
  //   tuesday: true,
  //   wednesday: true,
  //   thursday: true,
  //   friday: true,
  //   saturday: true,
  //   sunday: true,
  // },
  // dailyStartHrs: '11',
  // dailyStartMnt: '37',
  // dailyEndHrs: '12',
  // dailyEndMnt: '37',
  // timerStart: 'rightNow',
  // startDate: {
  //   start: new Date(),
  //   end: new Date(),
  // },
  // startHrs: date.getHours(),
  // startMnt: date.getMinutes(),
  // endDate: {
  //   start: date,
  //   end: date,
  // },
  // endHrs: '00',
  // endMnt: '12',
  // starts: '',
  // ends: '',
  customTitle:'',
  onceItEnd: 'Unpublish timer',
}

export const LandingDesign = {
  template: 'Custom',
  backtype: {
    single: true,
    gradient: false,
  },
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
}

export const LandingPlacement = {
  selectProduct: '',
  specProduct: [],
  tags: '',
}

export const LandingContext = createContext()
export const LandingProvider = (props) => {


  const [content, setContent] = useState(LandingContent)
  const [design, setDesign] = useState(LandingDesign)
  const [placement, setPlacement] = useState(LandingPlacement)
  const [Html, setHtml] = useState()
  const [ispublished, setIspublished] = useState(false)
  const [dataId,setId] = useState()
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
        ispublished, setIspublished,
        dataId,setId
      }}
    >
      {props.children}
    </LandingContext.Provider>
  )
}
