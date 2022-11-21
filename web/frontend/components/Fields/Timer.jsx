import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import parser from 'html-react-parser'
import { ProductContext } from '../../context/ProductContext'

const Timer = (props) => {
    const [days, setDays] = React.useState(0)
    const [hours, setHours] = React.useState(0)
    const [minutes, setMinutes] = React.useState(0)
    const [seconds, setSeconds] = React.useState(0)

    const [timerTextVal, timerState] = useState()

    let defaultStart = props.start
    let start = defaultStart
    let deadline = defaultStart + props.mnt * 60000

    const getTime = () => {
        const time = deadline - start
        // console.log(deadline)
        let timerText = props.content.title
        if (time <= 0) {
            setDays(0)
            setHours(0)
            setMinutes(0)
            setSeconds(0)
        } else {

            setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
            setMinutes(Math.floor((time / 1000 / 60) % 60))
            setSeconds(Math.floor((time / 1000) % 60))
            start = start + 1000
        }
        timerText = timerText.replace("{timer}", seconds)
        return timerText
    }
    // console.log(start)
    React.useEffect(() => {
        const interval = setInterval(() => {
            const getTimeValue = getTime()
            timerState(getTimeValue)
        }, 1000)

        return () => clearInterval(interval)
    }, [start, deadline, timerTextVal])

    function replaceTimer(day, hrs, min, sec) {
        let value = props.content.title
        let time
        if (days > 0) {
            time = `<span style="font-size: ${props.design.timerSize}px; color: ${props.design.timerColor};font-weight: bold;">${day} : ${hrs} : ${min} : ${sec}</span>`
        }
        else if (hours > 0) {
            time = `<span style="font-size: ${props.design.timerSize}px; color: ${props.design.timerColor};font-weight: bold;">${hrs} : ${min} : ${sec}</span>`
        } else {
            time = `<span style="font-size: ${props.design.timerSize}px; color: ${props.design.timerColor};font-weight: bold;">${min} : ${sec}</span>`
        }
        // console.log(time)

        value = parser(`${value.replace("{timer}", time)}`)
        // console.log("parsing", value)
        return value
    }

    return (
        <div
            // className="time"
            style={{
                fontSize: `${props.design.titleSize}px`,
                color: `${props.design.titleColor}`,
                lineHeight: '1',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                whiteSpace: 'break-spaces',
            }}
        >
            {replaceTimer(days < 10 ? '0' + days : days, hours < 10 ? '0' + hours : hours, minutes < 10 ? '0' + minutes : minutes, seconds < 10 ? '0' + seconds : seconds)}
        </div>
    )
}

export default Timer
