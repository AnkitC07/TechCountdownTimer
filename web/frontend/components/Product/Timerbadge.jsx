import React, { useEffect } from "react";
import TimerFixed from "../Fields/TimerFixed";
import TImerReccuring from "../Fields/TImerReccuring";
import TImer from "../TImer";
import TimerSubComponent from "../layouts/SwitchTimers";
// const TimerSubComponent = ({content,design}) => {
//   if (content.timerType.fixedTime.status == true) {
//     return (
//       <>
//         <TimerFixed
//           start={new Date()}
//           mnt={content.timerType.fixedTime.time}
//           design={design}
//         />
//       </>
//     );
//   } else if (content.timerType.countdownDate.status == true) {
//     return (
//       <>
//         <TImer
//           start={content.timerType.countdownDate.startDate.date.start}
//           end={content.timerType.countdownDate.endDate.date.end}
//           starthrs={content.timerType.countdownDate.startDate.hr}
//           endhrs={content.timerType.countdownDate.endDate.hr}
//           startmnt={content.timerType.countdownDate.startDate.min}
//           endmnt={content.timerType.countdownDate.endDate.min}
//           design={design}
//         />
//       </>
//     );
//   } else if (content.timerType.recurring.status == true) {
//     return (
//       <>
//         <TImerReccuring
//           starthrs={content.timerType.recurring.dailyStart.hr}
//           startmnt={content.timerType.recurring.dailyStart.min}
//           endhrs={content.timerType.recurring.dailyEnd.hr}
//           endmnt={content.timerType.recurring.dailyEnd.min}
//           design={design}
//         />
//       </>
//     );
//   } else {
//     return <>Timer</>;
//   }
// };

const Timerbadge = ({ design, content }) => {
  useEffect(() => {
    console.log("timer run checking");
  }, []);

  const multiple = {
    fontFamily: `${design.font}`,
    marginTop: `${design.spaceOuttop}px`,
    marginBottom: `${design.spaceOutbottom}px`,
    paddingTop: `${design.spaceIntop}px`,
    paddingBottom: `${design.spaceInbottom}px`,
    maxWidth: "420px",
    minWidth: "320px",
    display: "flex",
    flexFlow: "column",
    background: `linear-gradient(${design.gradAngle}deg,${design.gradClr1},${design.gradClr2})`,
    border: `${design.borderSize}px solid ${design.borderColor}`,
    borderRadius: `${design.cornerRadus}px`,
    alignItems: "center",
  };
  const single = {
    fontFamily: `${design.font}`,
    marginTop: `${design.spaceOuttop}px`,
    marginBottom: `${design.spaceOutbottom}px`,
    paddingTop: `${design.spaceIntop}px`,
    paddingBottom: `${design.spaceInbottom}px`,
    maxWidth: "420px",
    minWidth: "320px",
    display: "flex",
    flexFlow: "column",
    background: `${design.singleColor}`,
    border: `${design.borderSize}px solid ${design.borderColor}`,
    borderRadius: `${design.cornerRadus}px`,
    alignItems: "center",
  };

  let key, startdate, enddate;
  if (content.timerType.countdownDate.status == true) {
    key = "countdownDate";
    (startdate = "startDate"), (enddate = "endDate");
  } else if (content.timerType.recurring.status == true) {
  }

  return (
    <div id="getHTMLData">
    <div
      // className="product-page-main"
      id="ProductcdtWidget"
      style={design.backtype.single === true ? single : multiple}
    >
      <h2
        // className="product-heading"
        style={{
          fontSize: `${design.titleSize}px`,
          color: `${design.titleColor}`,
          fontWeight: "bold",
          lineHeight: "1",
        }}
      >
        {content.productTitle}
      </h2>
      <p
        // className="product-para"
        style={{
          fontSize: `${design.subheadingSize}px`,
          color: `${design.subheadingColor}`,
          paddingTop: "2px",
          lineHeight: "1.5",
        }}
      >
        {content.productSubheading}
      </p>
      <span
        // className="product-timer"
        style={{ lineHeight: "1", textAlign: "left" }}
      >
        <div className="timer-wrapper">
          <div
            // className="time"
            style={{}}
          >
            <TimerSubComponent 
            design={design}
            content={content}
            />

            {/* <TImerReccuring starthrs={content.dailyStartHrs} startmnt={content.dailyStartMnt} endhrs={content.dailyEndHrs} endmnt={content.dailyEndMnt} design={design} /> */}
          </div>
          <div
            // className="timer-label"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              placeItems: "center",
            }}
          >
            <div
              id="insideTopSpacingHelpText"
              style={{
                lineHeight: "2",
                fontSize: `${design.legendSize}px`,
                color: `${design.legendColor}`,
                wordBreak: "break-word",
                marginTop: "3px",
              }}
            >
              {content.productDays}
            </div>
            <div
              id="insideTopSpacingHelpText"
              style={{
                lineHeight: "2",
                fontSize: `${design.legendSize}px`,
                color: `${design.legendColor}`,
                wordBreak: "break-word",
                marginTop: "3px",
              }}
            >
              {content.productHrs}
            </div>
            <div
              id="insideTopSpacingHelpText"
              style={{
                lineHeight: "2",
                fontSize: `${design.legendSize}px`,
                color: `${design.legendColor}`,
                wordBreak: "break-word",
                marginTop: "3px",
              }}
            >
              {content.productMin}
            </div>
            <div
              id="insideTopSpacingHelpText"
              style={{
                lineHeight: "2",
                fontSize: `${design.legendSize}px`,
                color: `${design.legendColor}`,
                wordBreak: "break-word",
                marginTop: "3px",
              }}
            >
              {content.productSec}
            </div>
          </div>
        </div>
      </span>
    </div>
    </div>
  );
};

export default Timerbadge;
