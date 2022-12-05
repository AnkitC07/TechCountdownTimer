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
      children={`It might take up to 20 seconds for the countdown to appear in the store. Countdown timer app block can be also added, removed, repositioned, and customized through the theme editor using timer ID:${id}`}
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
