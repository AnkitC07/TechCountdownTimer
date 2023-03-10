import React from "react";
import AppBanner from "./AppBanner.jsx";

export const CheckHead = () => {
    return (
        <>
        <div className="Polaris-TextContainer check_head">
            <h1 className="Polaris-Heading">COUNTDOWN TIMER BY CANCODE.IO</h1>
            <p>ADD COUNTDOWN TIMER IN SECONDS</p>
        </div>
        <AppBanner />
        </>
    );
};

export default CheckHead;