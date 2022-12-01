import express from 'express'
import mongoose from 'mongoose'
import Product from '../model/Product.js'
mongoose.Promise = global.Promise
import TopBottom from '../model/TopBotom.js'

const TopBottomRouter = express.Router()

TopBottomRouter.post('/submitTopBottom', async (req, res) => {
  const status = req.query.status
  const id = req.query.id
  const body = req.body
  let tempData;
  const sendStatus = req.query.status == "save" || req.query.status == "Duplicate"?req.query.status:body.ispublished
 if(id == 'null' ||  id == ""|| id=='undefined' || req.query.status == "Duplicate"){
  console.log("create")
    await Product.create({
      Type:body.type,
      Content: body.content,
      Design: body.design,
      Placement: body.placement,
      Html: body.Html,
      IsPublished: body.ispublished,
      Store: body.store
    })
      .then((item) => {
			tempData = item
      console.log(item)
      res.status(200).json({ status: sendStatus, id:item._id }) 
      })
      .catch((err) => {
		console.log(err)
	    res.status(400).send('Unable to save to database')
    
      })

return
   }
   else {
    console.log("update")
    console.log(sendStatus)
       Product.findByIdAndUpdate({_id:id},
			{
				Type:body.type,
				Content: body.content,
				Design: body.design,
				Placement: body.placement,
				Html: body.Html,
				IsPublished: body.ispublished,
				Store: body.store
				},
			{new: true}, function(err, result){
      if (err) return          
      		res.status(200).json({ status: sendStatus, id:result._id }) 
        })
return
   }
  res.status(200).json({ status: 'Not-ok' })
})


TopBottomRouter.delete("/deleterecord", async (req,res)=>{
  const id = req.query.id
  console.log("delete id",id)
  Product.findByIdAndDelete({_id:id},function(err, obj) {
    if (err){
      console.log(err)
      res.status(200).json({code:400,error:err})  
    }
    console.log(obj,"deleted")
    res.status(200).json({code:200,messgae:"deleted"})
  }) 
})

export default TopBottomRouter

