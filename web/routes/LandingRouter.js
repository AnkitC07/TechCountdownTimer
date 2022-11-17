import express from 'express'
import mongoose from 'mongoose'
mongoose.Promise = global.Promise
import Landing from '../model/Landing.js'
import Product from '../model/Product.js'

const LandingRouter = express.Router()

LandingRouter.post('/submitLanding', async (req, res) => {
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

  // var query = { Content: Object, Design: Object, Placement: Object },
  //   update = {
  //     Content: body.content,
  //     Design: body.design,
  //     Placement: body.placement,
  //   },
  //   options = { upsert: true, new: true, setDefaultsOnInsert: true }

  // // Find the document
  // Landing.findOneAndUpdate(query, update, options, function (error, result) {
  //   if (error) return
  //   console.log('Result: ', result)
  //   // do something with the document
  // })

  res.status(200).json({ status: 'ok' })  
})

export default LandingRouter
