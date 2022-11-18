import express from 'express'
import mongoose from 'mongoose'
import Product from '../model/Product.js'
mongoose.Promise = global.Promise
import TopBottom from '../model/TopBotom.js'

const TopBottomRouter = express.Router()

TopBottomRouter.post('/submitTopBottom', async (req, res) => {

 
  const status = req.query.status
  console.log("status",status)
  const id = req.query.id
  console.log("id",id)

  const body = req.body
  // console.log('Body:', body)



  // await TopBottom.create({
  //   Content: body.content,
  //   Design: body.design,
  //   Placement: body.Placement,
  // })
  //   .then((item) => {
  //     // res.send('Name saved to database')
  //     console.log('saved')
  //     console.log(item, 'item')
  //   })
  //   .catch((err) => {
  //     // res.status(400).send('Unable to save to database')
  //     console.log(err)
  //   })
  // *   creating top bottom model    * //
	
//    if(status == 'unPublished'){
//   let tempData;
//     await Product.create({
//       Type:body.type,
//       Content: body.content,
//       Design: body.design,
//       Placement: body.placement,
//       Html: body.Html,
//       IsPublished: 'published',
//       Store: body.store
//     })
//       .then((item) => {
// 			// res.send('Name saved to database')
// 			console.log('saved')
// 			console.log(item, 'item')
// 			tempData = item
//       })
//       .catch((err) => {
//         // res.status(400).send('Unable to save to database')
//         console.log(err)
//       })
//       res.status(200).json({ status: 'published', id:tempData._id })
// return
//    }
//    else if(status=='published'){
		
//        Product.findByIdAndUpdate({_id:id}, {IsPublished:'unPublished'}, {new: true}, function(err, result){
//           if (err) return
//           console.log('Result: ', result)
//       res.status(200).json({ status: 'unPublished', id:result._id }) 
//           // do something with the document
//         })
// return
//    }


 if(id == 'null'){
  let tempData;
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

  // * Create new Collection & Document if not present and update the document too. * //

  // var query = { Content: Object, Design: Object, Placement: Object },
  //   update = {
  //     Content: body.content,
  //     Design: body.design,
  //     Placement: body.placement,
  //   },
  //   options = { upsert: true, new: true, setDefaultsOnInsert: true }

  // // Find the document
  // TopBottom.findOneAndUpdate(query, update, options, function (error, result) 
  

  // console.log(response)
  res.status(200).json({ status: 'Not-ok' })
})

export default TopBottomRouter

