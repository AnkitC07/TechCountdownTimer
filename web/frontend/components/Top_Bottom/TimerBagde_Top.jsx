import React from 'react'
import TimerFixed from '../Fields/TimerFixed'
import TImerReccuring from '../Fields/TImerReccuring'
import TImer from '../TImer'

const TimerBagde_Top = ({ design, content }) => {
  //CSS for single and gradient color background
  const multiple = {
    fontFamily: `${design.font}`,
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px 26px',
    justifyContent: 'center',
    background: `linear-gradient(${design.gradAngle}deg,${design.gradClr1},${design.gradClr2})`,
    paddingTop: '5px',
    paddingBottom: '5px',
    alignItems: 'center',
  }
  const single = {
    fontFamily: `${design.font}`,
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px 26px',
    justifyContent: 'center',
    background: `${design.singleColor}`,
    paddingTop: '5px',
    paddingBottom: '5px',
    alignItems: 'center',
  }
  // CSS for top and bottom border

  const top_outer = {
    boxShadow: "rgb(0 0 0 / 5%) 0px 2px 1px, rgb(0 0 0 / 25%) 0px 0px 1px",
    background: "rgb(246, 246, 247)",
    top: "20px",
    position: "sticky",
    marginTop: "20px",
    marginBottom: '20px',
    borderRadius: "8px",
    paddingBottom: "30px",

  }
  const bottom_outer = {
    boxShadow: "rgb(0 0 0 / 5%) 0px 2px 1px, rgb(0 0 0 / 25%) 0px 0px 1px",
    background: "rgb(246, 246, 247)",
    top: "20px",
    position: "sticky",
    marginTop: "20px",
    marginBottom: '20px',
    borderRadius: "8px",
    paddingTop: '30px',

  }
  const top_inner = {

    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    borderBottom: `${design.borderSize}px solid ${design.borderColor}`,
  }
  const bottom_inner = {

    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    borderTop: `${design.borderSize}px solid ${design.borderColor}`,
  }

  return (
    <>
      {content.callToAction == 'Make entire bar clickable' ? (
        <a href={content.link}>
          <div
            id="timer-badge"
            // className="top_product_timer_wrapper"
            style={design.positioning == "Top page" ? top_outer : bottom_outer}
          >
            <div
              id="inner_timer"
              // className="top_product_timer"
              style={
                design.positioning == "Top page"
                  ?
                  design.backtype === 'singleBackground'
                    ?
                    { ...single, ...top_inner }
                    :
                    { ...multiple, ...top_inner }
                  :
                  design.backtype === 'gradientBackground'
                    ?
                    { ...multiple, ...bottom_inner }
                    :
                    { ...single, ...bottom_inner }
              }
            >
              <div>
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
              </div>
              <span
                className="product-timer"
                style={{ lineHeight: '1', textAlign: 'left' }}
              >
                <div className="timer-wrapper">
                  <div
                    className="time"
                    style={{
                      fontSize: '22px',
                      color: 'rgb(32, 34,35)',
                      fontFeatureSettings: 'tnum',
                      fontVariantNumeric: 'tabular-nums',
                      fontWeight: 'bold',
                      letterSpacing: '1px',
                    }}
                  >

                    {content.timerType == 'fixed'
                      ?
                      <TimerFixed start={content.startDate.start} mnt={content.fixedTime} design={design} />
                      :
                      <TImer start={content.startDate.start} end={content.endDate.end} starthrs={content.startHrs} endhrs={content.endHrs} startmnt={content.startMnt} endmnt={content.endMnt} design={design} />
                    }
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
              {content.callToAction == 'Button' ? (
                <>
                  <div className="button-shop" style={{ marginLeft: '10px' }}>
                    <button
                      style={{
                        backgroundColor: `${design.buttonColor}`,
                        fontSize: `${design.buttonFontSize}px`,
                        color: `${design.buttonFontColor}`,
                        border: '0px solid',
                        borderRadius: `${design.cornerRadus}px`,
                        padding: '8px 16px',
                      }}
                    >
                      {content.buttonText}
                    </button>
                  </div>
                </>
              ) : (
                ''
              )}
              {content.closeIcon == true ? (
                <button
                  className="icon-button"
                  style={{
                    color: `${design.closeIconColorl}`,
                    background: 'none',
                    position: 'absolute',
                    top: '18px',
                    right: '5%',
                    fontSize: '17px',
                    border: 'none',
                  }}
                >
                  X
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
        </a>
      ) : (
        <div
          id="timer-badge"
          // className="top_product_timer_wrapper"
          style={design.positioning == "Top page" ? top_outer : bottom_outer}
        >
          <div
            id="inner_timer"
            // className="top_product_timer"
            style={
              design.positioning == "Top page"
                ?
                design.backtype === 'singleBackground'
                  ?
                  { ...single, ...top_inner }
                  :
                  { ...multiple, ...top_inner }
                :
                design.backtype === 'gradientBackground'
                  ?
                  { ...multiple, ...bottom_inner }
                  : {
                    ...single, ...bottom_inner
                  }}
          >
            <div>
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
            </div>
            <span
              className="product-timer"
              style={{ lineHeight: '1', textAlign: 'left' }}
            >
              <div className="timer-wrapper">
                <div
                  className="time"
                  style={{
                    fontSize: '22px',
                    color: 'rgb(32, 34,35)',
                    fontFeatureSettings: 'tnum',
                    fontVariantNumeric: 'tabular-nums',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                  }}
                >
                  {content.timerType == 'fixed'
                    ?
                    <TimerFixed start={content.startDate.start} mnt={content.fixedTime} design={design} />
                    : content.timerType == 'toDate'
                      ?
                      <TImer start={content.startDate.start} end={content.endDate.end} starthrs={content.startHrs} endhrs={content.endHrs} startmnt={content.startMnt} endmnt={content.endMnt} design={design} />
                      :
                      content.timerType == 'recurring'
                        ?
                        <TImerReccuring starthrs={content.dailyStartHrs} startmnt={content.dailyStartMnt} endhrs={content.dailyEndHrs} endmnt={content.dailyEndMnt} design={design} />
                        :
                        ''
                  }

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
                    Days
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
                    Hrs
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
                    Mins
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
                    Secs
                  </div>
                </div>
              </div>
            </span>
            {content.callToAction == 'Button' ? (
              <>
                <div className="button-shop" style={{ marginLeft: '10px' }}>
                  <button
                    style={{
                      backgroundColor: `${design.buttonColor}`,
                      fontSize: `${design.buttonFontSize}px`,
                      color: `${design.buttonFontColor}`,
                      border: '0px solid',
                      borderRadius: `${design.cornerRadus}px`,
                      padding: '8px 16px',
                    }}
                  >
                    Shop now!
                  </button>
                </div>
              </>
            ) : (
              ''
            )}
            {content.closeIcon == true ? (
              <button
                className="icon-button"
                style={{
                  color: `${design.closeIconColorl}`,
                  background: 'none',
                  position: 'absolute',
                  top: '18px',
                  right: '5%',
                  fontSize: '17px',
                  border: 'none',
                }}
              >
                X
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      )
      }
    </>
  )
}

export default TimerBagde_Top
