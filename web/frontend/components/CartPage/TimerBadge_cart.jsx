import React from 'react'
import Timer from '../Fields/Timer'

const TimerBadge_cart = ({ design, content }) => {
    const multiple = {
        fontFamily: `${design.font}`,
        marginTop: `${design.spaceOuttop}px`,
        marginBottom: `${design.spaceOutbottom}px`,
        paddingTop: `${design.spaceIntop}px`,
        paddingBottom: `${design.spaceInbottom}px`,
        display: 'flex',
        justifyContent: 'center',
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
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        background: `${design.singleColor}`,
        border: `${design.borderSize}px solid ${design.borderColor}`,
        borderRadius: `${design.cornerRadus}px`,
        alignItems: 'center',
    }
    const date = new Date()
    // console.log((date.getHours()))
    return (
        <div
            id="cart_top_product_timer"
            style={design.backtype.single == true ? single : multiple}
        >
            <h2
                // className="product-heading"
                style={{
                    fontSize: `${design.titleSize}px`,
                    color: `${design.titleColor}`,
                    lineHeight: '1',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    whiteSpace: 'break-spaces',
                }}
            >
                {/* {content.title} */}
                <Timer content={content} design={design} mnt={content.mnt} start={Date.parse(new Date())} />
            </h2>
        </div>
    )
}

export default TimerBadge_cart