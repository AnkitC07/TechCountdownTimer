import { Banner, Button } from "@shopify/polaris";
import { useContext, useState } from "react";
import "../../cssfile/plan.css"
import { useAuthenticatedFetch } from "../../hooks";
import { PlanCon } from "../../context/Plan";

const AppBanner = () => {
  const fetch = useAuthenticatedFetch();
  const {plan,banner,bannerState} = useContext(PlanCon);
  const [isLoading, loadingState] = useState(false);

  const CloseBanner = async () => {
    loadingState(true);
    const closeBanner = await fetch("/api/bannerClose");
    const close = await closeBanner.json();
    console.log(close)
    if(close.status == 200){
        bannerState(close.data.banner)
    }
    loadingState(false);
  };

  const Close = () => {
    return (
      <>
        <div>
          <p className="banner_container">
            <span className="bannerTitle">
              {plan.type == "Essential"
                ? "Thank you for subscribing"
                : plan.type == "Free" && plan.days == 0
                ? "Please upgrade to our Essential plan to enjoy the unlimited countdown timers for your store"
                : "Enjoy the countdown timers with 14/14 days free trial"}
            </span>
            <Button loading={isLoading} outline onClick={CloseBanner}>
              Close
            </Button>
          </p>
          <p
            className="text-secondary bannerSubTitle">
            {plan.type == "Essential"
              ? "Now you can have our VIP support and unlimited countdown timers for your store.Let us know if you need help via the live chat :)"
              : plan.type == "Free" && plan.days == 0
              ? "your free trial has ended"
              : "You can now use set countdown timers and more. Enjoy!"}
          </p>
        </div>
      </>
    );
  };

  return (
    <>
      {banner == true && (
        <div className="container my-4">
          <Banner title={<Close />} status="success" />
        </div>
      )}
    </>
  );
};

export default AppBanner;
