import { Button, Card, Icon, ProgressBar, Spinner } from "@shopify/polaris";
import { TickMinor } from "@shopify/polaris-icons";
import { useContext, useState } from "react";
import { useAuthenticatedFetch } from "../hooks/useAuthenticatedFetch";
import { PlanCon } from "../context/Plan.jsx";
import "../cssfile/plan.css"
const Text = ({ variant, as, children }) => {
  return (
    <>
      <p className={`${variant}  ${as}`}>{children}</p>
    </>
  );
};

const Plan = () => {
  const fetch = useAuthenticatedFetch();
  const { plan, planState } = useContext(PlanCon);

  console.log(plan,"checkign plan data")
  const [store, storeState] = useState({
    plan: {
      type: "Free Plan",
      price: "0",
      trialDays: "14",
    },
  });

  // useEffect(() => {
  // //   getPlan();
  //   async function getPlan() {
  //     const fetchData = await fetch(`/api/getStorePlan`);
  //     const getdata = await fetchData.json();
  //     storeState(getdata);
  //   }
  // }, []);
  let days = Math.abs(14 - plan.days + 1);

  const freeplan = [
    {
      icon: TickMinor,
      label: "Unlimited Countdown Timer Setup",
    },
    {
      icon: TickMinor,
      label: "Customer widget feature design",
    },
    {
      icon: TickMinor,
      label: "Custom widget placement style support",
    },
    {
      icon: "",
      label: "",
    },
  ];

  const essential = [
    {
      icon: TickMinor,
      label: "Unlimited Countdown Timer Setup",
    },
    {
      icon: TickMinor,
      label: "VIP and Live Chat Support",
    },
    {
      icon: TickMinor,
      label: "Schedule Countdown Timer Setup",
    },
    {
      icon: TickMinor,
      label: "Customer widget feature design",
    },
    {
        icon: TickMinor,
        label: "Custom widget placement style support",
      },
  ];

  console.log(Math.floor(7.2 * plan.days),plan.days)


  const updatestore = (data) => {
    storeState(data);
  };
  return (
    <>
      <div className="container mt-4">
        <Card sectioned>
          {plan.type == "Essential" ? (
            <Text variant="bodyMd" as="p">
              You're currently on <b>Essential</b> plan
            </Text>
          ) : (
            <>
            <Text variant="bodyMd" as="p">
              You're currently on <b>14 Days Free Trial</b> Plan.{" "}
              {store.plan.trialDays == 0
                ? 14
                : Math.abs(days - 1)}{" "}
              / 14 days
            </Text>
             <div className="mt-3">
             <ProgressBar
               progress={Math.floor(7.2 * days)}
               size="small"
               color="primary"
             />
           </div>
           </>
          )}
         
        </Card>
        <div className="mt-4">
          <Card sectioned title="14 Days Free Trial">
            <Text variant="bodyMd" as="p">
              <div>
                <div>Unlimited Countdown Timer Setup</div>

                <div className="d-flex ">
                  <div className="px-2">
                    <Icon source={TickMinor} />
                  </div>
                  <div>Schedule Countdown Timer Setup</div>
                </div>

                <div className="d-flex ">
                  <div className="px-2">
                    <Icon source={TickMinor} />
                  </div>
                  <div>Custom Countdown Timer Design</div>
                </div>
              </div>
            </Text>
          </Card>

          <div className="mt-4">
            <div className="row">
              <div  className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div style={{marginRight:'10px'}}>
                <PlanCard
                  title="Essential"
                  features={essential}
                  price="0.99"
                  disabled={plan.type == "Essential"}
                />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div style={{marginLeft:'10px'}}>
                <PlanCard
                  title="Free Plan"
                  subTitle="14 Days Free Trial"
                  features={freeplan}
                  price="Free"
                  disabled={plan.type !== "Essential" && plan.days <= 0 || plan.type !== "Essential"}
                  trialDays={store.plan.trialDays}
                  states={updatestore}
                />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Card sectioned>
              <div className="d-flex align-items-center">
                <div>
                  <img src="../assets/planPageLogo.png" width={80} />
                </div>

                <div className="px-3">
                  <div>
                    <Text variant="bodyMd" fontWeight="semibold" as="p">
                      30 Day Money Back Guarantee - No questions asked!
                    </Text>
                  </div>
                  <div className="mt-2">
                    <Text variant="bodyMd" as="p">
                      Write to us within the first 30 days of your paid
                      subscription and we will refund you the money via
                      Shopify's billing. No questions asked.
                    </Text>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

const PlanCard = ({
  title,
  subTitle,
  features,
  price,
  trialDays,
  disabled,
  states,
}) => {
  const fetch = useAuthenticatedFetch();
  const [loadingPlan, setLoadingPlan] = useState(false);
  const { plan, planState } = useContext(PlanCon)
  const plan_subscribed = {
    title: title,
    price: price == "Free" ? "0" : price,
  };
  const handleButton = async () => {
    setLoadingPlan(true);
    await fetch(`/api/payment-api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plan: plan_subscribed }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoadingPlan(false);
        console.log(data,"cehcking plan active")
        if(data.data.plan?.type == "Free"){
          planState(data.data.plan)
        }else if (data.data.confirmation_url !== undefined) {
          const url = data.data.confirmation_url;
          window.top.location.href = url;
        }
      })
      .catch((error) => {
        setLoadingPlan(false);
      });
  };

  return (
    <>
      <Card sectioned title={title}>
        <div style={{ height: "160px" }}>
          {subTitle == null ? (
            ""
          ) : (
            <Text variant="bodyMd" as="p">
              {subTitle}
            </Text>
          )}
          {features.map((x) => {
            return (
              <>
                <div className="d-flex lh-lg align-items-center">
                  <div>
                    <Icon source={x.icon} />
                  </div>
                  <div className="px-2">{x.label}</div>
                </div>
              </>
            );
          })}
        </div>

        {price == "Free" ? (
          <div>
            <Text variant="heading3xl" as="h2">
              {price}
            </Text>
          </div>
        ) : (
          <div className="d-flex align-items-end">
            <div>
              <Text variant="heading3xl" as="h2">
                ${price}
              </Text>
            </div>
            <div>
              <Text variant="bodyMd" fontWeight="bold" as="p" color="subdued">
                /Month
              </Text>
            </div>
          </div>
        )}

        <div className="mt-4">
          {disabled == true || (title == "Free Plan" && trialDays == 0) ? (
            <Button primary fullWidth={true} disabled={disabled}>
              <Text variant="bodyMd" fontWeight="bold" as="p">
                {title == "Free Plan" && trialDays == 0
                  ? "Free trial is over"
                  : "You Current Plan"}
              </Text>
            </Button>
          ) : (
            <Button
              primary
              fullWidth={true}
              onClick={() => handleButton()}
              disabled={disabled}
            >
              {!loadingPlan ? (
                <Text variant="bodyMd" fontWeight="bold" as="p">
                  Choose Your Plan
                </Text>
              ) : (
                <Spinner
                  accessibilityLabel="Small spinner example"
                  size="small"
                />
              )}
            </Button>
          )}
        </div>
      </Card>
    </>
  );
};

export default Plan;
