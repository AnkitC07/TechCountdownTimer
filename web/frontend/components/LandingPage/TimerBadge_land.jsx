import React, { useEffect } from 'react'
import TimerFixed from '../Fields/TimerFixed'
import TimerSubComponent from '../layouts/SwitchTimers'
import TImer from '../TImer'


const TimerBadge_land = ({ design, content }) => {
  useEffect(() => { }, [design])
  const multiple = {
    fontFamily: `${design.font}`,
    marginTop: `${design.spaceOuttop}px`,
    marginBottom: `${design.spaceOutbottom}px`,
    paddingTop: `${design.spaceIntop}px`,
    paddingBottom: `${design.spaceInbottom}px`,
    // maxWidth: '420px',
    // minWidth: '320px',
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
    // maxWidth: '420px',
    // minWidth: '320px',
    display: 'flex',
    flexFlow: 'column',
    background: `${design.singleColor}`,
    border: `${design.borderSize}px solid ${design.borderColor}`,
    borderRadius: `${design.cornerRadus}px`,
    alignItems: 'center',
  }
  

  return (
    <>
    <div id='getHTMLData'>
      {content.callToAction == 'Make entire bar clickable' ?
        <a href={content.link}>
          <div
            className="top_product_timer_wrapper"
            style={{
              marginLeft: '30px',
              position: 'sticky',
              top: '20px',
            }}
          >
            <div
              style={design.backtype.single == true ? single : multiple}
            >

              <h2
                className="product-heading"
                style={{
                  fontSize: `${design.titleSize}px`,
                  fontWeight: 'bold',
                  color: `${design.titleColor}`,
                  lineHeight: '1',
                }}
              >

                {content.title}
              </h2>
              <p
                className="product-para"
                style={{
                  fontSize: `${design.subheadingSize}px`,
                  color: `${design.subheadingColor}`,
                  paddingTop: '2px',
                  lineHeight: '1.5',
                }}
              >
                {content.subHeading}
              </p>

              <span
                className="product-timer"
                style={{ lineHeight: '1', textAlign: 'left' }}
              >
                <div className="timer-wrapper">
                  <div
                    className="time"
                    style={{
                      fontSize: '40px',
                      color: 'rgb(32, 34,35)',
                      fontFeatureSettings: 'tnum',
                      fontVariantNumeric: 'tabular-nums',
                      fontWeight: 'bold',
                      letterSpacing: '1px',
                    }}
                  >
                    <TimerSubComponent 
                    content={content}
                    design={design}
                    />
                    {/* {content.timerType == 'fixed'
                      ?
                      <TimerFixed start={content.startDate.start} mnt={content.fixedTime} design={design} />
                      :
                      <TImer start={content.startDate.start} end={content.endDate.end} starthrs={content.startHrs} endhrs={content.endHrs} startmnt={content.startMnt} endmnt={content.endMnt} design={design} />
                    } */}
                  </div>
                  <div
                    className="timer-label"
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
                      {content.days}
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
                      {content.hrs}
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
                      {content.mins}
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
                      {content.secs}
                    </div>
                  </div>
                </div>
              </span>
              {content.callToAction == 'Button' ? <div className="button-shop" style={{ marginLeft: '10px' }}>
                <a href={content.link}>
                  <button
                    style={{
                      backgroundColor: `${design.buttonColor}`,
                      fontSize: `${design.buttonFontSize}px`,
                      color: `${design.buttonFontColor}`,
                      border: '0px solid',
                      borderRadius: `${design.cornerRadus}px`,
                      padding: '8px 16px',
                      marginTop: '20px',
                    }}
                  >
                    {content.buttonText}
                  </button>
                </a>
              </div>
                :
                ''
              }

            </div>
          </div>
        </a>
        :
        <div
          className="top_product_timer_wrapper"
          style={{
            marginLeft: '30px',
            position: 'sticky',
            top: '20px',
          }}
        >
          <div

            style={design.backtype.single == true ? single : multiple}

          >
            <h2
              className="product-heading"
              style={{
                fontSize: `${design.titleSize}px`,
                fontWeight: 'bold',
                color: `${design.titleColor}`,
                lineHeight: '1',
              }}
            >
              {content.title}
            </h2>
            <p
              className="product-para"
              style={{
                fontSize: `${design.subheadingSize}px`,
                color: `${design.subheadingColor}`,
                paddingTop: '2px',
                lineHeight: '1.5',
              }}
            >
              {content.subHeading}
            </p>

            <span
              className="product-timer"
              style={{ lineHeight: '1', textAlign: 'left' }}
            >
              <div className="timer-wrapper">
                <div
                  className="time"
                  style={{
                    fontSize: '40px',
                    color: 'rgb(32, 34,35)',
                    fontFeatureSettings: 'tnum',
                    fontVariantNumeric: 'tabular-nums',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                  }}
                >
                  <TimerSubComponent 
                    content={content}
                    design={design}
                    />
                  {/* {content.timerType == 'fixed'
                    ?
                    <TimerFixed start={content.startDate.start} mnt={content.fixedTime} design={design} />
                    :
                    <TImer start={content.startDate.start} end={content.endDate.end} starthrs={content.startHrs} endhrs={content.endHrs} startmnt={content.startMnt} endmnt={content.endMnt} design={design} />
                  } */}
                </div>
                <div
                  className="timer-label"
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
                    {content.days}
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
                    {content.hrs}
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
                    {content.mins}
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
                    {content.secs}
                  </div>
                </div>
              </div>
            </span>
            {content.callToAction == 'Button' ?
              <div className="button-shop" style={{ marginLeft: '10px' }}>
                <a href={content.link}>
                  <button
                    style={{
                      backgroundColor: `${design.buttonColor}`,
                      fontSize: `${design.buttonFontSize}px`,
                      color: `${design.buttonFontColor}`,
                      border: '0px solid',
                      borderRadius: `${design.cornerRadus}px`,
                      padding: '8px 16px',
                      marginTop: '20px',
                    }}
                  >
                    {content.buttonText}
                  </button>
                </a>
              </div> : ''}

          </div>
        </div>}
        </div>
    </>
  )
}

export default TimerBadge_land