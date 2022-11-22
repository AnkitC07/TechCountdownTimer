import React, { useState, createContext } from 'react'

export const CartPageContext = createContext()
let date = new Date()
date.setDate(date.getDate() + 1)

export const Cartcontent = {
  timerName: 'Timer name',
  title: '🔥Hurry up! Your cart will be lost in {timer}',
  mnt: '15',
  onceItEnd: 'Repeat the countdown',
}

export const cartdesign = {
  template: 'Custom',
  backtype: 'singleBackground',
  singleColor: '#FFFFFF',
  gradAngle: '90',
  gradClr1: '#DDDDDD',
  gradClr2: '#FFFFFF',
  cornerRadus: '8',
  borderSize: '1',
  borderColor: '#c5c8d1',
  spaceIntop: '20',
  spaceInbottom: '20',
  spaceOuttop: '20',
  spaceOutbottom: '20',
  font: 'Use your theme fonts',
  titleSize: '16',
  titleColor: '#202223',
  timerSize: '16',
  timerColor: '#da6060  ',
}

export const Cartplacement = {
  selectProduct: '',
}
export const CartPageProvider = (props) => {

  //   setTimeout(() => {

  //   }, timeout);
  const [days, setDays] = React.useState(0)
  const [hours, setHours] = React.useState(0)
  const [minutes, setMinutes] = React.useState(0)
  const [seconds, setSeconds] = React.useState(0)
  const [content, setContent] = useState(Cartcontent)
  const [design, setDesign] = useState(cartdesign)
  const [placement, setPlacement] = useState(Cartplacement)
  const [Html, setHtml] = useState('')
  const [dataId,setId] = useState()
  const [ispublished, setIspublished] = useState(false)
  return (
    <CartPageContext.Provider
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
        Html, setHtml,
        dataId,setId,
        ispublished, setIspublished
      }}
    >
      {props.children}
    </CartPageContext.Provider>
  )
}
