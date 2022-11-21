import express from 'express'
import mongoose from 'mongoose'
import Product from '../model/Product.js'
const ProductRouter = express.Router()

ProductRouter.post('/submitProduct', async (req, res) => {
  // console.log('body', req.body)
  const body = req.body
  console.log('Body:', body)

  // await Landing.create({ name: 'Axl Rose' })
  // body.content.save()

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
      // res.send('Name saved to database')
      console.log('saved')
      console.log(item, 'item')
    })
    .catch((err) => {
      // res.status(400).send('Unable to save to database')
      console.log(err)
    })

  // * Create new Collection & Document if not present and update the document too. * //

  // var query = { Content: Object, Design: Object, Placement: Object, Html: String},
  //   update = {
  //     Content: body.content,
  //     Design: body.design,
  //     Placement: body.placement,
  //     Html: body.Html
  //   },
  //   options = { upsert: true, new: true, setDefaultsOnInsert: true }

  // // Find the document
  // Product.findOneAndUpdate(query, update, options, function (error, result) {
  //   if (error){
  //     console.log(error)
  //     return
  //   } 
  //   console.log('Result: ', result)
  //   // do something with the document
  // })

  // console.log(response)
  res.status(200).json({ status: 'ok' })
})

export default ProductRouter
