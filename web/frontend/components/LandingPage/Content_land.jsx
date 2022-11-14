import React, { useContext } from 'react'
import CheckBoxComponent from '../Fields/CheckBoxComponent'
import InputComponent from '../Fields/InputComponent'
import InputNumber from '../Fields/InputNumber'
import InputSelect from '../Fields/InputSelect'
import DatePickerExample from '../Fields/DatePickerInput'
import { MobileCancelMajor } from '@shopify/polaris-icons'
import { NavLink } from 'react-router-dom'
import { LandingContext } from '../../context/LandingContext'
import TImer from '../TImer'
import CheckboxExample from '../Fields/CheckBoxSqaure'
import TimerBadge_land from './TimerBadge_land'
const Content_land = () => {
  const { design, content, setContent } = useContext(LandingContext)

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

  return (
    <>
      {/* <Top_BottomPage /> */}
      <div className="row px-2 py-3  ">
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
                      checked={true}
                      decription="Timer that ends at the specific date."
                      onChange={(e) => {
                        setContent({ ...content, timerType: e.target.value })
                      }}
                    />
                    <CheckBoxComponent
                      id="fixed"
                      name="toDate"
                      label="Fixed minutes"
                      decription="Individual fixed minutes countdown for each buyer session."
                      onChange={(e) => {
                        setContent({ ...content, timerType: e.target.value })
                      }}
                    />
                    <CheckBoxComponent
                      id="recurring"
                      name="toDate"
                      label="Daily recurring timer"
                      decription="E.g. every weekday from 9 am to 11 am"
                      onChange={(e) => {
                        setContent({ ...content, timerType: e.target.value })
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="sc-bczRLJ czvMoD pt-3">
                <div className="Polaris-FormLayout">
                  {content.timerType == 'toDate' ? (
                    content.timerStart == 'rightNow' ? (
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
                          label="Right now"
                          onChange={(e) => {
                            setContent({
                              ...content,
                              timerStart: e.target.value,
                            })
                          }}
                        />
                        <CheckBoxComponent
                          id="schedule"
                          name="timerStart"
                          checked={true}
                          label="Schedule to start later"
                          onChange={(e) => {
                            setContent({
                              ...content,
                              timerStart: e.target.value,
                            })
                            // console.log(content.timerStart)
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
                                state1={content.endDate}
                                onChange={(e) => {
                                  setContent({
                                    ...content,
                                    endDate: e,
                                  })
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          role="group"
                          className="Polaris-FormLayout--condensed"
                        >
                          <div className="Polaris-FormLayout__Items">
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
                                  defaultValue={content.endHrs}
                                  state1={content.endHrs}
                                  onChange={(e) => {
                                    setContent({
                                      ...content,
                                      endHrs: e,
                                    })
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
                                  defaultValue={content.endMnt}
                                  state1={content.endMnt}
                                  onChange={(e) => {
                                    setContent({
                                      ...content,
                                      endMnt: e,
                                    })
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
                          label="Right now"
                          onChange={(e) => {
                            setContent({
                              ...content,
                              timerStart: e.target.value,
                            })
                          }}
                        />
                        <CheckBoxComponent
                          id="schedule"
                          name="timerStart"
                          checked={true}
                          label="Schedule to start later"
                          onChange={(e) => {
                            setContent({
                              ...content,
                              timerStart: e.target.value,
                            })
                            // console.log(content.timerStart)
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
                                state1={content.startDate}
                                onChange={(e) => {
                                  setContent({
                                    ...content,
                                    startDate: e,
                                  })
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          role="group"
                          className="Polaris-FormLayout--condensed"
                        >
                          <div className="Polaris-FormLayout__Items">
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
                                  defaultValue={content.startHrs}
                                  onChange={(e) => {
                                    setContent({
                                      ...content,
                                      startHrs: e,
                                    })
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
                                  defaultValue={content.startMnt}
                                  onChange={(e) => {
                                    setContent({
                                      ...content,
                                      startMnt: e,
                                    })
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
                                state1={content.endDate}
                                onChange={(e) => {
                                  setContent({
                                    ...content,
                                    endDate: e,
                                  })
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          role="group"
                          className="Polaris-FormLayout--condensed"
                        >
                          <div className="Polaris-FormLayout__Items">
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
                                  defaultValue={content.endHrs}
                                  state1={content.endHrs}
                                  onChange={(e) => {
                                    setContent({
                                      ...content,
                                      endHrs: e,
                                    })
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
                                  defaultValue={content.endMnt}
                                  state1={content.endMnt}
                                  onChange={(e) => {
                                    setContent({
                                      ...content,
                                      endMnt: e,
                                    })
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  ) : content.timerType == 'fixed' ? (
                    <div className="Polaris-FormLayout__Item">
                      <InputNumber
                        id="fixedMnt"
                        label="fixed"
                        defaultValue={content.fixedTime}
                        onChange={(e) => {
                          setContent({
                            ...content,
                            fixedTime: e,
                          })
                        }}
                      />
                    </div>
                  ) : content.timerType == 'recurring' ? (
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
                              state1={content.RepeatOn.monday}
                              onChange={(e) => {
                                setContent((state) => {
                                  return {
                                    ...state,
                                    RepeatOn: {
                                      ...content.RepeatOn,
                                      monday: e,
                                    },
                                  }
                                })
                                console.log(e)
                              }}
                            />
                          </li>
                          <li class="Polaris-ChoiceList__ChoiceItem">
                            <CheckboxExample
                              label={'Tuesday'}
                              state1={content.RepeatOn.tuesday}
                              onChange={(e) => {
                                setContent((state) => {
                                  return {
                                    ...state,
                                    RepeatOn: {
                                      ...content.RepeatOn,
                                      tuesday: e,
                                    },
                                  }
                                })
                                console.log(e)
                              }}
                            />
                          </li>
                          <li class="Polaris-ChoiceList__ChoiceItem">
                            <CheckboxExample
                              label={'Wednesday'}
                              state1={content.RepeatOn.wednesday}
                              onChange={(e) => {
                                setContent((state) => {
                                  return {
                                    ...state,
                                    RepeatOn: {
                                      ...content.RepeatOn,
                                      wednesday: e,
                                    },
                                  }
                                })
                                console.log(e)
                              }}
                            />
                          </li>
                          <li class="Polaris-ChoiceList__ChoiceItem">
                            <CheckboxExample
                              label={'Thursday'}
                              state1={content.RepeatOn.thursday}
                              onChange={(e) => {
                                setContent((state) => {
                                  return {
                                    ...state,
                                    RepeatOn: {
                                      ...content.RepeatOn,
                                      thursday: e,
                                    },
                                  }
                                })
                                console.log(e)
                              }}
                            />
                          </li>
                          <li class="Polaris-ChoiceList__ChoiceItem">
                            <CheckboxExample
                              label={'Friday'}
                              state1={content.RepeatOn.friday}
                              onChange={(e) => {
                                setContent((state) => {
                                  return {
                                    ...state,
                                    RepeatOn: {
                                      ...content.RepeatOn,
                                      friday: e,
                                    },
                                  }
                                })
                                console.log(e)
                              }}
                            />
                          </li>
                          <li class="Polaris-ChoiceList__ChoiceItem">
                            <CheckboxExample
                              label={'Saturday'}
                              state1={content.RepeatOn.saturday}
                              onChange={(e) => {
                                setContent((state) => {
                                  return {
                                    ...state,
                                    RepeatOn: {
                                      ...content.RepeatOn,
                                      saturday: e,
                                    },
                                  }
                                })
                                console.log(e)
                              }}
                            />
                          </li>
                          <li class="Polaris-ChoiceList__ChoiceItem">
                            <CheckboxExample
                              label={'Sunday'}
                              state1={content.RepeatOn.sunday}
                              onChange={(e) => {
                                setContent((state) => {
                                  return {
                                    ...state,
                                    RepeatOn: {
                                      ...content.RepeatOn,
                                      sunday: e,
                                    },
                                  }
                                })
                                console.log(e)
                              }}
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="Polaris-FormLayout__Items">
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
                            defaultValue={content.dailyStartHrs}
                            onChange={(e) => {
                              setContent({
                                ...content,
                                dailyStartHrs: e,
                              })
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
                            defaultValue={content.dailyStartMnt}
                            onChange={(e) => {
                              setContent({
                                ...content,
                                dailyStartMnt: e,
                              })
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
                      <div className="Polaris-FormLayout__Items">
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
                            defaultValue={content.dailyEndHrs}
                            onChange={(e) => {
                              setContent({
                                ...content,
                                dailyEndHrs: e,
                              })
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
                            defaultValue={content.dailyEndMnt}
                            onChange={(e) => {
                              setContent({
                                ...content,
                                dailyEndMnt: e,
                              })
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
                        checked={true}
                        label="Today"
                        onChange={(e) => {
                          setContent({ ...content, starts: e.target.value })
                        }}
                      />
                      <CheckBoxComponent
                        id="startSpcf"
                        name="startTimer"
                        label="Specefic date"
                        onChange={(e) => {
                          setContent({ ...content, starts: e.target.value })
                          console.log(e)
                        }}
                      />
                      {content.starts == "startSpcf" ?
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
                                state1={content.startDate}
                                onChange={(e) => {
                                  setContent({
                                    ...content,
                                    startDate: e,
                                  })
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
                        checked={true}
                        onChange={(e) => {
                          setContent({ ...content, ends: e.target.value })
                        }}
                      />
                      <CheckBoxComponent
                        id="endSpcf"
                        name="endTimer"
                        label="Specefic date"
                        onChange={(e) => {
                          setContent({ ...content, ends: e.target.value })
                          // console.log(content.timerStart)
                        }}
                      />
                      {content.ends == "endSpcf" ?
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
                                state1={content.endDate}
                                onChange={(e) => {
                                  setContent({
                                    ...content,
                                    endDate: e,
                                  })
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
        <div className="col col-md-8" id="preview">

          <TimerBadge_land design={design} content={content} />
        </div>
      </div>
    </>
  )
}

export default Content_land
