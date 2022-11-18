import mongoose from 'mongoose'

const ProductPagSchema = new mongoose.Schema({
  Type:{
    type:String
  },
  Content: {
    type:Object 
  },
  Design: {
    type:Object
  },
  Placement: {
    type:Object
  },
   Html: {
      type: String,
   },
   IsPublished:String,
  Store:{
    type:String
  }
})

export default mongoose.model('Product', ProductPagSchema)
