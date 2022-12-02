import React, { useEffect, useRef, useState } from 'react'
import CheckBoxComponent from '../Fields/CheckBoxComponent'
import InputComponent from '../Fields/InputComponent'
import DateInput from '../Fields/DateInput'
import InputNumber from '../Fields/InputNumber'
import InputSelect from '../Fields/InputSelect'
import { ProductPage } from '../Product/ProductPage'
import Top_BottomPage from './Top_BottomPage'
import DatePickerExample from '../Fields/DatePickerInput'
import { MobileCancelMajor } from '@shopify/polaris-icons'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { TopBottomContext } from '../../context/Top_Bottom_Context'
import CheckboxExample from '../Fields/CheckBoxSqaure'
import TimerBagde_Top from './TimerBagde_Top'
import {updateState,updateCountDownTimer,updateCountDownTimerDates,repeatOn,updateRecurringTimer,updateRecurringTimerRadio} from '../common_functions/functions'

function Content() {
  const { design, content, setContent, setHtml } = useContext(TopBottomContext)
  const [timerType,timerState] = useState(content.timerType)
  let height;
  document.addEventListener('scroll', () => {
    height = window.scrollY;
    if (height >= '53') {
      document.getElementById('top-change').classList.remove('top-change')
      document.getElementById('preview').classList.add('extra-margin')
    } else {
      document.getElementById('top-change').classList.add('top-change')
      document.getElementById('preview').classList.remove('extra-margin')
    }
  })


  const ref = useRef()
  // console.log(ref.current.innerHTML)
  setTimeout(() => {
    setHtml(ref.current.innerHTML)

  }, 100);

  useEffect(() => {
    document.querySelector("#Content a").click()
  }, [])


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

  const call_to_action = [
    {
      value: 'No call to action',
      data: 'No call to action',
    },
    {
      value: 'Button',
      data: 'Button',
    },
    {
      value: 'Make entire bar clickable',
      data: 'Make entire bar clickable',
    },
  ]
  // console.log(Date.parse(content.startDate.start))
  let date = new Date()
  // add a day

  date.setDate(date.getDate() + 1)

  // const updateRecurringTimerRadio = async (key,subkey,content,state) =>{
  //   const data = content.timerType.recurring[key]
  //   Object.keys(data).forEach(val => {
  //     console.log(val)
  //     if(val !== 'date'){
  //       data[val] = false
  //     }
  //   });
  //   data[subkey] = true
    
  //   state({...content,timerType:{
  //     ...content.timerType,
  //     recurring:{
  //       ...content.timerType.recurring,
  //       [key]:data
  //     }
  //   }})
  // }

  return (
    <>
      <div className="row px-5 py-3 top-change " id="top-change">
        <div className="col col-md-4">
          <div className="Polaris-Card">
            <div className="Polaris-Card__Section">
              <div className="Polaris-FormLayout">
                <div className="Polaris-FormLayout__Item">
                  <div className="Polaris-Labelled__LabelWrapper">
                    <div className="Polaris-Label">
                      <label
                        id="nameLabel"
                        htmlFor="name"
                        className="Polaris-Label__Text"
                      >
                        Countdown name
                      </label>
                    </div>
                  </div>
                  <InputComponent
                    id="name"
                    type="text"
                    default={content.timerName}
                    onChange={(e) => {
                      setContent({ ...content, timerName: e.target.value })
                    }}
                  />

                  <div
                    className="Polaris-Labelled__HelpText"
                    id="nameHelpText"
                    style={{ marginLeft: '5px' }}
                  >
                    Only visible to you. For your own internal reference.
                  </div>
                </div>
                <div className="Polaris-FormLayout__Item">
                  <div className="Polaris-Labelled__LabelWrapper">
                    <div className="Polaris-Label">
                      <label
                        id="titleLabel"
                        htmlFor="title"
                        className="Polaris-Label__Text"
                      >
                        Title
                      </label>
                    </div>
                  </div>
                  <InputComponent
                    id="title"
                    type="text"
                    default={content.title}
                    onChange={(e) => {
                      setContent({ ...content, title: e.target.value })
                    }}
                  />
                </div>
                <div className="Polaris-FormLayout__Item">
                  <div className="Polaris-Labelled__LabelWrapper">
                    <div className="Polaris-Label">
                      <label
                        id="subheadingLabel"
                        htmlFor="subheading"
                        className="Polaris-Label__Text"
                      >
                        Subheading
                      </label>
                    </div>
                  </div>
                  <InputComponent
                    id="subheading"
                    type="text"
                    default={content.subHeading}
                    onChange={(e) => {
                      setContent({ ...content, subHeading: e.target.value })
                    }}
                  />
                </div>
                <div className="Polaris-FormLayout__Item">
                  <div className="Polaris-Labelled__LabelWrapper">
                    <div className="Polaris-Label">
                      <label
                        id="nameLabel"
                        htmlFor="name"
                        className="Polaris-Label__Text"
                      >
                        Call to action
                      </label>
                    </div>
                  </div>
                  <InputSelect
                    option={call_to_action}
                    placeholder="Button"
                    value={content.callToAction}
                    onChange={(e) => {
                      setContent({
                        ...content,
                        callToAction: e.target.value,
                      })
                    }}
                  />
                </div>
                {/* ******** */}
                {content.callToAction == 'No call to action' ? (
                  ''
                ) : content.callToAction == 'Button' ? (
                  <>
                    <div id="btnText-top" className="Polaris-FormLayout__Item">
                      <div className="Polaris-Labelled__LabelWrapper">
                        <div className="Polaris-Label">
                          <label
                            id="buttonText"
                            htmlFor="buttonText"
                            className="Polaris-Label__Text"
                          >
                            Button Text
                          </label>
                        </div>
                      </div>
                      <InputComponent
                        id="buttontext"
                        type="text"
                        default={content.buttonText}
                        onChange={(e) => {
                          setContent({ ...content, buttonText: e.target.value })
                        }}
                      />
                    </div>
                    <div id="linkText-top" className="Polaris-FormLayout__Item">
                      <div className="Polaris-Labelled__LabelWrapper">
                        <div className="Polaris-Label">
                          <label
                            id="subheadingLabel"
                            htmlFor="subheading"
                            className="Polaris-Label__Text"
                          >
                            Link
                          </label>
                        </div>
                      </div>
                      <InputComponent
                        id="link"
                        type="text"
                        default={content.link}
                        onChange={(e) => {
                          setContent({ ...content, link: e.target.value })
                        }}
                      />
                    </div>
                  </>
                ) : content.callToAction == 'Make entire bar clickable' ? (
                  <div id="linkText-top" className="Polaris-FormLayout__Item">
                    <div className="Polaris-Labelled__LabelWrapper">
                      <div className="Polaris-Label">
                        <label
                          id="subheadingLabel"
                          htmlFor="subheading"
                          className="Polaris-Label__Text"
                        >
                          Link
                        </label>
                      </div>
                    </div>
                    <InputComponent
                      id="link"
                      type="text"
                      default={content.link}
                      onChange={(e) => {
                        setContent({ ...content, link: e.target.value })
                      }}
                    />
                  </div>
                ) : (
                  ''
                )}

                <div className="Polaris-FormLayout__Item">
                  <CheckboxExample
                    label={'Close Icon'}
                    state1={content.closeIcon}
                    onChange={(e) => {
                      setContent((state) => {
                        return {
                          ...state,
                          closeIcon: e,
                        }
                      })
                      console.log(e)
                    }}
                  />
                </div>
                <div className="Polaris-FormLayout__Item">
                  <div className="sc-hKMtZM lgMwuC">
                    <div className="sc-eCYdqJ jQuyTy">
                      <div className="sc-jSMfEi hzQfHd">Timer labels</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="Polaris-Connected w-24">
                        <InputComponent
                          id="legendCopyDays"
                          placeholder="Days"
                          default={content.days}
                          onChange={(e) => {
                            setContent({ ...content, days: e.target.value })
                          }}
                        />
                      </div>
                      <div className="Polaris-Connected w-24">
                        <InputComponent
                          id="legendCopyHours"
                          placeholder="Hours"
                          default={content.hrs}
                          onChange={(e) => {
                            setContent({ ...content, hrs: e.target.value })
                          }}
                        />
                      </div>
                      <div className="Polaris-Connected w-24">
                        <InputComponent
                          id="legendCopyMins"
                          placeholder="Mins"
                          default={content.mins}
                          onChange={(e) => {
                            setContent({ ...content, mins: e.target.value })
                          }}
                        />
                      </div>
                      <div className="Polaris-Connected w-24">
                        <InputComponent
                          id="legendCopySecs"
                          placeholder="Secs"
                          default={content.secs}
                          onChange={(e) => {
                            setContent({ ...content, secs: e.target.value })
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="Polaris-Card__Section">
              <div className="sc-bczRLJ czvMoD">
                <div className="Polaris-FormLayout">
                  <div>
                    <div className="Polaris-FormLayout__Item">
                      <span className="Polaris-TextStyle--variationStrong">
                        Timer Type
                      </span>
                    </div>
                    <CheckBoxComponent
                      id="toDate"
                      name="toDate"
                      label="Countdown to a date"
                      checked={content.timerType.countdownDate.status}
                      decription="Timer that ends at the specific date."
                      onChange={(e) => {
                        updateState("countdownDate",setContent,content,timerType)
                        // setContent({ ...content, timerType: {countdownDate} })
                      }}
                    />
                    <CheckBoxComponent
                      id="fixed"
                      name="toDate"
                      label="Fixed minutes"
                      checked={content.timerType.fixedTime.status}

                      decription="Individual fixed minutes countdown for each buyer session."
                      onChange={(e) => {
                        updateState("fixedTime",setContent,content,timerType)
                      }}
                    />
                    <CheckBoxComponent
                      id="recurring"
                      name="toDate"
                      checked={content.timerType.recurring.status}
                      label="Daily recurring timer"
                      decription="E.g. every weekday from 9 am to 11 am"
                      onChange={(e) => {
                        updateState("recurring",setContent,content,timerType)
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="sc-bczRLJ czvMoD pt-3">
                <div className="Polaris-FormLayout">
                  {content.timerType.countdownDate.status == true ? (
                    content.timerType.countdownDate.rightNow == true ? (
                      <>
                        <div className="Polaris-FormLayout__Item">
                          <div className="Polaris-Labelled__LabelWrapper">
                            <div className="Polaris-Label">
                              <label
                                id="startDateLabel"
                                htmlFor="startDate"
                                className="Polaris-Label__Text"
                              >
                                Timer Start
                              </label>
                            </div>
                          </div>
                        </div>
                        <CheckBoxComponent
                          id="rightNow"
                          name="timerStart"
                          checked={content.timerType.countdownDate.rightNow}
                          label="Right now"
                          onChange={(e) => {
                            updateCountDownTimer('rightNow','schedule',content,setContent)
                          }}
                        />
                        <CheckBoxComponent
                          id="schedule"
                          name="timerStart"
                          checked={content.timerType.countdownDate.schedule}
                          label="Schedule to start later"
                          onChange={(e) => {
                            updateCountDownTimer('schedule','rightNow',content,setContent)
                          }}
                        />
                        <div className="Polaris-FormLayout__Item">
                          <div>
                            <div className="">
                              <div className="Polaris-Labelled__LabelWrapper">
                                <div className="Polaris-Label">
                                  <label
                                    id="endDateLabel"
                                    htmlFor="endDate"
                                    className="Polaris-Label__Text"
                                  >
                                    End date
                                  </label>
                                </div>
                              </div>
                              <DatePickerExample
                                state1={content.timerType.countdownDate.endDate.date}
                                onChange={(e) => {
                                  updateCountDownTimerDates("endDate",'date',e,content,setContent)
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          role="group"
                          className="Polaris-FormLayout--condensed"
                        >
                          <div className="Polaris-FormLayout__Items recurringTimer">
                            <div className="Polaris-FormLayout__Item">
                              <div className="">
                                <div className="Polaris-Labelled__LabelWrapper">
                                  <div className="Polaris-Label">
                                    <label
                                      id="hoursLabel"
                                      htmlFor="hours"
                                      className="Polaris-Label__Text"
                                    >
                                      Hours
                                    </label>
                                  </div>
                                </div>
                                <InputNumber
                                  id="hours"
                                  label="hoursLabel"
                                  defaultValue={content.timerType.countdownDate.endDate.hr}
                                  state1={content.timerType.countdownDate.endDate.hr}
                                  onChange={(e) => {
                                    updateCountDownTimerDates("endDate",'hr',e,content,setContent)
                                  }}
                                />
                              </div>
                            </div>
                            <div className="Polaris-FormLayout__Item">
                              <div className="">
                                <div className="Polaris-Labelled__LabelWrapper">
                                  <div className="Polaris-Label">
                                    <label
                                      id="minutesLabel"
                                      htmlFor="minutes"
                                      className="Polaris-Label__Text"
                                    >
                                      Minutes
                                    </label>
                                  </div>
                                </div>
                                <InputNumber
                                  id="minutes"
                                  label="minutesLabel"
                                  defaultValue={content.timerType.countdownDate.endDate.min}
                                  state1={content.timerType.countdownDate.endDate.min}
                                  onChange={(e) => {
                                    updateCountDownTimerDates("endDate",'min',e,content,setContent)
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="Polaris-FormLayout__Item">
                          <div className="Polaris-Labelled__LabelWrapper">
                            <div className="Polaris-Label">
                              <label
                                id="startDateLabel"
                                htmlFor="startDate"
                                className="Polaris-Label__Text"
                              >
                                Timer Start
                              </label>
                            </div>
                          </div>
                        </div>
                        <CheckBoxComponent
                          id="rightNow"
                          name="timerStart"
                          checked={content.timerType.countdownDate.rightNow}
                          label="Right now"
                          onChange={(e) => {
                            updateCountDownTimer('rightNow','schedule',content,setContent)
                          }}
                        />
                        <CheckBoxComponent
                          id="schedule"
                          name="timerStart"
                          checked={content.timerType.countdownDate.schedule}
                          label="Schedule to start later"
                          onChange={(e) => {
                            updateCountDownTimer('schedule','rightNow',content,setContent)
                          }}
                        />
                        <div className="Polaris-FormLayout__Item">
                          <div>
                            <div className="">
                              <div className="Polaris-Labelled__LabelWrapper">
                                <div className="Polaris-Label">
                                  <label
                                    id="startDateLabel"
                                    htmlFor="startDate"
                                    className="Polaris-Label__Text"
                                  >
                                    Start date
                                  </label>
                                </div>
                              </div>
                              <DatePickerExample
                                state1={content.timerType.countdownDate.startDate.date}
                                onChange={(e) => {
                                  updateCountDownTimerDates("startDate",'date',e,content,setContent)
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          role="group"
                          className="Polaris-FormLayout--condensed"
                        >
                          <div className="Polaris-FormLayout__Items recurringTimer">
                            <div className="Polaris-FormLayout__Item">
                              <div className="">
                                <div className="Polaris-Labelled__LabelWrapper">
                                  <div className="Polaris-Label">
                                    <label
                                      id="hoursLabel"
                                      htmlFor="hours"
                                      className="Polaris-Label__Text"
                                    >
                                      Hours
                                    </label>
                                  </div>
                                </div>
                                <InputNumber
                                  id="hours"
                                  label="hoursLabel"
                                  defaultValue={content.timerType.countdownDate.startDate.hr}
                                  state1={content.timerType.countdownDate.startDate.hr}
                                  onChange={(e) => {
                                    updateCountDownTimerDates("startDate",'hr',e,content,setContent)
                                  }}
                                />
                              </div>
                            </div>
                            <div className="Polaris-FormLayout__Item">
                              <div className="">
                                <div className="Polaris-Labelled__LabelWrapper">
                                  <div className="Polaris-Label">
                                    <label
                                      id="minutesLabel"
                                      htmlFor="minutes"
                                      className="Polaris-Label__Text"
                                    >
                                      Minutes
                                    </label>
                                  </div>
                                </div>
                                <InputNumber
                                  id="minutes"
                                  label="minutesLabel"
                                  defaultValue={content.timerType.countdownDate.startDate.min}
                                  state1={content.timerType.countdownDate.startDate.min}
                                  onChange={(e) => {
                                    updateCountDownTimerDates("startDate",'min',e,content,setContent)
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="Polaris-FormLayout__Item">
                          <div>
                            <div className="">
                              <div className="Polaris-Labelled__LabelWrapper">
                                <div className="Polaris-Label">
                                  <label
                                    id="endDateLabel"
                                    htmlFor="endDate"
                                    className="Polaris-Label__Text"
                                  >
                                    End date
                                  </label>
                                </div>
                              </div>
                              <DatePickerExample
                                state1={content.timerType.countdownDate.endDate.date}
                                onChange={(e) => {
                                  updateCountDownTimerDates("endDate",'date',e,content,setContent)
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          role="group"
                          className="Polaris-FormLayout--condensed"
                        >
                          <div className="Polaris-FormLayout__Items recurringTimer">
                            <div className="Polaris-FormLayout__Item">
                              <div className="">
                                <div className="Polaris-Labelled__LabelWrapper">
                                  <div className="Polaris-Label">
                                    <label
                                      id="hoursLabel"
                                      htmlFor="hours"
                                      className="Polaris-Label__Text"
                                    >
                                      Hours
                                    </label>
                                  </div>
                                </div>
                                <InputNumber
                                  id="hours"
                                  label="hoursLabel"
                                  defaultValue={content.timerType.countdownDate.endDate.hr}
                                  state1={content.timerType.countdownDate.endDate.hr}
                                  onChange={(e) => {
                                    updateCountDownTimerDates("endDate",'hr',e,content,setContent)
                                  }}
                                />
                              </div>
                            </div>
                            <div className="Polaris-FormLayout__Item">
                              <div className="">
                                <div className="Polaris-Labelled__LabelWrapper">
                                  <div className="Polaris-Label">
                                    <label
                                      id="minutesLabel"
                                      htmlFor="minutes"
                                      className="Polaris-Label__Text"
                                    >
                                      Minutes
                                    </label>
                                  </div>
                                </div>
                                <InputNumber
                                  id="minutes"
                                  label="minutesLabel"
                                  defaultValue={content.timerType.countdownDate.endDate.min}
                                  state1={content.timerType.countdownDate.endDate.min}
                                  onChange={(e) => {
                                    updateCountDownTimerDates("endDate",'min',e,content,setContent)
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  ) : content.timerType.fixedTime.status == true ? (
                    <div className="Polaris-FormLayout__Item">
                      <InputNumber
                        id="fixedMnt"
                        label="fixed"
                        defaultValue={content.timerType.fixedTime.time}
                        onChange={(e) => {
                          setContent({
                            ...content,timerType:{
                              ...content.timerType,
                              fixedTime:{
                                ...content.timerType.fixedTime,
                                time:e
                              }
                            }
                          })
                        }}
                      />
                    </div>
                  ) : content.timerType.recurring.status == true ? (
                    <>
                      <div className="Polaris-FormLayout__Item">
                        <div className="Polaris-Labelled__LabelWrapper">
                          <div className="Polaris-Label">
                            <label
                              id="RepeatOn"
                              htmlFor="RepeatOn"
                              className="Polaris-Label__Text"
                            >
                              Repeat on
                            </label>
                          </div>
                        </div>
                        <ul class="Polaris-ChoiceList__Choices">
                          <li class="Polaris-ChoiceList__ChoiceItem">
                            <CheckboxExample
                              label={'Monday'}
                              state1={content.timerType.recurring.repeatOn.monday}
                              onChange={(e) => {
                                repeatOn('monday',e,content,setContent)
                              }}
                            />
                          </li>
                          <li class="Polaris-ChoiceList__ChoiceItem">
                            <CheckboxExample
                              label={'Tuesday'}
                              state1={content.timerType.recurring.repeatOn.tuesday}
                              onChange={(e) => {
                                repeatOn('tuesday',e,content,setContent)
                              }}
                            />
                          </li>
                          <li class="Polaris-ChoiceList__ChoiceItem">
                            <CheckboxExample
                              label={'Wednesday'}
                              state1={content.timerType.recurring.repeatOn.wednesday}
                              onChange={(e) => {
                                repeatOn('wednesday',e,content,setContent)
                              }}
                            />
                          </li>
                          <li class="Polaris-ChoiceList__ChoiceItem">
                            <CheckboxExample
                              label={'Thursday'}
                              state1={content.timerType.recurring.repeatOn.thursday}
                              onChange={(e) => {
                                repeatOn('thursday',e,content,setContent)
                              }}
                            />
                          </li>
                          <li class="Polaris-ChoiceList__ChoiceItem">
                            <CheckboxExample
                              label={'Friday'}
                              state1={content.timerType.recurring.repeatOn.friday}
                              onChange={(e) => {
                                repeatOn('friday',e,content,setContent)
                              }}
                            />
                          </li>
                          <li class="Polaris-ChoiceList__ChoiceItem">
                            <CheckboxExample
                              label={'Saturday'}
                              state1={content.timerType.recurring.repeatOn.saturday}
                              onChange={(e) => {
                                repeatOn('saturday',e,content,setContent)
                              }}
                            />
                          </li>
                          <li class="Polaris-ChoiceList__ChoiceItem">
                            <CheckboxExample
                              label={'Sunday'}
                              state1={content.timerType.recurring.repeatOn.sunday}
                              onChange={(e) => {
                                repeatOn('sunday',e,content,setContent)
                              }}
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="Polaris-FormLayout__Items recurringTimer">
                        <div className="Polaris-FormLayout__Item">
                          <div className="Polaris-Labelled__LabelWrapper">
                            <div className="Polaris-Label">
                              <label
                                id="startDateLabel"
                                htmlFor="startDate"
                                className="Polaris-Label__Text"
                              >
                                Daily start timer
                              </label>
                            </div>
                          </div>
                          <InputNumber
                            id="hours"
                            label="hoursLabel"
                            defaultValue={content.timerType.recurring.dailyStart.hr}
                            onChange={(e) => {
                              updateRecurringTimer('dailyStart','hr',e,content,setContent)
                            }}
                          />
                          <div
                            class="Polaris-Labelled__HelpText"
                            id="minutesHelpText"
                          >
                            Hours
                          </div>
                        </div>
                        <div className="Polaris-FormLayout__Item">
                          <div className="Polaris-Labelled__LabelWrapper">
                            <div className="Polaris-Label">
                              <label
                                id="startDateLabel"
                                htmlFor="startDate"
                                className="Polaris-Label__Text"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <InputNumber
                            id="mnt"
                            label="mntLabel"
                            defaultValue={content.timerType.recurring.dailyStart.min}
                            onChange={(e) => {
                              updateRecurringTimer('dailyStart','min',e,content,setContent)
                            }}
                          />
                          <div
                            class="Polaris-Labelled__HelpText"
                            id="minutesHelpText"
                          >
                            Minutes
                          </div>
                        </div>
                      </div>
                      <div className="Polaris-FormLayout__Items recurringTimer">
                        <div className="Polaris-FormLayout__Item">
                          <div className="Polaris-Labelled__LabelWrapper">
                            <div className="Polaris-Label">
                              <label
                                id="startDateLabel"
                                htmlFor="startDate"
                                className="Polaris-Label__Text"
                              >
                                Daily end timer
                              </label>
                            </div>
                          </div>
                          <InputNumber
                            id="hours"
                            label="hoursLabel"
                            defaultValue={content.timerType.recurring.dailyEnd.hr}
                            onChange={(e) => {
                              updateRecurringTimer('dailyEnd','hr',e,content,setContent)
                            }}
                          />
                          <div
                            class="Polaris-Labelled__HelpText"
                            id="minutesHelpText"
                          >
                            Hours
                          </div>
                        </div>
                        <div className="Polaris-FormLayout__Item">
                          <div className="Polaris-Labelled__LabelWrapper">
                            <div className="Polaris-Label">
                              <label
                                id="startDateLabel"
                                htmlFor="startDate"
                                className="Polaris-Label__Text"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <InputNumber
                            id="mnt"
                            label="mntLabel"
                            defaultValue={content.timerType.recurring.dailyEnd.min}
                            onChange={(e) => {
                              updateRecurringTimer('dailyEnd','min',e,content,setContent)
                            }}
                          />
                          <div
                            class="Polaris-Labelled__HelpText"
                            id="minutesHelpText"
                          >
                            Minutes
                          </div>
                        </div>
                      </div>
                      <div className="Polaris-FormLayout__Item">
                        <div className="Polaris-Labelled__LabelWrapper">
                          <div className="Polaris-Label">
                            <label
                              id="startDateLabel"
                              htmlFor="startDate"
                              className="Polaris-Label__Text"
                            >
                              Starts
                            </label>
                          </div>
                        </div>
                      </div>
                      <CheckBoxComponent
                        id="startToday"
                        name="startTimer"
                        checked={content.timerType.recurring.start.today}
                        label="Today"
                        onChange={(e) => {
                          updateRecurringTimerRadio('start','today',content,setContent)
                          // setContent({ ...content, starts: e.target.value })
                        }}
                      />
                      <CheckBoxComponent
                        id="startSpcf"
                        name="startTimer"
                        label="Specefic date"
                        checked={content.timerType.recurring.start.speceficDate}
                        onChange={(e) => {
                          updateRecurringTimerRadio('start','speceficDate',content,setContent)
                          // setContent({ ...content, starts: e.target.value })
                        }}
                      />
                      {content.timerType.recurring.start.speceficDate == true ?
                        <div className="Polaris-FormLayout__Item">
                          <div>
                            <div className="">
                              <div className="Polaris-Labelled__LabelWrapper">
                                <div className="Polaris-Label">
                                  <label
                                    id="startDateLabel"
                                    htmlFor="startDate"
                                    className="Polaris-Label__Text"
                                  >
                                    Start date
                                  </label>
                                </div>
                              </div>
                              <DatePickerExample
                                state1={content.timerType.recurring.start.date}
                                onChange={(e) => {
                                  updateRecurringTimer('start','date',e,content,setContent)
                                }}
                              />
                            </div>
                          </div>
                        </div> : ""}
                      <div className="Polaris-FormLayout__Item">
                        <div className="Polaris-Labelled__LabelWrapper">
                          <div className="Polaris-Label">
                            <label
                              id="startDateLabel"
                              htmlFor="startDate"
                              className="Polaris-Label__Text"
                            >
                              Ends
                            </label>
                          </div>
                        </div>
                      </div>
                      <CheckBoxComponent
                        id="endNever"
                        name="endTimer"
                        label="Never"
                        checked={content.timerType.recurring.end.never}
                        onChange={(e) => {
                          updateRecurringTimerRadio('end','never',content,setContent)
                          // setContent({ ...content, ends: e.target.value })
                        }}
                      />
                      <CheckBoxComponent
                        id="endSpcf"
                        name="endTimer"
                        label="Specefic date"
                        checked={content.timerType.recurring.end.speceficDate}
                        onChange={(e) => {
                          updateRecurringTimerRadio('end','speceficDate',content,setContent)
                          // setContent({ ...content, ends: e.target.value })
                          // console.log(content.timerStart)
                        }}
                      />
                      {content.timerType.recurring.end.speceficDate == true ?
                        <div className="Polaris-FormLayout__Item">
                          <div>
                            <div className="">
                              <div className="Polaris-Labelled__LabelWrapper">
                                <div className="Polaris-Label">
                                  <label
                                    id="endDateLabel"
                                    htmlFor="endDate"
                                    className="Polaris-Label__Text"
                                  >
                                    End date
                                  </label>
                                </div>
                              </div>
                              <DatePickerExample
                                state1={content.timerType.recurring.end.date}
                                onChange={(e) => {
                                  updateRecurringTimer('end','date',e,content,setContent)
                                }}
                              />
                            </div>
                          </div>
                        </div> : ""}
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className="Polaris-FormLayout pt-3">
                <div className="Polaris-FormLayout__Item">
                  <div className="">
                    <div className="Polaris-Labelled__LabelWrapper">
                      <div className="Polaris-Label">
                        <label
                          id="onceItEndsLabel"
                          htmlFor="onceItEnds"
                          className="Polaris-Label__Text"
                        >
                          Once it ends
                        </label>
                      </div>
                    </div>
                    <InputSelect
                      id="onceItEnds"
                      option={mysoptions()}
                      value={content.onceItEnd}
                      placeholder="Unpublish timer"
                      textValue = {content.customTitle}
                      textOnChange = {(e)=>{
                        setContent({
                          ...content,
                          customTitle:e
                        })
                      }}
                      onChange={(e) => {
                        setContent({
                          ...content,
                          onceItEnd: e.target.value,
                        })
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>




            <div className="Polaris-Card__Section">
              <NavLink to="/Top_BottomPage/Design_top">
                <button
                  className="Polaris-Button Polaris-Button--fullWidth"
                  type="button"
                >
                  <span className="Polaris-Button__Content">
                    <span className="Polaris-Button__Text">
                      Continue to Design
                    </span>
                  </span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col col-md-18" id="preview" ref={ref}>
          <TimerBagde_Top design={design} content={content} />
        </div>
      </div></>


    // <>
    //   {height >= 53 ?
    //     <div className="row px-5 py-3 " id="top-change">
    //       <div className="col col-md-4">
    //         <div className="Polaris-Card">
    //           <div className="Polaris-Card__Section">
    //             <div className="Polaris-FormLayout">
    //               <div className="Polaris-FormLayout__Item">
    //                 <div className="Polaris-Labelled__LabelWrapper">
    //                   <div className="Polaris-Label">
    //                     <label
    //                       id="nameLabel"
    //                       htmlFor="name"
    //                       className="Polaris-Label__Text"
    //                     >
    //                       Countdown name
    //                     </label>
    //                   </div>
    //                 </div>
    //                 <InputComponent
    //                   id="name"
    //                   type="text"
    //                   default={content.timerName}
    //                   onChange={(e) => {
    //                     setContent({ ...content, timerName: e.target.value })
    //                   }}
    //                 />

    //                 <div
    //                   className="Polaris-Labelled__HelpText"
    //                   id="nameHelpText"
    //                   style={{ marginLeft: '5px' }}
    //                 >
    //                   Only visible to you. For your own internal reference.
    //                 </div>
    //               </div>
    //               <div className="Polaris-FormLayout__Item">
    //                 <div className="Polaris-Labelled__LabelWrapper">
    //                   <div className="Polaris-Label">
    //                     <label
    //                       id="titleLabel"
    //                       htmlFor="title"
    //                       className="Polaris-Label__Text"
    //                     >
    //                       Title
    //                     </label>
    //                   </div>
    //                 </div>
    //                 <InputComponent
    //                   id="title"
    //                   type="text"
    //                   default={content.title}
    //                   onChange={(e) => {
    //                     setContent({ ...content, title: e.target.value })
    //                   }}
    //                 />
    //               </div>
    //               <div className="Polaris-FormLayout__Item">
    //                 <div className="Polaris-Labelled__LabelWrapper">
    //                   <div className="Polaris-Label">
    //                     <label
    //                       id="subheadingLabel"
    //                       htmlFor="subheading"
    //                       className="Polaris-Label__Text"
    //                     >
    //                       Subheading
    //                     </label>
    //                   </div>
    //                 </div>
    //                 <InputComponent
    //                   id="subheading"
    //                   type="text"
    //                   default={content.subHeading}
    //                   onChange={(e) => {
    //                     setContent({ ...content, subHeading: e.target.value })
    //                   }}
    //                 />
    //               </div>
    //               <div className="Polaris-FormLayout__Item">
    //                 <div className="Polaris-Labelled__LabelWrapper">
    //                   <div className="Polaris-Label">
    //                     <label
    //                       id="nameLabel"
    //                       htmlFor="name"
    //                       className="Polaris-Label__Text"
    //                     >
    //                       Call to action
    //                     </label>
    //                   </div>
    //                 </div>
    //                 <InputSelect
    //                   option={call_to_action}
    //                   placeholder="Button"
    //                   value={content.callToAction}
    //                   onChange={(e) => {
    //                     setContent({
    //                       ...content,
    //                       callToAction: e.target.value,
    //                     })
    //                   }}
    //                 />
    //               </div>
    //               {/* ******** */}
    //               {content.callToAction == 'No call to action' ? (
    //                 ''
    //               ) : content.callToAction == 'Button' ? (
    //                 <>
    //                   <div id="btnText-top" className="Polaris-FormLayout__Item">
    //                     <div className="Polaris-Labelled__LabelWrapper">
    //                       <div className="Polaris-Label">
    //                         <label
    //                           id="buttonText"
    //                           htmlFor="buttonText"
    //                           className="Polaris-Label__Text"
    //                         >
    //                           Button Text
    //                         </label>
    //                       </div>
    //                     </div>
    //                     <InputComponent
    //                       id="buttontext"
    //                       type="text"
    //                       default={content.buttonText}
    //                       onChange={(e) => {
    //                         setContent({ ...content, buttonText: e.target.value })
    //                       }}
    //                     />
    //                   </div>
    //                   <div id="linkText-top" className="Polaris-FormLayout__Item">
    //                     <div className="Polaris-Labelled__LabelWrapper">
    //                       <div className="Polaris-Label">
    //                         <label
    //                           id="subheadingLabel"
    //                           htmlFor="subheading"
    //                           className="Polaris-Label__Text"
    //                         >
    //                           Link
    //                         </label>
    //                       </div>
    //                     </div>
    //                     <InputComponent
    //                       id="link"
    //                       type="text"
    //                       default={content.link}
    //                       onChange={(e) => {
    //                         setContent({ ...content, link: e.target.value })
    //                       }}
    //                     />
    //                   </div>
    //                 </>
    //               ) : content.callToAction == 'Make entire bar clickable' ? (
    //                 <div id="linkText-top" className="Polaris-FormLayout__Item">
    //                   <div className="Polaris-Labelled__LabelWrapper">
    //                     <div className="Polaris-Label">
    //                       <label
    //                         id="subheadingLabel"
    //                         htmlFor="subheading"
    //                         className="Polaris-Label__Text"
    //                       >
    //                         Link
    //                       </label>
    //                     </div>
    //                   </div>
    //                   <InputComponent
    //                     id="link"
    //                     type="text"
    //                     default={content.link}
    //                     onChange={(e) => {
    //                       setContent({ ...content, link: e.target.value })
    //                     }}
    //                   />
    //                 </div>
    //               ) : (
    //                 ''
    //               )}

    //               <div className="Polaris-FormLayout__Item">
    //                 <CheckboxExample
    //                   label={'Close Icon'}
    //                   state1={content.closeIcon}
    //                   onChange={(e) => {
    //                     setContent((state) => {
    //                       return {
    //                         ...state,
    //                         closeIcon: e,
    //                       }
    //                     })
    //                     console.log(e)
    //                   }}
    //                 />
    //               </div>
    //               <div className="Polaris-FormLayout__Item">
    //                 <div className="sc-hKMtZM lgMwuC">
    //                   <div className="sc-eCYdqJ jQuyTy">
    //                     <div className="sc-jSMfEi hzQfHd">Timer labels</div>
    //                   </div>
    //                   <div className="d-flex justify-content-between">
    //                     <div className="Polaris-Connected w-24">
    //                       <InputComponent
    //                         id="legendCopyDays"
    //                         placeholder="Days"
    //                         default={content.days}
    //                         onChange={(e) => {
    //                           setContent({ ...content, days: e.target.value })
    //                         }}
    //                       />
    //                     </div>
    //                     <div className="Polaris-Connected w-24">
    //                       <InputComponent
    //                         id="legendCopyHours"
    //                         placeholder="Hours"
    //                         default={content.hrs}
    //                         onChange={(e) => {
    //                           setContent({ ...content, hrs: e.target.value })
    //                         }}
    //                       />
    //                     </div>
    //                     <div className="Polaris-Connected w-24">
    //                       <InputComponent
    //                         id="legendCopyMins"
    //                         placeholder="Mins"
    //                         default={content.mins}
    //                         onChange={(e) => {
    //                           setContent({ ...content, mins: e.target.value })
    //                         }}
    //                       />
    //                     </div>
    //                     <div className="Polaris-Connected w-24">
    //                       <InputComponent
    //                         id="legendCopySecs"
    //                         placeholder="Secs"
    //                         default={content.secs}
    //                         onChange={(e) => {
    //                           setContent({ ...content, secs: e.target.value })
    //                         }}
    //                       />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="Polaris-Card__Section">
    //             <div className="sc-bczRLJ czvMoD">
    //               <div className="Polaris-FormLayout">
    //                 <div>
    //                   <div className="Polaris-FormLayout__Item">
    //                     <span className="Polaris-TextStyle--variationStrong">
    //                       Timer Type
    //                     </span>
    //                   </div>
    //                   <CheckBoxComponent
    //                     id="toDate"
    //                     name="toDate"
    //                     label="Countdown to a date"
    //                     checked={content.timerType == 'toDate' ? true : null}
    //                     decription="Timer that ends at the specific date."
    //                     onChange={(e) => {
    //                       setContent({ ...content, timerType: e.target.value })
    //                     }}
    //                   />
    //                   <CheckBoxComponent
    //                     id="fixed"
    //                     name="toDate"
    //                     label="Fixed minutes"
    //                     checked={content.timerType == 'fixed' ? true : null}

    //                     decription="Individual fixed minutes countdown for each buyer session."
    //                     onChange={(e) => {
    //                       setContent({ ...content, timerType: e.target.value })
    //                     }}
    //                   />
    //                   <CheckBoxComponent
    //                     id="recurring"
    //                     name="toDate"
    //                     checked={content.timerType == 'recurring' ? true : null}
    //                     label="Daily recurring timer"
    //                     decription="E.g. every weekday from 9 am to 11 am"
    //                     onChange={(e) => {
    //                       setContent({ ...content, timerType: e.target.value })
    //                     }}
    //                   />
    //                 </div>
    //               </div>
    //             </div>

    //             <div className="sc-bczRLJ czvMoD pt-3">
    //               <div className="Polaris-FormLayout">
    //                 {content.timerType == 'toDate' ? (
    //                   content.timerStart == 'rightNow' ? (
    //                     <>
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div className="Polaris-Labelled__LabelWrapper">
    //                           <div className="Polaris-Label">
    //                             <label
    //                               id="startDateLabel"
    //                               htmlFor="startDate"
    //                               className="Polaris-Label__Text"
    //                             >
    //                               Timer Start
    //                             </label>
    //                           </div>
    //                         </div>
    //                       </div>
    //                       <CheckBoxComponent
    //                         id="rightNow"
    //                         name="timerStart"
    //                         checked={content.timerStart == 'rightNow' ? true : null}
    //                         label="Right now"
    //                         onChange={(e) => {
    //                           setContent({
    //                             ...content,
    //                             timerStart: e.target.value,
    //                           })
    //                         }}
    //                       />
    //                       <CheckBoxComponent
    //                         id="schedule"
    //                         name="timerStart"
    //                         checked={content.timerStart == 'schedule' ? true : null}
    //                         label="Schedule to start later"
    //                         onChange={(e) => {
    //                           setContent({
    //                             ...content,
    //                             timerStart: e.target.value,
    //                           })
    //                           // console.log(content.timerStart)
    //                         }}
    //                       />
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div>
    //                           <div className="">
    //                             <div className="Polaris-Labelled__LabelWrapper">
    //                               <div className="Polaris-Label">
    //                                 <label
    //                                   id="endDateLabel"
    //                                   htmlFor="endDate"
    //                                   className="Polaris-Label__Text"
    //                                 >
    //                                   End date
    //                                 </label>
    //                               </div>
    //                             </div>
    //                             <DatePickerExample
    //                               state1={content.endDate}
    //                               onChange={(e) => {
    //                                 setContent({
    //                                   ...content,
    //                                   endDate: e,
    //                                 })
    //                               }}
    //                             />
    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div
    //                         role="group"
    //                         className="Polaris-FormLayout--condensed"
    //                       >
    //                         <div className="Polaris-FormLayout__Items">
    //                           <div className="Polaris-FormLayout__Item">
    //                             <div className="">
    //                               <div className="Polaris-Labelled__LabelWrapper">
    //                                 <div className="Polaris-Label">
    //                                   <label
    //                                     id="hoursLabel"
    //                                     htmlFor="hours"
    //                                     className="Polaris-Label__Text"
    //                                   >
    //                                     Hours
    //                                   </label>
    //                                 </div>
    //                               </div>
    //                               <InputNumber
    //                                 id="hours"
    //                                 label="hoursLabel"
    //                                 defaultValue={content.endHrs}
    //                                 state1={content.endHrs}
    //                                 onChange={(e) => {
    //                                   setContent({
    //                                     ...content,
    //                                     endHrs: e,
    //                                   })
    //                                 }}
    //                               />
    //                             </div>
    //                           </div>
    //                           <div className="Polaris-FormLayout__Item">
    //                             <div className="">
    //                               <div className="Polaris-Labelled__LabelWrapper">
    //                                 <div className="Polaris-Label">
    //                                   <label
    //                                     id="minutesLabel"
    //                                     htmlFor="minutes"
    //                                     className="Polaris-Label__Text"
    //                                   >
    //                                     Minutes
    //                                   </label>
    //                                 </div>
    //                               </div>
    //                               <InputNumber
    //                                 id="minutes"
    //                                 label="minutesLabel"
    //                                 defaultValue={content.endMnt}
    //                                 state1={content.endMnt}
    //                                 onChange={(e) => {
    //                                   setContent({
    //                                     ...content,
    //                                     endMnt: e,
    //                                   })
    //                                 }}
    //                               />
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </>
    //                   ) : (
    //                     <>
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div className="Polaris-Labelled__LabelWrapper">
    //                           <div className="Polaris-Label">
    //                             <label
    //                               id="startDateLabel"
    //                               htmlFor="startDate"
    //                               className="Polaris-Label__Text"
    //                             >
    //                               Timer Start
    //                             </label>
    //                           </div>
    //                         </div>
    //                       </div>
    //                       <CheckBoxComponent
    //                         id="rightNow"
    //                         name="timerStart"
    //                         checked={content.timerStart == 'rightNow' ? true : null}
    //                         label="Right now"
    //                         onChange={(e) => {
    //                           setContent({
    //                             ...content,
    //                             timerStart: e.target.value,
    //                           })
    //                         }}
    //                       />
    //                       <CheckBoxComponent
    //                         id="schedule"
    //                         name="timerStart"
    //                         checked={content.timerStart == 'schedule' ? true : null}
    //                         label="Schedule to start later"
    //                         onChange={(e) => {
    //                           setContent({
    //                             ...content,
    //                             timerStart: e.target.value,
    //                           })
    //                           // console.log(content.timerStart)
    //                         }}
    //                       />
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div>
    //                           <div className="">
    //                             <div className="Polaris-Labelled__LabelWrapper">
    //                               <div className="Polaris-Label">
    //                                 <label
    //                                   id="startDateLabel"
    //                                   htmlFor="startDate"
    //                                   className="Polaris-Label__Text"
    //                                 >
    //                                   Start date
    //                                 </label>
    //                               </div>
    //                             </div>
    //                             <DatePickerExample
    //                               state1={content.startDate}
    //                               onChange={(e) => {
    //                                 setContent({
    //                                   ...content,
    //                                   startDate: e,
    //                                 })
    //                               }}
    //                             />
    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div
    //                         role="group"
    //                         className="Polaris-FormLayout--condensed"
    //                       >
    //                         <div className="Polaris-FormLayout__Items">
    //                           <div className="Polaris-FormLayout__Item">
    //                             <div className="">
    //                               <div className="Polaris-Labelled__LabelWrapper">
    //                                 <div className="Polaris-Label">
    //                                   <label
    //                                     id="hoursLabel"
    //                                     htmlFor="hours"
    //                                     className="Polaris-Label__Text"
    //                                   >
    //                                     Hours
    //                                   </label>
    //                                 </div>
    //                               </div>
    //                               <InputNumber
    //                                 id="hours"
    //                                 label="hoursLabel"
    //                                 defaultValue={content.startHrs}
    //                                 onChange={(e) => {
    //                                   setContent({
    //                                     ...content,
    //                                     startHrs: e,
    //                                   })
    //                                 }}
    //                               />
    //                             </div>
    //                           </div>
    //                           <div className="Polaris-FormLayout__Item">
    //                             <div className="">
    //                               <div className="Polaris-Labelled__LabelWrapper">
    //                                 <div className="Polaris-Label">
    //                                   <label
    //                                     id="minutesLabel"
    //                                     htmlFor="minutes"
    //                                     className="Polaris-Label__Text"
    //                                   >
    //                                     Minutes
    //                                   </label>
    //                                 </div>
    //                               </div>
    //                               <InputNumber
    //                                 id="minutes"
    //                                 label="minutesLabel"
    //                                 defaultValue={content.startMnt}
    //                                 onChange={(e) => {
    //                                   setContent({
    //                                     ...content,
    //                                     startMnt: e,
    //                                   })
    //                                 }}
    //                               />
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div>
    //                           <div className="">
    //                             <div className="Polaris-Labelled__LabelWrapper">
    //                               <div className="Polaris-Label">
    //                                 <label
    //                                   id="endDateLabel"
    //                                   htmlFor="endDate"
    //                                   className="Polaris-Label__Text"
    //                                 >
    //                                   End date
    //                                 </label>
    //                               </div>
    //                             </div>
    //                             <DatePickerExample
    //                               state1={content.endDate}
    //                               onChange={(e) => {
    //                                 setContent({
    //                                   ...content,
    //                                   endDate: e,
    //                                 })
    //                               }}
    //                             />
    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div
    //                         role="group"
    //                         className="Polaris-FormLayout--condensed"
    //                       >
    //                         <div className="Polaris-FormLayout__Items">
    //                           <div className="Polaris-FormLayout__Item">
    //                             <div className="">
    //                               <div className="Polaris-Labelled__LabelWrapper">
    //                                 <div className="Polaris-Label">
    //                                   <label
    //                                     id="hoursLabel"
    //                                     htmlFor="hours"
    //                                     className="Polaris-Label__Text"
    //                                   >
    //                                     Hours
    //                                   </label>
    //                                 </div>
    //                               </div>
    //                               <InputNumber
    //                                 id="hours"
    //                                 label="hoursLabel"
    //                                 defaultValue={content.endHrs}
    //                                 state1={content.endHrs}
    //                                 onChange={(e) => {
    //                                   setContent({
    //                                     ...content,
    //                                     endHrs: e,
    //                                   })
    //                                 }}
    //                               />
    //                             </div>
    //                           </div>
    //                           <div className="Polaris-FormLayout__Item">
    //                             <div className="">
    //                               <div className="Polaris-Labelled__LabelWrapper">
    //                                 <div className="Polaris-Label">
    //                                   <label
    //                                     id="minutesLabel"
    //                                     htmlFor="minutes"
    //                                     className="Polaris-Label__Text"
    //                                   >
    //                                     Minutes
    //                                   </label>
    //                                 </div>
    //                               </div>
    //                               <InputNumber
    //                                 id="minutes"
    //                                 label="minutesLabel"
    //                                 defaultValue={content.endMnt}
    //                                 state1={content.endMnt}
    //                                 onChange={(e) => {
    //                                   setContent({
    //                                     ...content,
    //                                     endMnt: e,
    //                                   })
    //                                 }}
    //                               />
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </>
    //                   )
    //                 ) : content.timerType == 'fixed' ? (
    //                   <div className="Polaris-FormLayout__Item">
    //                     <InputNumber
    //                       id="fixedMnt"
    //                       label="fixed"
    //                       defaultValue={content.fixedTime}
    //                       onChange={(e) => {
    //                         setContent({
    //                           ...content,
    //                           fixedTime: e,
    //                         })
    //                       }}
    //                     />
    //                   </div>
    //                 ) : content.timerType == 'recurring' ? (
    //                   <>
    //                     <div className="Polaris-FormLayout__Item">
    //                       <div className="Polaris-Labelled__LabelWrapper">
    //                         <div className="Polaris-Label">
    //                           <label
    //                             id="RepeatOn"
    //                             htmlFor="RepeatOn"
    //                             className="Polaris-Label__Text"
    //                           >
    //                             Repeat on
    //                           </label>
    //                         </div>
    //                       </div>
    //                       <ul class="Polaris-ChoiceList__Choices">
    //                         <li class="Polaris-ChoiceList__ChoiceItem">
    //                           <CheckboxExample
    //                             label={'Monday'}
    //                             state1={content.RepeatOn.monday}
    //                             onChange={(e) => {
    //                               setContent((state) => {
    //                                 return {
    //                                   ...state,
    //                                   RepeatOn: {
    //                                     ...content.RepeatOn,
    //                                     monday: e,
    //                                   },
    //                                 }
    //                               })
    //                               console.log(e)
    //                             }}
    //                           />
    //                         </li>
    //                         <li class="Polaris-ChoiceList__ChoiceItem">
    //                           <CheckboxExample
    //                             label={'Tuesday'}
    //                             state1={content.RepeatOn.tuesday}
    //                             onChange={(e) => {
    //                               setContent((state) => {
    //                                 return {
    //                                   ...state,
    //                                   RepeatOn: {
    //                                     ...content.RepeatOn,
    //                                     tuesday: e,
    //                                   },
    //                                 }
    //                               })
    //                               console.log(e)
    //                             }}
    //                           />
    //                         </li>
    //                         <li class="Polaris-ChoiceList__ChoiceItem">
    //                           <CheckboxExample
    //                             label={'Wednesday'}
    //                             state1={content.RepeatOn.wednesday}
    //                             onChange={(e) => {
    //                               setContent((state) => {
    //                                 return {
    //                                   ...state,
    //                                   RepeatOn: {
    //                                     ...content.RepeatOn,
    //                                     wednesday: e,
    //                                   },
    //                                 }
    //                               })
    //                               console.log(e)
    //                             }}
    //                           />
    //                         </li>
    //                         <li class="Polaris-ChoiceList__ChoiceItem">
    //                           <CheckboxExample
    //                             label={'Thursday'}
    //                             state1={content.RepeatOn.thursday}
    //                             onChange={(e) => {
    //                               setContent((state) => {
    //                                 return {
    //                                   ...state,
    //                                   RepeatOn: {
    //                                     ...content.RepeatOn,
    //                                     thursday: e,
    //                                   },
    //                                 }
    //                               })
    //                               console.log(e)
    //                             }}
    //                           />
    //                         </li>
    //                         <li class="Polaris-ChoiceList__ChoiceItem">
    //                           <CheckboxExample
    //                             label={'Friday'}
    //                             state1={content.RepeatOn.friday}
    //                             onChange={(e) => {
    //                               setContent((state) => {
    //                                 return {
    //                                   ...state,
    //                                   RepeatOn: {
    //                                     ...content.RepeatOn,
    //                                     friday: e,
    //                                   },
    //                                 }
    //                               })
    //                               console.log(e)
    //                             }}
    //                           />
    //                         </li>
    //                         <li class="Polaris-ChoiceList__ChoiceItem">
    //                           <CheckboxExample
    //                             label={'Saturday'}
    //                             state1={content.RepeatOn.saturday}
    //                             onChange={(e) => {
    //                               setContent((state) => {
    //                                 return {
    //                                   ...state,
    //                                   RepeatOn: {
    //                                     ...content.RepeatOn,
    //                                     saturday: e,
    //                                   },
    //                                 }
    //                               })
    //                               console.log(e)
    //                             }}
    //                           />
    //                         </li>
    //                         <li class="Polaris-ChoiceList__ChoiceItem">
    //                           <CheckboxExample
    //                             label={'Sunday'}
    //                             state1={content.RepeatOn.sunday}
    //                             onChange={(e) => {
    //                               setContent((state) => {
    //                                 return {
    //                                   ...state,
    //                                   RepeatOn: {
    //                                     ...content.RepeatOn,
    //                                     sunday: e,
    //                                   },
    //                                 }
    //                               })
    //                               console.log(e)
    //                             }}
    //                           />
    //                         </li>
    //                       </ul>
    //                     </div>
    //                     <div className="Polaris-FormLayout__Items">
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div className="Polaris-Labelled__LabelWrapper">
    //                           <div className="Polaris-Label">
    //                             <label
    //                               id="startDateLabel"
    //                               htmlFor="startDate"
    //                               className="Polaris-Label__Text"
    //                             >
    //                               Daily start timer
    //                             </label>
    //                           </div>
    //                         </div>
    //                         <InputNumber
    //                           id="hours"
    //                           label="hoursLabel"
    //                           defaultValue={content.dailyStartHrs}
    //                           onChange={(e) => {
    //                             setContent({
    //                               ...content,
    //                               dailyStartHrs: e,
    //                             })
    //                           }}
    //                         />
    //                         <div
    //                           class="Polaris-Labelled__HelpText"
    //                           id="minutesHelpText"
    //                         >
    //                           Hours
    //                         </div>
    //                       </div>
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div className="Polaris-Labelled__LabelWrapper">
    //                           <div className="Polaris-Label">
    //                             <label
    //                               id="startDateLabel"
    //                               htmlFor="startDate"
    //                               className="Polaris-Label__Text"
    //                             >
    //                               &nbsp;
    //                             </label>
    //                           </div>
    //                         </div>
    //                         <InputNumber
    //                           id="mnt"
    //                           label="mntLabel"
    //                           defaultValue={content.dailyStartMnt}
    //                           onChange={(e) => {
    //                             setContent({
    //                               ...content,
    //                               dailyStartMnt: e,
    //                             })
    //                           }}
    //                         />
    //                         <div
    //                           class="Polaris-Labelled__HelpText"
    //                           id="minutesHelpText"
    //                         >
    //                           Minutes
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="Polaris-FormLayout__Items">
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div className="Polaris-Labelled__LabelWrapper">
    //                           <div className="Polaris-Label">
    //                             <label
    //                               id="startDateLabel"
    //                               htmlFor="startDate"
    //                               className="Polaris-Label__Text"
    //                             >
    //                               Daily end timer
    //                             </label>
    //                           </div>
    //                         </div>
    //                         <InputNumber
    //                           id="hours"
    //                           label="hoursLabel"
    //                           defaultValue={content.dailyEndHrs}
    //                           onChange={(e) => {
    //                             setContent({
    //                               ...content,
    //                               dailyEndHrs: e,
    //                             })
    //                           }}
    //                         />
    //                         <div
    //                           class="Polaris-Labelled__HelpText"
    //                           id="minutesHelpText"
    //                         >
    //                           Hours
    //                         </div>
    //                       </div>
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div className="Polaris-Labelled__LabelWrapper">
    //                           <div className="Polaris-Label">
    //                             <label
    //                               id="startDateLabel"
    //                               htmlFor="startDate"
    //                               className="Polaris-Label__Text"
    //                             >
    //                               &nbsp;
    //                             </label>
    //                           </div>
    //                         </div>
    //                         <InputNumber
    //                           id="mnt"
    //                           label="mntLabel"
    //                           defaultValue={content.dailyEndMnt}
    //                           onChange={(e) => {
    //                             setContent({
    //                               ...content,
    //                               dailyEndMnt: e,
    //                             })
    //                           }}
    //                         />
    //                         <div
    //                           class="Polaris-Labelled__HelpText"
    //                           id="minutesHelpText"
    //                         >
    //                           Minutes
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="Polaris-FormLayout__Item">
    //                       <div className="Polaris-Labelled__LabelWrapper">
    //                         <div className="Polaris-Label">
    //                           <label
    //                             id="startDateLabel"
    //                             htmlFor="startDate"
    //                             className="Polaris-Label__Text"
    //                           >
    //                             Starts
    //                           </label>
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <CheckBoxComponent
    //                       id="startToday"
    //                       name="startTimer"
    //                       checked={true}
    //                       label="Today"
    //                       onChange={(e) => {
    //                         setContent({ ...content, starts: e.target.value })
    //                       }}
    //                     />
    //                     <CheckBoxComponent
    //                       id="startSpcf"
    //                       name="startTimer"
    //                       label="Specefic date"
    //                       onChange={(e) => {
    //                         setContent({ ...content, starts: e.target.value })
    //                       }}
    //                     />
    //                     <div className="Polaris-FormLayout__Item">
    //                       <div className="Polaris-Labelled__LabelWrapper">
    //                         <div className="Polaris-Label">
    //                           <label
    //                             id="startDateLabel"
    //                             htmlFor="startDate"
    //                             className="Polaris-Label__Text"
    //                           >
    //                             Ends
    //                           </label>
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <CheckBoxComponent
    //                       id="endNever"
    //                       name="endTimer"
    //                       label="Never"
    //                       checked={true}
    //                       onChange={(e) => {
    //                         setContent({ ...content, ends: e.target.value })
    //                       }}
    //                     />
    //                     <CheckBoxComponent
    //                       id="endSpcf"
    //                       name="endTimer"
    //                       label="Specefic date"
    //                       onChange={(e) => {
    //                         setContent({ ...content, ends: e.target.value })
    //                         // console.log(content.timerStart)
    //                       }}
    //                     />
    //                   </>
    //                 ) : (
    //                   ''
    //                 )}

    //               </div>
    //             </div>
    //             <div className="Polaris-FormLayout pt-3">
    //               <div className="Polaris-FormLayout__Item">
    //                 <div className="">
    //                   <div className="Polaris-Labelled__LabelWrapper">
    //                     <div className="Polaris-Label">
    //                       <label
    //                         id="onceItEndsLabel"
    //                         htmlFor="onceItEnds"
    //                         className="Polaris-Label__Text"
    //                       >
    //                         Once it ends
    //                       </label>
    //                     </div>
    //                   </div>
    //                   <InputSelect
    //                     id="onceItEnds"
    //                     option={myoption}
    //                     value={content.onceItEnd}
    //                     placeholder="Unpublish timer"
    //                     onChange={(e) => {
    //                       setContent({
    //                         ...content,
    //                         onceItEnd: e.target.value,
    //                       })
    //                     }}
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="Polaris-Card__Section">
    //             <NavLink to="/Top_BottomPage/Design_top">
    //               <button
    //                 className="Polaris-Button Polaris-Button--fullWidth"
    //                 type="button"
    //               >
    //                 <span className="Polaris-Button__Content">
    //                   <span className="Polaris-Button__Text">
    //                     Continue to Design
    //                   </span>
    //                 </span>
    //               </button>
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col col-md-18 extra-margin" id="preview" ref={ref}>
    //         <TimerBagde_Top design={design} content={content} />
    //       </div>
    //     </div>
    //     :
    //     <div className="row px-5 py-3 top-change " id="top-change">
    //       <div className="col col-md-4">
    //         <div className="Polaris-Card">
    //           <div className="Polaris-Card__Section">
    //             <div className="Polaris-FormLayout">
    //               <div className="Polaris-FormLayout__Item">
    //                 <div className="Polaris-Labelled__LabelWrapper">
    //                   <div className="Polaris-Label">
    //                     <label
    //                       id="nameLabel"
    //                       htmlFor="name"
    //                       className="Polaris-Label__Text"
    //                     >
    //                       Countdown name
    //                     </label>
    //                   </div>
    //                 </div>
    //                 <InputComponent
    //                   id="name"
    //                   type="text"
    //                   default={content.timerName}
    //                   onChange={(e) => {
    //                     setContent({ ...content, timerName: e.target.value })
    //                   }}
    //                 />

    //                 <div
    //                   className="Polaris-Labelled__HelpText"
    //                   id="nameHelpText"
    //                   style={{ marginLeft: '5px' }}
    //                 >
    //                   Only visible to you. For your own internal reference.
    //                 </div>
    //               </div>
    //               <div className="Polaris-FormLayout__Item">
    //                 <div className="Polaris-Labelled__LabelWrapper">
    //                   <div className="Polaris-Label">
    //                     <label
    //                       id="titleLabel"
    //                       htmlFor="title"
    //                       className="Polaris-Label__Text"
    //                     >
    //                       Title
    //                     </label>
    //                   </div>
    //                 </div>
    //                 <InputComponent
    //                   id="title"
    //                   type="text"
    //                   default={content.title}
    //                   onChange={(e) => {
    //                     setContent({ ...content, title: e.target.value })
    //                   }}
    //                 />
    //               </div>
    //               <div className="Polaris-FormLayout__Item">
    //                 <div className="Polaris-Labelled__LabelWrapper">
    //                   <div className="Polaris-Label">
    //                     <label
    //                       id="subheadingLabel"
    //                       htmlFor="subheading"
    //                       className="Polaris-Label__Text"
    //                     >
    //                       Subheading
    //                     </label>
    //                   </div>
    //                 </div>
    //                 <InputComponent
    //                   id="subheading"
    //                   type="text"
    //                   default={content.subHeading}
    //                   onChange={(e) => {
    //                     setContent({ ...content, subHeading: e.target.value })
    //                   }}
    //                 />
    //               </div>
    //               <div className="Polaris-FormLayout__Item">
    //                 <div className="Polaris-Labelled__LabelWrapper">
    //                   <div className="Polaris-Label">
    //                     <label
    //                       id="nameLabel"
    //                       htmlFor="name"
    //                       className="Polaris-Label__Text"
    //                     >
    //                       Call to action
    //                     </label>
    //                   </div>
    //                 </div>
    //                 <InputSelect
    //                   option={call_to_action}
    //                   placeholder="Button"
    //                   value={content.callToAction}
    //                   onChange={(e) => {
    //                     setContent({
    //                       ...content,
    //                       callToAction: e.target.value,
    //                     })
    //                   }}
    //                 />
    //               </div>
    //               {/* ******** */}
    //               {content.callToAction == 'No call to action' ? (
    //                 ''
    //               ) : content.callToAction == 'Button' ? (
    //                 <>
    //                   <div id="btnText-top" className="Polaris-FormLayout__Item">
    //                     <div className="Polaris-Labelled__LabelWrapper">
    //                       <div className="Polaris-Label">
    //                         <label
    //                           id="buttonText"
    //                           htmlFor="buttonText"
    //                           className="Polaris-Label__Text"
    //                         >
    //                           Button Text
    //                         </label>
    //                       </div>
    //                     </div>
    //                     <InputComponent
    //                       id="buttontext"
    //                       type="text"
    //                       default={content.buttonText}
    //                       onChange={(e) => {
    //                         setContent({ ...content, buttonText: e.target.value })
    //                       }}
    //                     />
    //                   </div>
    //                   <div id="linkText-top" className="Polaris-FormLayout__Item">
    //                     <div className="Polaris-Labelled__LabelWrapper">
    //                       <div className="Polaris-Label">
    //                         <label
    //                           id="subheadingLabel"
    //                           htmlFor="subheading"
    //                           className="Polaris-Label__Text"
    //                         >
    //                           Link
    //                         </label>
    //                       </div>
    //                     </div>
    //                     <InputComponent
    //                       id="link"
    //                       type="text"
    //                       default={content.link}
    //                       onChange={(e) => {
    //                         setContent({ ...content, link: e.target.value })
    //                       }}
    //                     />
    //                   </div>
    //                 </>
    //               ) : content.callToAction == 'Make entire bar clickable' ? (
    //                 <div id="linkText-top" className="Polaris-FormLayout__Item">
    //                   <div className="Polaris-Labelled__LabelWrapper">
    //                     <div className="Polaris-Label">
    //                       <label
    //                         id="subheadingLabel"
    //                         htmlFor="subheading"
    //                         className="Polaris-Label__Text"
    //                       >
    //                         Link
    //                       </label>
    //                     </div>
    //                   </div>
    //                   <InputComponent
    //                     id="link"
    //                     type="text"
    //                     default={content.link}
    //                     onChange={(e) => {
    //                       setContent({ ...content, link: e.target.value })
    //                     }}
    //                   />
    //                 </div>
    //               ) : (
    //                 ''
    //               )}

    //               <div className="Polaris-FormLayout__Item">
    //                 <CheckboxExample
    //                   label={'Close Icon'}
    //                   state1={content.closeIcon}
    //                   onChange={(e) => {
    //                     setContent((state) => {
    //                       return {
    //                         ...state,
    //                         closeIcon: e,
    //                       }
    //                     })
    //                     console.log(e)
    //                   }}
    //                 />
    //               </div>
    //               <div className="Polaris-FormLayout__Item">
    //                 <div className="sc-hKMtZM lgMwuC">
    //                   <div className="sc-eCYdqJ jQuyTy">
    //                     <div className="sc-jSMfEi hzQfHd">Timer labels</div>
    //                   </div>
    //                   <div className="d-flex justify-content-between">
    //                     <div className="Polaris-Connected w-24">
    //                       <InputComponent
    //                         id="legendCopyDays"
    //                         placeholder="Days"
    //                         default={content.days}
    //                         onChange={(e) => {
    //                           setContent({ ...content, days: e.target.value })
    //                         }}
    //                       />
    //                     </div>
    //                     <div className="Polaris-Connected w-24">
    //                       <InputComponent
    //                         id="legendCopyHours"
    //                         placeholder="Hours"
    //                         default={content.hrs}
    //                         onChange={(e) => {
    //                           setContent({ ...content, hrs: e.target.value })
    //                         }}
    //                       />
    //                     </div>
    //                     <div className="Polaris-Connected w-24">
    //                       <InputComponent
    //                         id="legendCopyMins"
    //                         placeholder="Mins"
    //                         default={content.mins}
    //                         onChange={(e) => {
    //                           setContent({ ...content, mins: e.target.value })
    //                         }}
    //                       />
    //                     </div>
    //                     <div className="Polaris-Connected w-24">
    //                       <InputComponent
    //                         id="legendCopySecs"
    //                         placeholder="Secs"
    //                         default={content.secs}
    //                         onChange={(e) => {
    //                           setContent({ ...content, secs: e.target.value })
    //                         }}
    //                       />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="Polaris-Card__Section">
    //             <div className="sc-bczRLJ czvMoD">
    //               <div className="Polaris-FormLayout">
    //                 <div>
    //                   <div className="Polaris-FormLayout__Item">
    //                     <span className="Polaris-TextStyle--variationStrong">
    //                       Timer Type
    //                     </span>
    //                   </div>
    //                   <CheckBoxComponent
    //                     id="toDate"
    //                     name="toDate"
    //                     label="Countdown to a date"
    //                     checked={content.timerType == 'toDate' ? true : null}
    //                     decription="Timer that ends at the specific date."
    //                     onChange={(e) => {
    //                       setContent({ ...content, timerType: e.target.value })
    //                     }}
    //                   />
    //                   <CheckBoxComponent
    //                     id="fixed"
    //                     name="toDate"
    //                     label="Fixed minutes"
    //                     checked={content.timerType == 'fixed' ? true : null}

    //                     decription="Individual fixed minutes countdown for each buyer session."
    //                     onChange={(e) => {
    //                       setContent({ ...content, timerType: e.target.value })
    //                     }}
    //                   />
    //                   <CheckBoxComponent
    //                     id="recurring"
    //                     name="toDate"
    //                     checked={content.timerType == 'recurring' ? true : null}
    //                     label="Daily recurring timer"
    //                     decription="E.g. every weekday from 9 am to 11 am"
    //                     onChange={(e) => {
    //                       setContent({ ...content, timerType: e.target.value })
    //                     }}
    //                   />
    //                 </div>
    //               </div>
    //             </div>

    //             <div className="sc-bczRLJ czvMoD pt-3">
    //               <div className="Polaris-FormLayout">
    //                 {content.timerType == 'toDate' ? (
    //                   content.timerStart == 'rightNow' ? (
    //                     <>
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div className="Polaris-Labelled__LabelWrapper">
    //                           <div className="Polaris-Label">
    //                             <label
    //                               id="startDateLabel"
    //                               htmlFor="startDate"
    //                               className="Polaris-Label__Text"
    //                             >
    //                               Timer Start
    //                             </label>
    //                           </div>
    //                         </div>
    //                       </div>
    //                       <CheckBoxComponent
    //                         id="rightNow"
    //                         name="timerStart"
    //                         checked={content.timerStart == 'rightNow' ? true : null}
    //                         label="Right now"
    //                         onChange={(e) => {
    //                           setContent({
    //                             ...content,
    //                             timerStart: e.target.value,
    //                           })
    //                         }}
    //                       />
    //                       <CheckBoxComponent
    //                         id="schedule"
    //                         name="timerStart"
    //                         checked={content.timerStart == 'schedule' ? true : null}
    //                         label="Schedule to start later"
    //                         onChange={(e) => {
    //                           setContent({
    //                             ...content,
    //                             timerStart: e.target.value,
    //                           })
    //                           // console.log(content.timerStart)
    //                         }}
    //                       />
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div>
    //                           <div className="">
    //                             <div className="Polaris-Labelled__LabelWrapper">
    //                               <div className="Polaris-Label">
    //                                 <label
    //                                   id="endDateLabel"
    //                                   htmlFor="endDate"
    //                                   className="Polaris-Label__Text"
    //                                 >
    //                                   End date
    //                                 </label>
    //                               </div>
    //                             </div>
    //                             <DatePickerExample
    //                               state1={content.endDate}
    //                               onChange={(e) => {
    //                                 setContent({
    //                                   ...content,
    //                                   endDate: e,
    //                                 })
    //                               }}
    //                             />
    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div
    //                         role="group"
    //                         className="Polaris-FormLayout--condensed"
    //                       >
    //                         <div className="Polaris-FormLayout__Items">
    //                           <div className="Polaris-FormLayout__Item">
    //                             <div className="">
    //                               <div className="Polaris-Labelled__LabelWrapper">
    //                                 <div className="Polaris-Label">
    //                                   <label
    //                                     id="hoursLabel"
    //                                     htmlFor="hours"
    //                                     className="Polaris-Label__Text"
    //                                   >
    //                                     Hours
    //                                   </label>
    //                                 </div>
    //                               </div>
    //                               <InputNumber
    //                                 id="hours"
    //                                 label="hoursLabel"
    //                                 defaultValue={content.endHrs}
    //                                 state1={content.endHrs}
    //                                 onChange={(e) => {
    //                                   setContent({
    //                                     ...content,
    //                                     endHrs: e,
    //                                   })
    //                                 }}
    //                               />
    //                             </div>
    //                           </div>
    //                           <div className="Polaris-FormLayout__Item">
    //                             <div className="">
    //                               <div className="Polaris-Labelled__LabelWrapper">
    //                                 <div className="Polaris-Label">
    //                                   <label
    //                                     id="minutesLabel"
    //                                     htmlFor="minutes"
    //                                     className="Polaris-Label__Text"
    //                                   >
    //                                     Minutes
    //                                   </label>
    //                                 </div>
    //                               </div>
    //                               <InputNumber
    //                                 id="minutes"
    //                                 label="minutesLabel"
    //                                 defaultValue={content.endMnt}
    //                                 state1={content.endMnt}
    //                                 onChange={(e) => {
    //                                   setContent({
    //                                     ...content,
    //                                     endMnt: e,
    //                                   })
    //                                 }}
    //                               />
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </>
    //                   ) : (
    //                     <>
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div className="Polaris-Labelled__LabelWrapper">
    //                           <div className="Polaris-Label">
    //                             <label
    //                               id="startDateLabel"
    //                               htmlFor="startDate"
    //                               className="Polaris-Label__Text"
    //                             >
    //                               Timer Start
    //                             </label>
    //                           </div>
    //                         </div>
    //                       </div>
    //                       <CheckBoxComponent
    //                         id="rightNow"
    //                         name="timerStart"
    //                         checked={content.timerStart == 'rightNow' ? true : null}
    //                         label="Right now"
    //                         onChange={(e) => {
    //                           setContent({
    //                             ...content,
    //                             timerStart: e.target.value,
    //                           })
    //                         }}
    //                       />
    //                       <CheckBoxComponent
    //                         id="schedule"
    //                         name="timerStart"
    //                         checked={content.timerStart == 'schedule' ? true : null}
    //                         label="Schedule to start later"
    //                         onChange={(e) => {
    //                           setContent({
    //                             ...content,
    //                             timerStart: e.target.value,
    //                           })
    //                           // console.log(content.timerStart)
    //                         }}
    //                       />
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div>
    //                           <div className="">
    //                             <div className="Polaris-Labelled__LabelWrapper">
    //                               <div className="Polaris-Label">
    //                                 <label
    //                                   id="startDateLabel"
    //                                   htmlFor="startDate"
    //                                   className="Polaris-Label__Text"
    //                                 >
    //                                   Start date
    //                                 </label>
    //                               </div>
    //                             </div>
    //                             <DatePickerExample
    //                               state1={content.startDate}
    //                               onChange={(e) => {
    //                                 setContent({
    //                                   ...content,
    //                                   startDate: e,
    //                                 })
    //                               }}
    //                             />
    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div
    //                         role="group"
    //                         className="Polaris-FormLayout--condensed"
    //                       >
    //                         <div className="Polaris-FormLayout__Items">
    //                           <div className="Polaris-FormLayout__Item">
    //                             <div className="">
    //                               <div className="Polaris-Labelled__LabelWrapper">
    //                                 <div className="Polaris-Label">
    //                                   <label
    //                                     id="hoursLabel"
    //                                     htmlFor="hours"
    //                                     className="Polaris-Label__Text"
    //                                   >
    //                                     Hours
    //                                   </label>
    //                                 </div>
    //                               </div>
    //                               <InputNumber
    //                                 id="hours"
    //                                 label="hoursLabel"
    //                                 defaultValue={content.startHrs}
    //                                 onChange={(e) => {
    //                                   setContent({
    //                                     ...content,
    //                                     startHrs: e,
    //                                   })
    //                                 }}
    //                               />
    //                             </div>
    //                           </div>
    //                           <div className="Polaris-FormLayout__Item">
    //                             <div className="">
    //                               <div className="Polaris-Labelled__LabelWrapper">
    //                                 <div className="Polaris-Label">
    //                                   <label
    //                                     id="minutesLabel"
    //                                     htmlFor="minutes"
    //                                     className="Polaris-Label__Text"
    //                                   >
    //                                     Minutes
    //                                   </label>
    //                                 </div>
    //                               </div>
    //                               <InputNumber
    //                                 id="minutes"
    //                                 label="minutesLabel"
    //                                 defaultValue={content.startMnt}
    //                                 onChange={(e) => {
    //                                   setContent({
    //                                     ...content,
    //                                     startMnt: e,
    //                                   })
    //                                 }}
    //                               />
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div>
    //                           <div className="">
    //                             <div className="Polaris-Labelled__LabelWrapper">
    //                               <div className="Polaris-Label">
    //                                 <label
    //                                   id="endDateLabel"
    //                                   htmlFor="endDate"
    //                                   className="Polaris-Label__Text"
    //                                 >
    //                                   End date
    //                                 </label>
    //                               </div>
    //                             </div>
    //                             <DatePickerExample
    //                               state1={content.endDate}
    //                               onChange={(e) => {
    //                                 setContent({
    //                                   ...content,
    //                                   endDate: e,
    //                                 })
    //                               }}
    //                             />
    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div
    //                         role="group"
    //                         className="Polaris-FormLayout--condensed"
    //                       >
    //                         <div className="Polaris-FormLayout__Items">
    //                           <div className="Polaris-FormLayout__Item">
    //                             <div className="">
    //                               <div className="Polaris-Labelled__LabelWrapper">
    //                                 <div className="Polaris-Label">
    //                                   <label
    //                                     id="hoursLabel"
    //                                     htmlFor="hours"
    //                                     className="Polaris-Label__Text"
    //                                   >
    //                                     Hours
    //                                   </label>
    //                                 </div>
    //                               </div>
    //                               <InputNumber
    //                                 id="hours"
    //                                 label="hoursLabel"
    //                                 defaultValue={content.endHrs}
    //                                 state1={content.endHrs}
    //                                 onChange={(e) => {
    //                                   setContent({
    //                                     ...content,
    //                                     endHrs: e,
    //                                   })
    //                                 }}
    //                               />
    //                             </div>
    //                           </div>
    //                           <div className="Polaris-FormLayout__Item">
    //                             <div className="">
    //                               <div className="Polaris-Labelled__LabelWrapper">
    //                                 <div className="Polaris-Label">
    //                                   <label
    //                                     id="minutesLabel"
    //                                     htmlFor="minutes"
    //                                     className="Polaris-Label__Text"
    //                                   >
    //                                     Minutes
    //                                   </label>
    //                                 </div>
    //                               </div>
    //                               <InputNumber
    //                                 id="minutes"
    //                                 label="minutesLabel"
    //                                 defaultValue={content.endMnt}
    //                                 state1={content.endMnt}
    //                                 onChange={(e) => {
    //                                   setContent({
    //                                     ...content,
    //                                     endMnt: e,
    //                                   })
    //                                 }}
    //                               />
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </>
    //                   )
    //                 ) : content.timerType == 'fixed' ? (
    //                   <div className="Polaris-FormLayout__Item">
    //                     <InputNumber
    //                       id="fixedMnt"
    //                       label="fixed"
    //                       defaultValue={content.fixedTime}
    //                       onChange={(e) => {
    //                         setContent({
    //                           ...content,
    //                           fixedTime: e,
    //                         })
    //                       }}
    //                     />
    //                   </div>
    //                 ) : content.timerType == 'recurring' ? (
    //                   <>
    //                     <div className="Polaris-FormLayout__Item">
    //                       <div className="Polaris-Labelled__LabelWrapper">
    //                         <div className="Polaris-Label">
    //                           <label
    //                             id="RepeatOn"
    //                             htmlFor="RepeatOn"
    //                             className="Polaris-Label__Text"
    //                           >
    //                             Repeat on
    //                           </label>
    //                         </div>
    //                       </div>
    //                       <ul class="Polaris-ChoiceList__Choices">
    //                         <li class="Polaris-ChoiceList__ChoiceItem">
    //                           <CheckboxExample
    //                             label={'Monday'}
    //                             state1={content.RepeatOn.monday}
    //                             onChange={(e) => {
    //                               setContent((state) => {
    //                                 return {
    //                                   ...state,
    //                                   RepeatOn: {
    //                                     ...content.RepeatOn,
    //                                     monday: e,
    //                                   },
    //                                 }
    //                               })
    //                               console.log(e)
    //                             }}
    //                           />
    //                         </li>
    //                         <li class="Polaris-ChoiceList__ChoiceItem">
    //                           <CheckboxExample
    //                             label={'Tuesday'}
    //                             state1={content.RepeatOn.tuesday}
    //                             onChange={(e) => {
    //                               setContent((state) => {
    //                                 return {
    //                                   ...state,
    //                                   RepeatOn: {
    //                                     ...content.RepeatOn,
    //                                     tuesday: e,
    //                                   },
    //                                 }
    //                               })
    //                               console.log(e)
    //                             }}
    //                           />
    //                         </li>
    //                         <li class="Polaris-ChoiceList__ChoiceItem">
    //                           <CheckboxExample
    //                             label={'Wednesday'}
    //                             state1={content.RepeatOn.wednesday}
    //                             onChange={(e) => {
    //                               setContent((state) => {
    //                                 return {
    //                                   ...state,
    //                                   RepeatOn: {
    //                                     ...content.RepeatOn,
    //                                     wednesday: e,
    //                                   },
    //                                 }
    //                               })
    //                               console.log(e)
    //                             }}
    //                           />
    //                         </li>
    //                         <li class="Polaris-ChoiceList__ChoiceItem">
    //                           <CheckboxExample
    //                             label={'Thursday'}
    //                             state1={content.RepeatOn.thursday}
    //                             onChange={(e) => {
    //                               setContent((state) => {
    //                                 return {
    //                                   ...state,
    //                                   RepeatOn: {
    //                                     ...content.RepeatOn,
    //                                     thursday: e,
    //                                   },
    //                                 }
    //                               })
    //                               console.log(e)
    //                             }}
    //                           />
    //                         </li>
    //                         <li class="Polaris-ChoiceList__ChoiceItem">
    //                           <CheckboxExample
    //                             label={'Friday'}
    //                             state1={content.RepeatOn.friday}
    //                             onChange={(e) => {
    //                               setContent((state) => {
    //                                 return {
    //                                   ...state,
    //                                   RepeatOn: {
    //                                     ...content.RepeatOn,
    //                                     friday: e,
    //                                   },
    //                                 }
    //                               })
    //                               console.log(e)
    //                             }}
    //                           />
    //                         </li>
    //                         <li class="Polaris-ChoiceList__ChoiceItem">
    //                           <CheckboxExample
    //                             label={'Saturday'}
    //                             state1={content.RepeatOn.saturday}
    //                             onChange={(e) => {
    //                               setContent((state) => {
    //                                 return {
    //                                   ...state,
    //                                   RepeatOn: {
    //                                     ...content.RepeatOn,
    //                                     saturday: e,
    //                                   },
    //                                 }
    //                               })
    //                               console.log(e)
    //                             }}
    //                           />
    //                         </li>
    //                         <li class="Polaris-ChoiceList__ChoiceItem">
    //                           <CheckboxExample
    //                             label={'Sunday'}
    //                             state1={content.RepeatOn.sunday}
    //                             onChange={(e) => {
    //                               setContent((state) => {
    //                                 return {
    //                                   ...state,
    //                                   RepeatOn: {
    //                                     ...content.RepeatOn,
    //                                     sunday: e,
    //                                   },
    //                                 }
    //                               })
    //                               console.log(e)
    //                             }}
    //                           />
    //                         </li>
    //                       </ul>
    //                     </div>
    //                     <div className="Polaris-FormLayout__Items">
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div className="Polaris-Labelled__LabelWrapper">
    //                           <div className="Polaris-Label">
    //                             <label
    //                               id="startDateLabel"
    //                               htmlFor="startDate"
    //                               className="Polaris-Label__Text"
    //                             >
    //                               Daily start timer
    //                             </label>
    //                           </div>
    //                         </div>
    //                         <InputNumber
    //                           id="hours"
    //                           label="hoursLabel"
    //                           defaultValue={content.dailyStartHrs}
    //                           onChange={(e) => {
    //                             setContent({
    //                               ...content,
    //                               dailyStartHrs: e,
    //                             })
    //                           }}
    //                         />
    //                         <div
    //                           class="Polaris-Labelled__HelpText"
    //                           id="minutesHelpText"
    //                         >
    //                           Hours
    //                         </div>
    //                       </div>
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div className="Polaris-Labelled__LabelWrapper">
    //                           <div className="Polaris-Label">
    //                             <label
    //                               id="startDateLabel"
    //                               htmlFor="startDate"
    //                               className="Polaris-Label__Text"
    //                             >
    //                               &nbsp;
    //                             </label>
    //                           </div>
    //                         </div>
    //                         <InputNumber
    //                           id="mnt"
    //                           label="mntLabel"
    //                           defaultValue={content.dailyStartMnt}
    //                           onChange={(e) => {
    //                             setContent({
    //                               ...content,
    //                               dailyStartMnt: e,
    //                             })
    //                           }}
    //                         />
    //                         <div
    //                           class="Polaris-Labelled__HelpText"
    //                           id="minutesHelpText"
    //                         >
    //                           Minutes
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="Polaris-FormLayout__Items">
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div className="Polaris-Labelled__LabelWrapper">
    //                           <div className="Polaris-Label">
    //                             <label
    //                               id="startDateLabel"
    //                               htmlFor="startDate"
    //                               className="Polaris-Label__Text"
    //                             >
    //                               Daily end timer
    //                             </label>
    //                           </div>
    //                         </div>
    //                         <InputNumber
    //                           id="hours"
    //                           label="hoursLabel"
    //                           defaultValue={content.dailyEndHrs}
    //                           onChange={(e) => {
    //                             setContent({
    //                               ...content,
    //                               dailyEndHrs: e,
    //                             })
    //                           }}
    //                         />
    //                         <div
    //                           class="Polaris-Labelled__HelpText"
    //                           id="minutesHelpText"
    //                         >
    //                           Hours
    //                         </div>
    //                       </div>
    //                       <div className="Polaris-FormLayout__Item">
    //                         <div className="Polaris-Labelled__LabelWrapper">
    //                           <div className="Polaris-Label">
    //                             <label
    //                               id="startDateLabel"
    //                               htmlFor="startDate"
    //                               className="Polaris-Label__Text"
    //                             >
    //                               &nbsp;
    //                             </label>
    //                           </div>
    //                         </div>
    //                         <InputNumber
    //                           id="mnt"
    //                           label="mntLabel"
    //                           defaultValue={content.dailyEndMnt}
    //                           onChange={(e) => {
    //                             setContent({
    //                               ...content,
    //                               dailyEndMnt: e,
    //                             })
    //                           }}
    //                         />
    //                         <div
    //                           class="Polaris-Labelled__HelpText"
    //                           id="minutesHelpText"
    //                         >
    //                           Minutes
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="Polaris-FormLayout__Item">
    //                       <div className="Polaris-Labelled__LabelWrapper">
    //                         <div className="Polaris-Label">
    //                           <label
    //                             id="startDateLabel"
    //                             htmlFor="startDate"
    //                             className="Polaris-Label__Text"
    //                           >
    //                             Starts
    //                           </label>
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <CheckBoxComponent
    //                       id="startToday"
    //                       name="startTimer"
    //                       checked={true}
    //                       label="Today"
    //                       onChange={(e) => {
    //                         setContent({ ...content, starts: e.target.value })
    //                       }}
    //                     />
    //                     <CheckBoxComponent
    //                       id="startSpcf"
    //                       name="startTimer"
    //                       label="Specefic date"
    //                       onChange={(e) => {
    //                         setContent({ ...content, starts: e.target.value })
    //                       }}
    //                     />
    //                     <div className="Polaris-FormLayout__Item">
    //                       <div className="Polaris-Labelled__LabelWrapper">
    //                         <div className="Polaris-Label">
    //                           <label
    //                             id="startDateLabel"
    //                             htmlFor="startDate"
    //                             className="Polaris-Label__Text"
    //                           >
    //                             Ends
    //                           </label>
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <CheckBoxComponent
    //                       id="endNever"
    //                       name="endTimer"
    //                       label="Never"
    //                       checked={true}
    //                       onChange={(e) => {
    //                         setContent({ ...content, ends: e.target.value })
    //                       }}
    //                     />
    //                     <CheckBoxComponent
    //                       id="endSpcf"
    //                       name="endTimer"
    //                       label="Specefic date"
    //                       onChange={(e) => {
    //                         setContent({ ...content, ends: e.target.value })
    //                         // console.log(content.timerStart)
    //                       }}
    //                     />
    //                   </>
    //                 ) : (
    //                   ''
    //                 )}

    //               </div>
    //             </div>
    //             <div className="Polaris-FormLayout pt-3">
    //               <div className="Polaris-FormLayout__Item">
    //                 <div className="">
    //                   <div className="Polaris-Labelled__LabelWrapper">
    //                     <div className="Polaris-Label">
    //                       <label
    //                         id="onceItEndsLabel"
    //                         htmlFor="onceItEnds"
    //                         className="Polaris-Label__Text"
    //                       >
    //                         Once it ends
    //                       </label>
    //                     </div>
    //                   </div>
    //                   <InputSelect
    //                     id="onceItEnds"
    //                     option={myoption}
    //                     value={content.onceItEnd}
    //                     placeholder="Unpublish timer"
    //                     onChange={(e) => {
    //                       setContent({
    //                         ...content,
    //                         onceItEnd: e.target.value,
    //                       })
    //                     }}
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="Polaris-Card__Section">
    //             <NavLink to="/Top_BottomPage/Design_top">
    //               <button
    //                 className="Polaris-Button Polaris-Button--fullWidth"
    //                 type="button"
    //               >
    //                 <span className="Polaris-Button__Content">
    //                   <span className="Polaris-Button__Text">
    //                     Continue to Design
    //                   </span>
    //                 </span>
    //               </button>
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col col-md-18" id="preview" ref={ref}>
    //         <TimerBagde_Top design={design} content={content} />
    //       </div>
    //     </div>}

    // </>
  )
}

export default Content
