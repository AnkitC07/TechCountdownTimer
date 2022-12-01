import express from "express";
import mongoose, { now } from "mongoose";
import Product from "../model/Product.js";
mongoose.Promise = global.Promise;
const Theme = express.Router();

Theme.post("/checkingStore", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", " *");
  try {
    const shop = req.body.storename;
    let type = req.body.type;
    console.log(type)

    if (shop == undefined) {
      res.send("store name is missing");
    }
    if (type == "product") {
      type = "Product Page";
    } else if (type == "cart") {
      type = "Cart Page";
    } else if (type == "collection") {
      type = "Landing Page";
    }

    let data = await Product.find({
      IsPublished: "published",
      Store: shop,
      $or: [{ Type: "Top/Bottom Page" }, { Type: type }],
    })

    if(type !== 'Cart Page'){
      data = data.filter(x=>{
        return CheckTimerType(x)
      })
    }
    
    res.send({ data });
  } catch (err) {
    console.log(err)
  }
});


function CheckTimerType(data){
  let date = new Date()
  function startDate(startdate){
    console.log(new Date(startdate) , date,new Date(startdate) <= date,'start')
    return new Date(startdate) <= date
  }

  function endDate(enddate){
    let end = new Date(enddate)
    return date <= new Date(end + 1) || date.getDate() == end.getDate() && date.getMonth() + 1 == end.getMonth() + 1
  }
  
  if(data.Content.timerType.countdownDate.status == true){
   return startDate(data.Content.timerType.countdownDate.startDate.date.start),endDate(data.Content.timerType.countdownDate.endDate.date.end)
  }else if(data.Content.timerType.recurring.status == true){
    return startDate(data.Content.timerType.recurring.start.date.start),endDate(data.Content.timerType.recurring.end.date.end)
  }else{
    return true
  }
}

export default Theme;
