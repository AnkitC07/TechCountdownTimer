import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
// import { ProductContext } from '../context/ProductContext'

const Timer = (props) => {
    const [days, setDays] = React.useState(0)
    const [hours, setHours] = React.useState(0)
    const [minutes, setMinutes] = React.useState(0)
    const [seconds, setSeconds] = React.useState(0)
    const [timerTextVal, timerState] = useState()
    // const { content } = useContext(
    //     ProductContext,
    // )
    let defaultStart = props.start
    let start = defaultStart
    let deadline = defaultStart + props.mnt * 60000
    // useEffect(() => {}, [selectedDates, selectedEndDates])

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

    function replaceTimer(min, sec) {
        let value = props.content.title
        const time = min + ":" + sec
        value = <span>{value.replace("{timer}", time)}</span>
        return value
    }
    // console.log("----------------------------------------------")
    // console.log(minutes < 10 ? '0' + minutes : minutes + ":" + seconds < 10 ? '0' + seconds : seconds)
    return (
        <div
            // className="time"
            style={{
                fontSize: `${props.design.timerSize}px`,
                color: `${props.design.timerColor}`,
                fontFeatureSettings: 'tnum',
                fontVariantNumeric: 'tabular-nums',
                // fontWeight: 'bold',
            }}
        >
            <span>
                {replaceTimer(minutes < 10 ? '0' + minutes : minutes, seconds < 10 ? '0' + seconds : seconds)}
            </span>
            {/* {days < 10 ? '0' + days : days}:{hours < 10 ? '0' + hours : hours}: */}
            {/* {minutes < 10 ? '0' + minutes : minutes}:
            {seconds < 10 ? '0' + seconds : seconds} */}
        </div>
    )
}

export default Timer
