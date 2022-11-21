import express from 'express'
import mongoose from 'mongoose'
mongoose.Promise = global.Promise
import Cart from '../model/Cart.js'

const CartRouter = express.Router()

CartRouter.post('/', async (req, res) => {
  // console.log('body', req.body)
  const body = req.body
  console.log('Body:', body)

  ///////////////////////// * Creating Collection and Inserting New Data every time * ///////////////////////////

    // await Landing.create({
    //   Content: body.content,
    //   Design: body.design,
    //   Placement: body.placement,
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

  /////////////////////////////// * Updating Data if collection is present * ///////////////////////////////////

  // Landing.update(
  //   {
  //     Content: body.content,
  //     Design: body.design,
  //     Placement: body.Placement,
  //   },
  //   function (err, result) {
  //     if (err) {
  //       console.log(err)
  //     } else {
  //       console.log('Result :', result)
  //     }
  //   },
  // )

  // * Create new Collection & Document if not present and update the document too. * //

  var query = { Content: Object, Design: Object, Placement: Object, Html: Object },
    update = {
      Content: body.content,
      Design: body.design,
      Placement: body.placement,
      Html:body.Html
    },
    options = { upsert: true, new: true, setDefaultsOnInsert: true }

  // Find the document
  Cart.findOneAndUpdate(query, update, options, function (error, result) {
    if (error) return
    console.log('Result: ', result)
    // do something with the document
  })

  res.status(200).json({ status: 'ok' })  
})

export default CartRouter
