import React, { useContext } from 'react'

import { ProductContext } from '../../context/ProductContext'

const TImerReccuring = (props) => {
    const { days, setDays,
        hours, setHours,
        minutes, setMinutes,
        seconds, setSeconds, } = useContext(
            ProductContext,
        )


    let start = props.starthrs * 60 * 60000 + props.startmnt * 60000
    let deadline = props.endhrs * 60 * 60000 + props.endmnt * 60000

    // console.log(props.start)
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

export default TImerReccuring