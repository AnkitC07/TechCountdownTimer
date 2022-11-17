import express from 'express'
import mongoose from 'mongoose'
import Product from '../model/Product.js'
const GetDatabyId = express.Router()

GetDatabyId.post('/getDataById', async (req, res) => {


 let data;

  await Product.findById(req.body.id)
    .then((item) => {
      // res.send('Name saved to database')
      console.log('getDataById')
      console.log('data', item)
      data=item
    })
    .catch((err) => {
      // res.status(400).send('Unable to save to database')
      console.log(err)
    })

  
  res.status(200).json({ data: data})
})

export default GetDatabyId