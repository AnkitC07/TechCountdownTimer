import { Banner } from "@shopify/polaris";
import React, { useEffect } from "react";
import { useState } from "react";
import { getShopName } from "../common_functions/functions";

function Banners({ id ,onDismiss}) {
  const shopname = getShopName();

  return (
    <>
    <Banner
      title="Countdown timer was successfully published in your store"
      status="success"
      children={`It might take up to 1 minute for the countdown timer to appear in the store. If you changed the time setting, please preview the banner with a different incognito browser. If you cannot see the timer, please contact our support.`}
      action={{
        content: "Preview countdown timer in store",
        onAction: () => {
          window.open(`https://${shopname}`, "_blank");
        },
      }}
      onDismiss={onDismiss}
    />
    </>
  );
}

export default Banners;
