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
  // timerType: 'toDate',
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
  // startHrs: date.getHours(),
  // startMnt: date.getMinutes(),
  // selectedEndDates: {
  //   start: date,
  //   end: date,
  // },
  // endHrs: '12',
  // endMnt: '00',
  // starts: '',
  // ends: '',
  customTitle:'',
  onceItEnd: 'Unpublish timer',
}

export const productDesign = {
  template: 'Custom',
  backtype:{
    single:true,
    gradient:false
  },
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
  selectProduct: {
    allProducts:true,
    specificProducts:false,
    allProductsWithTags:false,
    customPosition:false
  },
  specProduct: [],
  tags: '',
}

export const ProductProvider = (props) => {

  const [days, setDays] = React.useState(0)
  const [hours, setHours] = React.useState(0)
  const [minutes, setMinutes] = React.useState(0)
  const [seconds, setSeconds] = React.useState(0)
  const [dataId,setId] = useState(null)


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
        setId,dataId
        
      }}
    >
      {props.children}
    </ProductContext.Provider>
  )
}
