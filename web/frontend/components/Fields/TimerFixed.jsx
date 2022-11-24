import React, { useContext } from "react";
import { useEffect } from "react";

import { ProductContext } from "../../context/ProductContext";

const TimerFixed = (props) => {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  let start = Date.parse(props.start);
  let deadline = start + props.mnt * 60000;

  // console.log(props.start)
  const getTime = () => {
    const time = deadline - start;
    if (time <= 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
      start = start + 1000;
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, [start, deadline]);

  return (
    <div
      id="GetHtmlData"
      className="countdowntimerapp"
      style={{
        fontSize: `${props.design.timerSize}px`,
        color: `${props.design.timerColor}`,
        fontFeatureSettings: "tnum",
        fontVariantNumeric: "tabular-nums",
        fontWeight: "bold",
      }}
    >
      {days < 10 ? "0" + days : days}:{hours < 10 ? "0" + hours : hours}:
      {minutes < 10 ? "0" + minutes : minutes}:
      {seconds < 10 ? "0" + seconds : seconds}
    </div>
  );
};

const RecurringTimer = ({
  startDate,
  endDate,
  starthr,
  endhr,
  startmin,
  endmin,
}) => {

    const [days, setDays] = React.useState(0)
    const [hours, setHours] = React.useState(0)
    const [minutes, setMinutes] = React.useState(0)
    const [seconds, setSeconds] = React.useState(0)
   
    let newDate = new Date()
    
    let startTime = Date.parse(`${newDate.getMonth() + 1} ${newDate.getDate()}, ${newDate.getFullYear()} ${starthr}:${startmin}:00`)
    let endTime = Date.parse(`${newDate.getMonth() + 1} ${newDate.getDate()}, ${newDate.getFullYear()} ${endhr}:${endmin}:00`)

    const getTime = () => {
        const time = endTime - startTime
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
          startTime = startTime + 1000
          console.log(startTime)
        }
      }
    
    useEffect(()=>{
        const interval = setInterval(() => getTime(), 1000)
        return () => clearInterval(interval)
    },[startTime,endTime])


  return <>
            {days < 10 ? '0' + days : days}:{hours < 10 ? '0' + hours : hours}:
          {minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}
  </>;
};

export default TimerFixed;
export { RecurringTimer };
