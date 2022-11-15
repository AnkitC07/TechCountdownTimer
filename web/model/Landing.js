import mongoose from 'mongoose'

const LandingPagSchema = new mongoose.Schema({
  Content: {
    id: {
      type: String,
    },
    timerName: String,
    title: {
      type: String,
    },
    subHeading: {
      type: String,
    },
    callToAction: {
      type: String,
    },
    buttonText: {
      type: String,
    },
    link: {
      type: String,
    },
    closeIcon: {
      type: Boolean,
    },
    days: {
      type: String,
    },
    hrs: {
      type: String,
    },
    mins: {
      type: String,
    },
    secs: {
      type: String,
    },
    timerType: {
      type: String,
    },
    startDate: {
      start: {
        type: String,
      },
      end: {
        type: String,
      },
    },
    startHrs: {
      type: String,
    },
    startMnt: {
      type: String,
    },
    endDate: {
      start: {
        type: String,
      },
      end: {
        type: String,
      },
    },
    endHrs: {
      type: String,
    },
    endMnt: {
      type: String,
    },
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
    subheadingSize: {
      type: String,
    },
    subheadingColor: {
      type: String,
    },
    timerSize: {
      type: String,
    },
    timerColor: {
      type: String,
    },
    legendSize: {
      type: String,
    },
    legendColor: {
      type: String,
    },
    buttonColor: {
      type: String,
    },
    buttonFontSize: {
      type: String,
    },
    buttonFontColor: {
      type: String,
    },
    cornerRadus: {
      type: String,
    },
  },
  Placement: {
    selectProduct: {
      type: String,
    },
    specProduct: {
      type: [String],
    },
    tags: {
      type: String,
    },
  },
})

export default mongoose.model('Landing', LandingPagSchema)
