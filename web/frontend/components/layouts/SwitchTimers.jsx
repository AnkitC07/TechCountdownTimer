import { useState } from "react";
import { useEffect } from "react";
import TimerFixed from "../Fields/TimerFixed";
import TImerReccuring from "../Fields/TImerReccuring";
import TImer from "../TImer";

const TimerSubComponent = ({content,design}) => {
    const [pageId,setPageId] = useState()
    useEffect(()=>{
      const url = window.location.href
      if(url.includes('ProductPage') == true){
        setPageId("countDownTimer_ProductPage")
      }else if(url.includes('LandingPage') == true){
        setPageId("countDownTimer_LandingPage")
      }else if(url.includes('CartPage') == true){
        setPageId("countDownTimer_CartPage")
      }
    },[])
    if (content.timerType.fixedTime.status == true) {
      return (
        <>
          <TimerFixed
            id={pageId}
            start={new Date()}
            mnt={content.timerType.fixedTime.time}
            design={design}
          />
        </>
      );
    } else if (content.timerType.countdownDate.status == true) {
      return (
        <>
          <TImer
          id={pageId}
            start={content.timerType.countdownDate.startDate.date.start}
            end={content.timerType.countdownDate.endDate.date.end}
            starthrs={content.timerType.countdownDate.startDate.hr}
            endhrs={content.timerType.countdownDate.endDate.hr}
            startmnt={content.timerType.countdownDate.startDate.min}
            endmnt={content.timerType.countdownDate.endDate.min}
            design={design}
          />
        </>
      );
    } else if (content.timerType.recurring.status == true) {
      return (
        <>
          <TImerReccuring
          id={pageId}
            starthrs={content.timerType.recurring.dailyStart.hr}
            startmnt={content.timerType.recurring.dailyStart.min}
            endhrs={content.timerType.recurring.dailyEnd.hr}
            endmnt={content.timerType.recurring.dailyEnd.min}
            design={design}
          />
        </>
      );
    } else {
      return <>Timer</>;
    }
  };

  export default TimerSubComponent