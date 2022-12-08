const getShopName = () => {
  return window.location.ancestorOrigins[0].replaceAll("https://", "");
};

const UpdateTimerType = (data, content) => {
  let contentData = {
    ...data.data[content].timerType,
    countdownDate: {
      ...data.data[content].timerType.countdownDate,
      startDate: {
        ...data.data[content].timerType.countdownDate.startDate,
        date: {
          start: new Date(
            data.data[content].timerType.countdownDate.startDate.date.start
          ),
          end: new Date(
            data.data[content].timerType.countdownDate.startDate.date.end
          ),
        },
      },
      endDate: {
        ...data.data[content].timerType.countdownDate.endDate,
        date: {
          start: new Date(
            data.data[content].timerType.countdownDate.endDate.date.start
          ),
          end: new Date(
            data.data[content].timerType.countdownDate.endDate.date.end
          ),
        },
      },
    },
    recurring: {
      ...data.data[content].timerType.recurring,
      start: {
        ...data.data[content].timerType.recurring.start,
        date: {
          start: new Date(
            data.data[content].timerType.recurring.start.date.start
          ),
          end: new Date(data.data[content].timerType.recurring.start.date.end),
        },
      },
      end: {
        ...data.data[content].timerType.recurring.end,
        date: {
          start: new Date(
            data.data[content].timerType.recurring.end.date.start
          ),
          end: new Date(data.data[content].timerType.recurring.end.date.end),
        },
      },
    },
  };
  return contentData;
};

const updateState = async (keyData, state, content, timerType) => {
  Object.keys(timerType).forEach((key) => {
    timerType[key] = {
      ...timerType[key],
      status: false,
    };
  });
  timerType[keyData] = {
    ...timerType[keyData],
    status: true,
  };

  state({ ...content,onceItEnd:'Do nothing', timerType: timerType });
};

// Update the value date object which is under the timer type
const updateCountDownTimer = async (trueKey, falseKey, content, state) => {
  const data = {
    ...content,
    timerType: {
      ...content.timerType,
      countdownDate: {
        ...content.timerType.countdownDate,
        [trueKey]: true,
        [falseKey]: false,
      },
    },
  };

  state(data);
};

// Update the values of countdown timer
const updateCountDownTimerDates = async (key, subkey, e, content, state) => {
  const data = {
    ...content,
    timerType: {
      ...content.timerType,
      countdownDate: {
        ...content.timerType.countdownDate,
        [key]: {
          ...content.timerType.countdownDate[key],
          [subkey]: e,
        },
      },
    },
  };
  state(data);
};

// Change the state of repeat on values
const repeatOn = async (key, e, content, state) => {
  const data = {
    ...content,
    timerType: {
      ...content.timerType,
      recurring: {
        ...content.timerType.recurring,
        repeatOn: {
          ...content.timerType.recurring.repeatOn,
          [key]: e,
        },
      },
    },
  };
  state(data);
};

// update the recurring timer values
const updateRecurringTimer = async (key, subkey, e, content, state) => {
  const data = {
    ...content,
    timerType: {
      ...content.timerType,
      recurring: {
        ...content.timerType.recurring,
        [key]: {
          ...content.timerType.recurring[key],
          [subkey]: e,
        },
      },
    },
  };
  state(data);
};

const updateRecurringTimerRadio = async (key, subkey, content, state) => {
  const data = content.timerType.recurring[key];
  Object.keys(data).forEach((val) => {
    console.log(val);
    if (val !== "date") {
      data[val] = false;
    }
  });
  data[subkey] = true;

  state({
    ...content,
    timerType: {
      ...content.timerType,
      recurring: {
        ...content.timerType.recurring,
        [key]: data,
      },
    },
  });
};

//----------------------- Design function ----------------------------

const updateOptionData = (e, design, state, myoption) => {
  const seletced_data = myoption.find((x) => x.value == e.target.value);
  const updateDesign = {
    ...design,
    template: e.target.value,
    borderSize: seletced_data.borderSize,
    borderColor: seletced_data.borderColor,
  };

  if (seletced_data.tag == true) {
    updateDesign.backtype = {
      single: true,
      gradient: false,
    };
    try{
      updateDesign.titleColor = seletced_data.titleColor
      
    }catch(err){
      console.log(err)
    }
    updateDesign.singleColor = seletced_data.background;
  } else {
    updateDesign.backtype = {
      single: false,
      gradient: true,
    };
    updateDesign.gradClr1 = seletced_data.background1;
    updateDesign.gradClr2 = seletced_data.background2;
    updateDesign.gradAngle = seletced_data.deg.split("deg")[0];
 
  }
  state(updateDesign);
};


// Once it ends

const DisplayOption = async (content)=>{
  const FixedTimer = [
    {
      data: 'Hide the timer for the buyers',
      value: 'Hide the timer for the buyers',
    },
    {
      data: 'Repeat the countdown',
      value: 'Repeat the countdown',
    },
    {
      data: 'Show custom title',
      value: 'Show custom title',
    },
    {
      data: 'Do nothing',
      value: 'Do nothing',
    }
  ]

  const recurring = [
    {
      data:'Hide timer',
      value:'Hide timer'
    },
    {
      data: 'Show custom title',
      value: 'Show custom title',
    },
    {
      data: 'Do nothing',
      value: 'Do nothing',
    }
  ]

  const countdown = [
    {
      data:'Unpublished timer',
      value:'Unpublished timer'
    },
    {
      data: 'Show custom title',
      value: 'Show custom title',
    },
    {
      data: 'Do nothing',
      value: 'Do nothing',
    }
  ]

  const mysoptions = () =>{
    if(content.timerType.countdownDate.status == true){
      return countdown
    }else if(content.timerType.fixedTime.status == true){
      return FixedTimer
    }else if(content.timerType.recurring.status){
      return recurring
    }
  }
 return mysoptions()
}
export {
  DisplayOption,
  getShopName,
  UpdateTimerType,
  updateState,
  updateCountDownTimer,
  repeatOn,
  updateRecurringTimer,
  updateRecurringTimerRadio,
  updateCountDownTimerDates,
  updateOptionData,
};
