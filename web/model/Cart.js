import mongoose from 'mongoose'

const CartpageSchema = new mongoose.Schema({
  Content: {
    id: {
      type: String,
    },
    timerName: String,
    title: {
      type: String,
    },
    mnt:String,
    onceItEnd: {
      type: String,
    },
  },
  Design: {
    template: {
      type: [String],
    },
    backtype: {
      type: String,
      required: false,
    },
    singleColor: {
      type: String,
    },
    gradAngle: {
      type: String,
    },
    gradClr1: {
      type: String,
    },
    gradClr2: {
      type: String,
    },
     cornerRadus: {
      type: String,
    },
    borderSize: {
      type: String,
    },
    borderColor: {
      type: String,
    },
    spaceIntop: {
      type: String,
    },
    spaceInbottom: {
      type: String,
    },
    spaceOuttop: {
      type: String,
    },
    spaceOutbottom: {
      type: String,
    },
    font: {
      type: String,
    },
    titleSize: {
      type: String,
    },
    titleColor: {
      type: String,
    },
    timerSize: {
      type: String,
    },
    timerColor: {
      type: String,
    },
   
   
  },
  Placement: {
    selectProduct: {
      type: String,
    },
  },
  Html: {
    html: {
      type: String,
    },
   }
})

export default mongoose.model('Cart', CartpageSchema)