import React, { useContext, useRef, useState } from 'react'
import CheckBoxComponent from '../Fields/CheckBoxComponent'
import InputComponent from '../Fields/InputComponent'
import DateInput from '../Fields/DateInput'
import InputNumber from '../Fields/InputNumber'
import InputSelect from '../Fields/InputSelect'
import { ProductPage } from './ProductPage'
import TImer from '../TImer'
import DatePickerExample from '../Fields/DatePickerInput'
import CheckboxExample from '../Fields/CheckBoxSqaure'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext'
import { useEffect } from 'react'
import Timerbadge from './Timerbadge'
import { connect } from 'mongoose'
import {updateState,updateCountDownTimer,updateCountDownTimerDates,repeatOn,updateRecurringTimer,updateRecurringTimerRadio} from '../common_functions/functions'

function Content() {
  const { design, content, setContent, Html, setHtml } = useContext(ProductContext)
  const [timerType,timerState] = useState(content.timerType)
  
  const ref = useRef()
  // console.log(ref.current.innerHTML)
  setTimeout(() => {
    setHtml(ref.current.innerHTML)
  }, 100);

  const myoption = [
    {
      data: 'Unpublish timer',
      value: 'Unpublish timer',
    },
    {
      data: 'Show custom title',
      value: 'Show custom title',
    },
    {
      data: 'Do nothing',
      value: 'Do nothing',
    },
  ]

  return (
    <>
      <div className="row px-4 py-3">
        <div className="col col-md-7">
          <div className="Polaris-Card" style={{ maxWidth: '360px' }}>
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
                    default={content.productTimer}
                    onChange={(e) => {
                      setContent({
                        ...content,
                        productTimer: e.target.value,
                      })
                    }}
                  />
                  <div className="Polaris-Labelled__HelpText" id="nameHelpText">
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
                    default={content.productTitle}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        productTitle: e.target.value,
                      })
                    }
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
                    default={content.productSubheading}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        productSubheading: e.target.value,
                      })
                    }
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
                          default={content.productDays}
                          onChange={(e) =>
                            setContent({
                              ...content,
                              productDays: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="Polaris-Connected w-24">
                        <InputComponent
                          id="legendCopyHours"
                          placeholder="Hours"
                          default={content.productHrs}
                          onChange={(e) =>
                            setContent({
                              ...content,
                              productHrs: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="Polaris-Connected w-24">
                        <InputComponent
                          id="legendCopyMins"
                          placeholder="Mins"
                          default={content.productMin}
                          onChange={(e) =>
                            setContent({
                              ...content,
                              productMin: e.target.value,
                            })
                          }
                        ></InputComponent>
                      </div>
                      <div className="Polaris-Connected w-24">
                        <InputComponent
                          id="legendCopySecs"
                          placeholder="Secs"
                          default={content.productSec}
                          onChange={(e) =>
                            setContent({
                              ...content,
                              productSec: e.target.value,
                            })
                          }
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
                                // setContent((state) => {
                                //   return {
                                //     ...state,
                                //     RepeatOn: {
                                //       ...content.RepeatOn,
                                //       monday: e,
                                //     },
                                //   }
                                // })
                                console.log(e)
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
                                  // setContent({
                                  //   ...content,
                                  //   selectedEndDates: e,
                                  // })
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
                      option={myoption}
                      value={content.onceItEnd}
                      placeholder="Unpublish timer"
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
              <NavLink to="/ProductPage/Design">
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

        <div className="col col-md-5" id='productTimer' ref={ref}>
          <div

            // className="product-page-wrapper"

            style={{ position: 'sticky', top: '20px' }}
          >
            <Timerbadge design={design} content={content} />

          </div>
        </div>
      </div>
    </>
  )
}

export default Content
