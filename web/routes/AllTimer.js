import express from 'express'
import mongoose from 'mongoose'
import { getSession } from '../index.js'
import Product from '../model/Product.js'

const AllTimer = express.Router()

AllTimer.post('/getAllTimer', async (req, res) => {
 const session = await getSession(req,res)
 const data = await Product.find({Store:session.shop})
  res.status(200).json({ status: data})
})

export default AllTimer
