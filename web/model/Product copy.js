import mongoose from 'mongoose'

const ProductPagSchema = new mongoose.Schema({
  Type:{
    type:String
  },
  Content: {
    type:Object
    // id: {
    //   type: String,
    // },
    // productTimer: String,
    // productTitle: {
    //   type: String,
    // },
    // productSubheading: {
    //   type: String,
    // },

    // productDays: {
    //   type: String,
    // },
    // productHrs: {
    //   type: String,
    // },
    // productMin: {
    //   type: String,
    // },
    // productSec: {
    //   type: String,
    // },
    // timerType: {
    //   type: String,
    // },
    // fixedTime: {
    //   type: String,
    // },
    // RepeatOn: {
    //   monday: Boolean,
    //   tuesday: Boolean,
    //   wednesday: Boolean,
    //   thursday: Boolean,
    //   friday: Boolean,
    //   saturday: Boolean,
    //   sunday: Boolean,
    // },
    // dailyStartHrs: String,
    // dailyStartMnt: String,
    // dailyEndHrs: String,
    // dailyEndMnt: String,
    // timerStart: String,
    // selectedDates: {
    //   start: {
    //     type: String,
    //   },
    //   end: {
    //     type: String,
    //   },
    // },
    // startHrs: {
    //   type: String,
    // },
    // startMnt: {
    //   type: String,
    // },
    // selectedEndDates: {
    //   start: {
    //     type: String,
    //   },
    //   end: {
    //     type: String,
    //   },
    // },
    // endHrs: {
    //   type: String,
    // },
    // endMnt: {
    //   type: String,
    // },
    // starts: String,
    // ends: String,
    // onceItEnd: {
    //   type: String,
    // },
  },
  Design: {
    type:Object
    // template: {
    //   type: String,
    // },
    // backtype: {
    //   type: String,
    //   required: false,
    // },
    // singleColor: {
    //   type: String,
    // },
    // gradAngle: {
    //   type: String,
    // },
    // gradClr1: {
    //   type: String,
    // },
    // gradClr2: {
    //   type: String,
    // },
    // cornerRadus: {
    //   type: String,
    // },
    // borderSize: {
    //   type: String,
    // },
    // borderColor: {
    //   type: String,
    // },
    // spaceIntop: {
    //   type: String,
    // },
    // spaceInbottom: {
    //   type: String,
    // },
    // spaceOuttop: {
    //   type: String,
    // },
    // spaceOutbottom: {
    //   type: String,
    // },
    // font: {
    //   type: String,
    // },
    // titleSize: {
    //   type: String,
    // },
    // titleColor: {
    //   type: String,
    // },
    // subheadingSize: {
    //   type: String,
    // },
    // subheadingColor: {
    //   type: String,
    // },
    // timerSize: {
    //   type: String,
    // },
    // timerColor: {
    //   type: String,
    // },
    // legendSize: {
    //   type: String,
    // },
    // legendColor: {
    //   type: String,
    // },
  },
  Placement: {
    type:Object
    // selectProduct: {
    //   type: String,
    // },
    // specProduct: {
    //   type: [String],
    // },
    // tags: {
    //   type: String,
    // },
  },
   Html: {
      type: String,
   }
    
})

export default mongoose.model('Product', ProductPagSchema)
