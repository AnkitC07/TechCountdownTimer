import React, { useState, createContext } from 'react'

export const ProductContext = createContext()

export const ProductProvider = (props) => {
  let date = new Date()
  date.setDate(date.getDate() + 1)

  const [content, setContent] = useState({
    productTimer: 'Timer Name',
    productTitle: 'Hurry up!',
    productSubheading: 'Sale ends in: ',
    productDays: 'Days',
    productHrs: 'Hrs',
    productMin: 'Mins',
    productSec: 'Secs',
    timerType: 'Countdown to a date',
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
    selectedDates: {
      start: new Date(),
      end: new Date(),
    },
    startHrs: '1',
    startMnt: '0',
    selectedEndDates: {
      start: date,
      end: date,
    },
    endHrs: '12',
    endMnt: '00',
    starts: '',
    ends: '',
    onceItEnd: 'Unpublish timer',
  })

  const [productTimer, setProductTimer] = useState('Timer Name')
  const [productTitle, setProductTitle] = useState('Hurry up!')
  const [productSubheading, setproductSubheading] = useState('Sale ends in: ')
  //   const [productTimerLabel, setProductTimerLabel] = useState({
  //     Days: 'Days',
  //     Hrs: 'Hrs',
  //     Mins: 'Mins',
  //     Secs: 'Secs',
  //   })
  const [productDays, setProductDays] = useState('Days')
  const [productHrs, setProductHrs] = useState('Hrs')
  const [productMin, setProductMin] = useState('Mins')
  const [productSec, setProductSec] = useState('Secs')
  const [selectedDates, setSelectedDates] = useState({
    start: new Date(),
    end: new Date(),
  })
  const [selectedEndDates, setSelectedEndDates] = useState({
    start: date,
    end: date,
  })
  const [timerType, setTimerType] = useState('')
  const [startHrs, setStartHrs] = useState(1)
  const [startMnt, setStartMnt] = useState(0)
  const [endHrs, setEndHrs] = useState('12')
  const [endMnt, setEndMnt] = useState('00')
  const [onceItEnd, setOnceItEnd] = useState('')

  const [design, setDesign] = useState({
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
  })

  const [placement, setPlacement] = useState({
    selectProduct: '',
    specProduct: [],
    tags: '',
  })
  return (
    <ProductContext.Provider
      value={{
        productTimer,
        setProductTimer,
        productTitle,
        setProductTitle,
        productSubheading,
        setproductSubheading,
        productDays,
        setProductDays,
        productHrs,
        setProductHrs,
        productMin,
        setProductMin,
        productSec,
        setProductSec,
        selectedDates,
        setSelectedDates,
        selectedEndDates,
        setSelectedEndDates,
        timerType,
        setTimerType,
        startHrs,
        setStartHrs,
        startMnt,
        setStartMnt,
        endHrs,
        setEndHrs,
        endMnt,
        setEndMnt,
        onceItEnd,
        setOnceItEnd,
        content,
        setContent,
        design,
        setDesign,
        placement,
        setPlacement,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  )
}
