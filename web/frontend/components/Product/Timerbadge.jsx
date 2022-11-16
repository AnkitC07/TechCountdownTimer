import React, { useEffect } from 'react'
import TimerFixed from '../Fields/TimerFixed'
import TImerReccuring from '../Fields/TImerReccuring'
import TImer from '../TImer'

const Timerbadge = ({ design, content }) => {

  useEffect(() => { }, [design])

  const multiple = {
    fontFamily: `${design.font}`,
    marginTop: `${design.spaceOuttop}px`,
    marginBottom: `${design.spaceOutbottom}px`,
    paddingTop: `${design.spaceIntop}px`,
    paddingBottom: `${design.spaceInbottom}px`,
    maxWidth: '420px',
    minWidth: '320px',
    display: 'flex',
    flexFlow: 'column',
    background: `linear-gradient(${design.gradAngle}deg,${design.gradClr1},${design.gradClr2})`,
    border: `${design.borderSize}px solid ${design.borderColor}`,
    borderRadius: `${design.cornerRadus}px`,
    alignItems: 'center',
  }
  const single = {
    fontFamily: `${design.font}`,
    marginTop: `${design.spaceOuttop}px`,
    marginBottom: `${design.spaceOutbottom}px`,
    paddingTop: `${design.spaceIntop}px`,
    paddingBottom: `${design.spaceInbottom}px`,
    maxWidth: '420px',
    minWidth: '320px',
    display: 'flex',
    flexFlow: 'column',
    background: `${design.singleColor}`,
    border: `${design.borderSize}px solid ${design.borderColor}`,
    borderRadius: `${design.cornerRadus}px`,
    alignItems: 'center',
  }
  return (
    <div
      // className="product-page-main"
      style={design.backtype === 'singleBackground' ? single : multiple}
    >
      <h2
        // className="product-heading"
        style={{
          fontSize: `${design.titleSize}px`,
          color: `${design.titleColor}`,
          fontWeight: 'bold',
          lineHeight: '1',
        }}
      >
        {content.productTitle}
      </h2>
      <p
        // className="product-para"
        style={{
          fontSize: `${design.subheadingSize}px`,
          color: `${design.subheadingColor}`,
          paddingTop: '2px',
          lineHeight: '1.5',
        }}
      >
        {content.productSubheading}
      </p>
      <span
        // className="product-timer"
        style={{ lineHeight: '1', textAlign: 'left' }}
      >
        <div className="timer-wrapper">
          <div
            // className="time"
            style={{}}
          >
            {content.timerType == 'fixed'
              ?
              <TimerFixed start={content.selectedDates.start} mnt={content.fixedTime} design={design} />
              :
              <TImer start={content.selectedDates.start} end={content.selectedEndDates.end} starthrs={content.startHrs} endhrs={content.endHrs} startmnt={content.startMnt} endmnt={content.endMnt} design={design} />
            }

            {/* <TImerReccuring starthrs={content.dailyStartHrs} startmnt={content.dailyStartMnt} endhrs={content.dailyEndHrs} endmnt={content.dailyEndMnt} design={design} /> */}
          </div>
          <div
            // className="timer-label"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              placeItems: 'center',
            }}
          >
            <div
              id="insideTopSpacingHelpText"
              style={{
                lineHeight: '2',
                fontSize: `${design.legendSize}px`,
                color: `${design.legendColor}`,
                wordBreak: 'break-word',
                marginTop: '3px',
              }}
            >
              {content.productDays}
            </div>
            <div
              id="insideTopSpacingHelpText"
              style={{
                lineHeight: '2',
                fontSize: `${design.legendSize}px`,
                color: `${design.legendColor}`,
                wordBreak: 'break-word',
                marginTop: '3px',
              }}
            >
              {content.productHrs}
            </div>
            <div
              id="insideTopSpacingHelpText"
              style={{
                lineHeight: '2',
                fontSize: `${design.legendSize}px`,
                color: `${design.legendColor}`,
                wordBreak: 'break-word',
                marginTop: '3px',
              }}
            >
              {content.productMin}
            </div>
            <div
              id="insideTopSpacingHelpText"
              style={{
                lineHeight: '2',
                fontSize: `${design.legendSize}px`,
                color: `${design.legendColor}`,
                wordBreak: 'break-word',
                marginTop: '3px',
              }}
            >
              {content.productSec}
            </div>
          </div>
        </div>
      </span>
    </div>
  )
}

export default Timerbadge
