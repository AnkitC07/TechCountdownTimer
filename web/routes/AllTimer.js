import express from 'express'
import mongoose from 'mongoose'
import Product from '../model/Product.js'

const AllTimer = express.Router()

AllTimer.post('/getAllTimer', async (req, res) => {

 let data;

  await Product.find({Store:req.body.shop})
    .then((item) => {
      // res.send('Name saved to database')
      // console.log('get')
      // console.log(item, 'item')
      data=item
    })
    .catch((err) => {
      // res.status(400).send('Unable to save to database')
      console.log(err)
    })

  
  res.status(200).json({ status: data})
})

export default AllTimer
