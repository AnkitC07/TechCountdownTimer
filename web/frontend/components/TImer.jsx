import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { ProductContext } from '../context/ProductContext'

const TImer = (props) => {
  const [days, setDays] = React.useState(0)
  const [hours, setHours] = React.useState(0)
  const [minutes, setMinutes] = React.useState(0)
  const [seconds, setSeconds] = React.useState(0)

  const startDate = Date.parse(`${props.start.getMonth() + 1} ${props.start.getDate()}, ${props.start.getFullYear()} ${props.starthrs}:${props.startmnt}:00`)
  const endDate = Date.parse(`${props.end.getMonth() + 1} ${props.end.getDate()}, ${props.end.getFullYear()} ${props.endhrs}:${props.endmnt}:00`)

  // console.log("start date: ", `${props.start.getMonth() + 1} ${props.start.getDate()}, ${props.start.getFullYear()} ${props.starthrs}:${props.startmnt}:00`)
  let start = Date.parse(`${props.start.getMonth() + 1} ${props.start.getDate()}, ${props.start.getFullYear()} ${props.starthrs}:${props.startmnt}:00`)
  let deadline = Date.parse(`${props.end.getMonth() + 1} ${props.end.getDate()}, ${props.end.getFullYear()} ${props.endhrs}:${props.endmnt}:00`)

  const getTime = () => {
    const time = deadline - start
    if (time <= 0) {
      setDays(0)
      setHours(0)
      setMinutes(0)
      setSeconds(0)
    } else {
      // console.log(time)

      // * Converting time-stamp into normal time * //
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
      setMinutes(Math.floor((time / 1000 / 60) % 60))
      setSeconds(Math.floor((time / 1000) % 60))
      start = start + 1000
    }
  }
  // console.log(start)
  React.useEffect(() => {
    const interval = setInterval(() => getTime(), 1000)

    return () => clearInterval(interval)
  }, [start, deadline])
  // console.log(days)
  return (
    <div
      // className="time"
      style={{
        fontSize: `${props.design.timerSize}px`,
        color: `${props.design.timerColor}`,
        fontFeatureSettings: 'tnum',
        fontVariantNumeric: 'tabular-nums',
        fontWeight: 'bold',
      }}
    >
      {days < 10 ? '0' + days : days}:{hours < 10 ? '0' + hours : hours}:
      {minutes < 10 ? '0' + minutes : minutes}:
      {seconds < 10 ? '0' + seconds : seconds}
    </div>
  )
}

export default TImer
