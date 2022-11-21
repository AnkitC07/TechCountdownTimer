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
console.log(id)
 if(id == 'null' ||  id == ""){
  console.log("create")
    await Product.create({
      Type:body.type,
      Content: body.content,
      Design: body.design,
      Placement: body.placement,
      Html: body.Html,
      IsPublished: 'published',
      Store: body.store
    })
      .then((item) => {
			// res.send('Name saved to database')
			console.log('saved')
			console.log(item, 'item')
			tempData = item
      })
      .catch((err) => {
		console.log(err)
	    res.status(400).send('Unable to save to database')
    
      })
      res.status(200).json({ status: 'published', id:tempData._id })
return
   }
   else {
		body.ispublished = status
       Product.findByIdAndUpdate({_id:id},
			{
				Type:body.type,
				Content: body.content,
				Design: body.design,
				Placement: body.placement,
				Html: body.Html,
				IsPublished: status,
				Store: body.store
				},
			{new: true}, function(err, result){
          	if (err) return
         	 console.log('Result: ', result)
      		res.status(200).json({ status: 'unPublished', id:result._id }) 
          // do something with the document
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

