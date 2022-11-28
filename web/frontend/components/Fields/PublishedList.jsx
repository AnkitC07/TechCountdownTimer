import {
  Card,
  ResourceList,
  Avatar,
  ResourceItem,
  Stack,
} from "@shopify/polaris";
import React from "react";
import BadgeCustom from "./BadgeCustom";

function PublishedList({ item }) {
  const switchFn = (item) => {
    switch (item) {
      case "Product Page":
        return "/ProductPage/Content";
      case "Top/Bottom Page":
        return "/Top_BottomPage/Content_top";
      case "Landing Page":
        return "/LandingPage/Content_land";
      case "Cart Page":
        return "/CartPage/Content_cart";
      // default:
      //     break;
    }
  };

  const ActiveEnd = (items,type) =>{
    
    const GetDates = (dates) =>{
        let date = new Date(dates)
        return `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`
    }
    try{
        if(type == "Cart Page"){
            return `${items.mnt} min`
        }
        if(items.timerType.fixedTime.status == true){
                return `${items.timerType.fixedTime.time} min`
        }else if(items.timerType.recurring.status == true){
                let never = items.timerType.recurring.end.never
                return `${GetDates(items.timerType.recurring.start.date.start)} - ${never == true?'Never':GetDates(items.timerType.recurring.end.date.end)}`
        }else if(items.timerType.countdownDate.status == true){
             return `${GetDates(items.timerType.countdownDate.startDate.date.start)} - ${GetDates(items.timerType.countdownDate.endDate.date.end)}`
        }
    }catch(err){}
    
  
  }

  return (
    <Card>
      <ResourceList
        resourceName={{ singular: "customer", plural: "customers" }}
        items={item}
        renderItem={(item) => {
          // const { id, url, name, location } = item;
          // const media = <Avatar customer size="medium" name={name} />;
          const page = switchFn(item.Type);
          const activeend = ActiveEnd(item.Content,item.Type)
          console.log(activeend,page)
          return (
            <ResourceItem
              id={item._id}
              url={`${page}?id=${item._id}`}
            >
              <Stack distribution="fillEvenly">
               <div>
               <h1 style={{ fontWeight: "bold" }}>
                  {item.Content.productTimer}
                  {item.Content.timerName}
                </h1>
               </div>
                <div className=" dwxbiy">
                  <div>{item.Type}</div>
                  <div>{activeend}</div>
                  <div>
                    {item.IsPublished == "published" ? (
                      <BadgeCustom status={"success"} text={"Published"} />
                    ) : (
                      <BadgeCustom status={""} text={"Not Published"} />
                    )}
                  </div>
                </div>
              </Stack>
            </ResourceItem>
          );
        }}
      />
    </Card>
  );
}
export default PublishedList;
