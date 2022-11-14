import React, { useContext } from 'react'
import { ProductPage } from '../Product/ProductPage'
import InputSelect from '../Fields/InputSelect'
import CheckBoxComponent from '../Fields/CheckBoxComponent'
import CheckboxSquare from '../Fields/CheckBoxSqaure'
import InputComponent from '../Fields/InputComponent'
// import ColorPicker from './Fields/InputComponent'
import DateInput from '../Fields/DateInput'
import InputNumber from '../Fields/InputNumber'
import Rangeslider from '../Fields/Rangeslider'
import Colorpicker from '../Fields/Colorpicker'
import TImer from '../TImer'
import { MobileCancelMajor } from '@shopify/polaris-icons'
import { NavLink } from 'react-router-dom'
import { TopBottomContext } from '../../context/Top_Bottom_Context'
import { hsbToHex } from '@shopify/polaris'
import { useEffect } from 'react'
import TimerBagde_Top from './TimerBagde_Top'

function Design_top() {
  const { content, design, setDesign } = useContext(TopBottomContext)
  useEffect(() => { console.log(design) }, [design])
  document.addEventListener('scroll', () => {
    const height = window.scrollY
    if (height >= '53') {
      document.getElementById('top-change').classList.remove('top-change')
      document.getElementById('preview').classList.add('extra-margin')
    } else {
      document.getElementById('top-change').classList.add('top-change')
      document.getElementById('preview').classList.remove('extra-margin')
    }
  })

  const myoption = [
    {
      value: 'custom',
      data: 'Custom',
      background: '#FFFFFF',
      borderSize: '0',
      borderColor: '#c5c8d1',
      tag: true,
    },
    {
      value: 'Dawn',
      data: 'Dawn',
      background: '',
      background1: '#252237',
      background2: '#4C4861',
      deg: '47deg',
      borderSize: '0',
      borderColor: '#c5c8d1',
      tag: false,
    },
    {
      value: 'Electric',
      data: 'Electric',
      background: '',
      background1: '#00FFF0',
      background2: '#D20DFF',
      deg: '153deg',
      borderSize: '0',
      borderColor: '#c5c8d1',
      tag: false,
    },
    {
      value: 'Forest',
      data: 'Forest',
      background: '#007f5f',
      borderSize: '0',
      borderColor: '#d4d4d4',
      tag: true,
    },
    {
      value: '50 Shades of Grey',
      data: '50 Shades of Grey',
      background: '#313e50',
      borderSize: '0',
      borderColor: '#c5c8d1',
      tag: true,
    },
    {
      value: 'Vibrant',
      data: 'Vibrant',
      background: '#FFFFFF',
      borderSize: '2',
      borderColor: '#f15bb5',
      tag: true,
    },
    {
      value: 'Neon',
      data: 'Neon',
      background: '',
      background1: '#480ca8',
      background2: '#7209b7',
      deg: '22deg',
      borderSize: '0',
      borderColor: '#c5c8d1',
      tag: false,
    },
    {
      value: 'Vanila',
      data: 'Vanila',
      background: '#fcfcfc',
      borderSize: '4',
      borderColor: '#d8e2dc',
      tag: true,
    },
    {
      value: 'Love',
      data: 'Love',
      background: '',
      background1: '#e63946',
      background2: '#ff35a2',
      deg: '65deg',
      borderSize: '0',
      borderColor: '#c5c8d1',
      tag: false,
    },
    {
      value: 'Earth',
      data: 'Earth',
      background: '',
      background1: '#edd0be',
      background2: '#ddbea9',
      deg: '139deg',
      borderSize: '1',
      borderColor: '#a5a58d',
      tag: false,
    },
    {
      value: 'Valentine',
      data: 'Valentine',
      background: '',
      background1: '#e5383b',
      background2: '#f77f00',
      deg: '306deg',
      borderSize: '0',
      borderColor: '#c5c8d1',
      tag: false,
    },
    {
      value: 'Bubble Gum',
      data: 'Bubble Gum',
      background: '#fce4f3',
      borderSize: '1',
      borderColor: '#f5c5e7',
      tag: true,
    },
    {
      value: 'Black and Yellow',
      data: 'Black and Yellow',
      background: '#000000',
      borderSize: '0',
      borderColor: '#FFFFFF',
      tag: true,
    },
    {
      value: 'Sophisticated',
      data: 'Sophisticated',
      background: '#f1f6f9',
      borderSize: '0',
      borderColor: '#d0dde4',
      tag: true,
    },
    {
      value: 'Fire',
      data: 'Fire',
      background: '',
      background1: '#ff6f3c',
      background2: '#ffc93c',
      deg: '13deg',
      borderSize: '0',
      borderColor: '#ff3c3c',
      tag: false,
    },
    {
      value: 'Frost',
      data: 'Frost',
      background: ' ',
      background1: '#46cdcf',
      background2: '#bfffec',
      deg: '145deg',
      borderSize: '0',
      borderColor: '#FFFFFF',
      tag: false,
    },
    {
      value: 'Sunny Evening',
      data: 'Sunny Evening',
      background: '#fce38a',
      borderSize: '0',
      borderColor: '#FFFFFF',
      tag: true,
    },
    {
      value: 'Red Moon',
      data: 'Red Moon',
      background: '#2b2e4a',
      borderSize: '0',
      borderColor: '#FFFFFF',
      tag: true,
    },
    {
      value: 'Dark Ocean',
      data: 'Dark Ocean',
      background: '#222831',
      borderSize: '0',
      borderColor: '#FFFFFF',
      tag: true,
    },
    {
      value: 'Minimal',
      data: 'Minimal',
      background: '#FFFFFF',
      borderSize: '1',
      borderColor: '#000000',
      tag: true,
    },
    {
      value: 'Mint',
      data: 'Mint',
      background: '#b0ead7',
      borderSize: '0',
      borderColor: '#FFFFFF',
      tag: true,
    },
  ]
  const fontOption = [
    {
      value: 'auto',
      data: 'Use your theme fonts',
    },
    {
      value: 'Helvetica',
      data: 'Helvetica',
    },
    {
      value: 'Tahoma',
      data: 'Tahoma',
    },
    {
      value: 'Trebuchet MS',
      data: 'Trebuchet MS',
    },
    {
      value: 'Times New Roman',
      data: 'Times New Roman',
    },
    {
      value: 'Georgia',
      data: 'Georgia',
    },
    {
      value: 'Garamond',
      data: 'Garamond',
    },
    {
      value: 'Courier New',
      data: 'Courier New',
    },
  ]

  const handelCssChanges = (value) => {

    if (value === "Top page") {
      document.getElementById('timer-badge').style.paddingBottom = '30px'
      document.getElementById('timer-badge').style.paddingTop = '0'
      document.getElementById('inner_timer').style.borderTopLeftRadius = '8px'
      document.getElementById('inner_timer').style.borderTopRightRadius = '8px'
      document.getElementById('inner_timer').style.borderBottom = `${design.borderSize}px solid ${design.borderColor}`

      document.getElementById('sticky').classList.remove('hide-div')
    } else {
      document.getElementById('timer-badge').style.paddingTop = '30px'
      document.getElementById('timer-badge').style.paddingBottom = '0'
      document.getElementById('inner_timer').style.borderBottomLeftRadius = '8px'
      document.getElementById('inner_timer').style.borderBottomRightRadius = '8px'
      document.getElementById('inner_timer').style.borderTop = `${design.borderSize}px solid ${design.borderColor}`
      document.getElementById('sticky').classList.add('hide-div')

    }
  }

  const Positioning = [{ data: 'Top page' }, { data: 'Bottom page' }]
  return (
    <>
      {/* <Top_BottomPage /> */}
      <div className="row px-2 py-3 top-change design " id="top-change">
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
                        Positioning
                      </label>
                    </div>
                  </div>
                  <InputSelect
                    option={Positioning}
                    placeholder={design.positioning}
                    value={design.positioning}
                    onChange={(e) => {
                      setDesign({
                        ...design,
                        positioning: e.target.value,
                      })
                      // handelCssChanges(e.target.value)
                    }}
                  />
                </div>
                <div id='sticky' className="Polaris-FormLayout__Item ">
                  <CheckboxSquare
                    label={'Sticky bar'}
                    state1={design.stickyBar}
                    onChange={(e) => {
                      setDesign({ ...design, stickyBar: e })
                    }}
                  />
                  <div className="Polaris-Choice__Descriptions">
                    <div
                      className="Polaris-Choice__HelpText"
                      id="toDateHelpText"
                    >
                      Always visible while scrolling
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                        Template
                      </label>
                    </div>
                  </div>
                  <InputSelect
                    option={myoption}
                    placeholder="Custom"
                    value={design.template}
                    onChange={(e) => {
                      let temp = {}
                      {
                        myoption.filter(
                          (item) => item.value === e.target.value,
                        )[0].tag == true
                          ? (temp = {
                            singleColor: myoption.filter(
                              (item) => item.value === e.target.value,
                            )[0].background,
                          })
                          : (temp = {
                            gradClr1: myoption.filter(
                              (item) => item.value === e.target.value,
                            )[0].background1,
                            gradClr2: myoption.filter(
                              (item) => item.value === e.target.value,
                            )[0].background2,
                            gradAngle: myoption.filter(
                              (item) => item.value === e.target.value,
                            )[0].deg,
                          })
                      }
                      const data = {
                        ...design,
                        template: e.target.value,
                        borderSize: myoption.filter(
                          (item) => item.value === e.target.value,
                        )[0].borderSize,
                        borderColor: myoption.filter(
                          (item) => item.value === e.target.value,
                        )[0].borderColor,
                        ...temp,
                      }

                      setDesign((state) => {
                        return {
                          ...state,
                          ...data,

                        }
                      })
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="Polaris-Card__Section">
              <div className="sc-bczRLJ czvMoD">
                <div className="Polaris-FormLayout">
                  <div>
                    <div className="Polaris-FormLayout__Item">
                      <span className="Polaris-TextStyle--variationStrong">
                        Card
                      </span>
                    </div>
                    <CheckBoxComponent
                      id="singleBackground"
                      name="color"
                      label="Single color background"
                      checked={true}
                      decription=""
                      onChange={(e) => {
                        setDesign({ ...design, backtype: e.target.value })
                        document
                          .getElementById('SingelColor_Top')
                          .classList.remove('disable-div')

                        document
                          .getElementById('GradColor_Top')
                          .classList.add('disable-div')
                      }}
                    />
                    <div class="Polaris-FormLayout__Item">
                      <div class="Polaris-Stack">
                        <div class="Polaris-Stack__Item">
                          <div class="">
                            <div className="Polaris-Connected"
                              id='SingelColor_Top'>
                              <Colorpicker
                                state1={design.singleColor}
                                onChange={(e) => {
                                  setDesign({
                                    ...design,
                                    singleColor: hsbToHex(e),
                                  })
                                }}
                              />
                              <InputComponent
                                default={design.singleColor}
                                onChange={(e) => {
                                  setDesign({
                                    ...design,
                                    singleColor: e.target.value,
                                  })
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CheckBoxComponent
                      id="gradientBackground"
                      name="color"
                      label="Gradient background"
                      decription=""
                      onChange={(e) => {
                        setDesign({ ...design, backtype: e.target.value })
                        document
                          .getElementById('SingelColor_Top')
                          .classList.add('disable-div')

                        document
                          .getElementById('GradColor_Top')
                          .classList.remove('disable-div')
                      }}
                    />
                    <div id="GradColor_Top" className='disable-div'>
                      <div class="Polaris-FormLayout__Item ">
                        <Rangeslider
                          state1={design.gradAngle}
                          onChange={(e) => {
                            setDesign({ ...design, gradAngle: e })
                          }}
                        />
                      </div>
                      <div class="Polaris-FormLayout__Item">
                        <div class="Polaris-Stack">
                          <div class="Polaris-Stack__Item">
                            <div class="">
                              <div className="Polaris-Connected"
                                id='GradColor_Top'>
                                <Colorpicker
                                  state1={design.gradClr1}
                                  onChange={(e) => {
                                    setDesign({
                                      ...design,
                                      gradClr1: hsbToHex(e),
                                    })
                                  }}
                                />
                                <InputComponent
                                  default={design.gradClr1}
                                  onChange={(e) => {
                                    setDesign({
                                      ...design,
                                      gradClr1: e.target.value,
                                    })
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="Polaris-FormLayout__Item">
                        <div class="Polaris-Stack">
                          <div class="Polaris-Stack__Item">
                            <div class="">
                              <div className="Polaris-Connected">
                                <Colorpicker
                                  state1={design.gradClr2}
                                  onChange={(e) => {
                                    setDesign({
                                      ...design,
                                      gradClr2: hsbToHex(e),
                                    })
                                  }}
                                />
                                <InputComponent
                                  default={design.gradClr2}
                                  onChange={(e) => {
                                    setDesign({
                                      ...design,
                                      gradClr2: e.target.value,
                                    })
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sc-bczRLJ czvMoD pt-3">
                <div className="Polaris-FormLayout">
                  <div role="group" className="Polaris-FormLayout--condensed">
                    <div className="Polaris-FormLayout__Items">
                      <div
                        className="Polaris-FormLayout__Item"
                        style={{ width: '100%', display: 'flex' }}
                      >
                        <div className="small-div">
                          <div className="">
                            <div className="Polaris-Labelled__LabelWrapper">
                              <div className="Polaris-Label">
                                <label
                                  id="hoursLabel"
                                  htmlFor="hours"
                                  className="Polaris-Label__Text"
                                >
                                  Border Size
                                </label>
                              </div>
                            </div>
                            <InputNumber
                              id="hours"
                              label="hoursLabel"
                              defaultValue={design.borderSize}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  borderSize: e,
                                })
                              }}
                            />
                          </div>
                        </div>

                        <div className="" style={{ width: '58%' }}>
                          <div className="Polaris-Labelled__LabelWrapper">
                            <div className="Polaris-Label">
                              <label
                                id="minutesLabel"
                                htmlFor="minutes"
                                className="Polaris-Label__Text"
                              >
                                Border color
                              </label>
                            </div>
                          </div>
                          <div className="Polaris-Connected">
                            <Colorpicker
                              state1={design.borderColor}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  borderColor: hsbToHex(e),
                                })
                              }}
                            />
                            <InputComponent
                              default={design.borderColor}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  borderColor: e.target.value,
                                })
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="Polaris-Card__Section">
              <div className="Polaris-FormLayout">
                <div className="Polaris-FormLayout__Item">
                  <span className="Polaris-TextStyle--variationStrong">
                    Typography
                  </span>
                </div>
                <div className="Polaris-FormLayout__Item">
                  <div className="Polaris-Labelled__LabelWraspper">
                    <div className="Polaris-Label">
                      <label
                        id="nameLabel"
                        htmlFor="name"
                        className="Polaris-Label__Text"
                      >
                        Font
                      </label>
                    </div>
                  </div>
                  <InputSelect
                    option={fontOption}
                    placeholder="Custom"
                    value={design.font}
                    onChange={(e) => {
                      setDesign({
                        ...design,
                        font: e.target.value,
                      })
                    }}
                  />
                  <div
                    class="Polaris-Labelled__HelpText"
                    id="insideTopSpacingHelpText"
                  >
                    Theme fonts are not available in the preview mode. Publish
                    timer to preview it in store.
                  </div>
                </div>
                <div role="group" className="Polaris-FormLayout--condensed">
                  <div className="Polaris-FormLayout__Items">
                    <div
                      className="Polaris-FormLayout__Item"
                      style={{ width: '100%' }}
                    >
                      <div className="Polaris-Labelled__LabelWrapper">
                        <div className="Polaris-Label">
                          <label
                            id="hoursLabel"
                            htmlFor="hours"
                            className="Polaris-Label__Text"
                          >
                            Title size and color
                          </label>
                        </div>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <div className="small-div">
                          <div className="">
                            <InputNumber
                              id="hours"
                              label="hoursLabel"
                              defaultValue={design.titleSize}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  titleSize: e,
                                })
                              }}
                            />
                          </div>
                        </div>

                        <div className="" style={{ width: '58%' }}>
                          <div className="Polaris-Connected">
                            <Colorpicker
                              state1={design.titleColor}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  titleColor: hsbToHex(e),
                                })
                              }}
                            />
                            <InputComponent
                              default={design.titleColor}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  titleColor: e.target.value,
                                })
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="group" className="Polaris-FormLayout--condensed">
                  <div className="Polaris-FormLayout__Items">
                    <div
                      className="Polaris-FormLayout__Item"
                      style={{ width: '100%' }}
                    >
                      <div className="Polaris-Labelled__LabelWrapper">
                        <div className="Polaris-Label">
                          <label
                            id="subheading"
                            htmlFor="subheading"
                            className="Polaris-Label__Text"
                          >
                            Subheading size and color
                          </label>
                        </div>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <div className="small-div">
                          <div className="">
                            <InputNumber
                              id="subheading"
                              label="subheading"
                              defaultValue={design.subheadingSize}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  subheadingSize: e,
                                })
                              }}
                            />
                          </div>
                        </div>

                        <div className="" style={{ width: '58%' }}>
                          <div className="Polaris-Connected">
                            <Colorpicker
                              state1={design.subheadingColor}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  subheadingColor: hsbToHex(e),
                                })
                              }}
                            />
                            <InputComponent
                              default={design.subheadingColor}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  subheadingColor: e.target.value,
                                })
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="group" className="Polaris-FormLayout--condensed">
                  <div className="Polaris-FormLayout__Items">
                    <div
                      className="Polaris-FormLayout__Item"
                      style={{ width: '100%' }}
                    >
                      <div className="Polaris-Labelled__LabelWrapper">
                        <div className="Polaris-Label">
                          <label
                            id="time"
                            htmlFor="time"
                            className="Polaris-Label__Text"
                          >
                            Timer size and color
                          </label>
                        </div>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <div className="small-div">
                          <div className="">
                            <InputNumber
                              id="time"
                              label="time"
                              defaultValue={design.timerSize}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  timerSize: e,
                                })
                              }}
                            />
                          </div>
                        </div>

                        <div className="" style={{ width: '58%' }}>
                          <div className="Polaris-Connected">
                            <Colorpicker
                              state1={design.timerColor}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  timerColor: hsbToHex(e),
                                })
                              }}
                            />
                            <InputComponent
                              default={design.timerColor}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  timerColor: e.target.value,
                                })
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="group" className="Polaris-FormLayout--condensed">
                  <div className="Polaris-FormLayout__Items">
                    <div
                      className="Polaris-FormLayout__Item"
                      style={{ width: '100%' }}
                    >
                      <div className="Polaris-Labelled__LabelWrapper">
                        <div className="Polaris-Label">
                          <label
                            id="legend"
                            htmlFor="legend"
                            className="Polaris-Label__Text"
                          >
                            Legend size and color
                          </label>
                        </div>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <div className="small-div">
                          <div className="">
                            <InputNumber
                              id="legend"
                              label="legend"
                              defaultValue={design.legendSize}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  legendSize: e,
                                })
                              }}
                            />
                          </div>
                        </div>

                        <div className="" style={{ width: '58%' }}>
                          <div className="Polaris-Connected">
                            <Colorpicker
                              state1={design.legendColor}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  legendColor: hsbToHex(e),
                                })
                              }}
                            />
                            <InputComponent
                              default={design.legendColor}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  legendColor: e.target.value,
                                })
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Polaris-Card__Section">
              <div className="Polaris-FormLayout">
                <div className="Polaris-FormLayout__Item">
                  <span className="Polaris-TextStyle--variationStrong">
                    Button
                  </span>
                </div>
                <div class="Polaris-FormLayout__Item">
                  <div className="Polaris-Labelled__LabelWrapper">
                    <div className="Polaris-Label">
                      <label
                        id="color"
                        htmlFor="color"
                        className="Polaris-Label__Text"
                      >
                        Button color
                      </label>
                    </div>
                  </div>
                  <div class="Polaris-Stack">
                    <div class="Polaris-Stack__Item">
                      <div class="">
                        <div className="Polaris-Connected">
                          <Colorpicker
                            state1={design.buttonColor}
                            onChange={(e) => {
                              setDesign({
                                ...design,
                                buttonColor: hsbToHex(e),
                              })
                            }}
                          />
                          <InputComponent
                            default={design.buttonColor}
                            onChange={(e) => {
                              setDesign({
                                ...design,
                                buttonColor: e.target.value,
                              })
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div role="group" className="Polaris-FormLayout--condensed">
                  <div className="Polaris-FormLayout__Items">
                    <div
                      className="Polaris-FormLayout__Item"
                      style={{ width: '100%' }}
                    >
                      <div className="Polaris-Labelled__LabelWrapper">
                        <div className="Polaris-Label">
                          <label
                            id="hoursLabel"
                            htmlFor="hours"
                            className="Polaris-Label__Text"
                          >
                            Button font size and color
                          </label>
                        </div>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <div className="small-div">
                          <div className="">
                            <InputNumber
                              id="hours"
                              label="hoursLabel"
                              defaultValue={design.buttonFontSize}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  buttonFontSize: e,
                                })
                              }}
                            />
                          </div>
                        </div>

                        <div className="" style={{ width: '58%' }}>
                          <div className="Polaris-Connected">
                            <Colorpicker
                              state1={design.buttonFontColor}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  buttonFontColor: hsbToHex(e),
                                })
                              }}
                            />
                            <InputComponent
                              default={design.buttonFontColor}
                              onChange={(e) => {
                                setDesign({
                                  ...design,
                                  buttonFontColor: e.target.value,
                                })
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Polaris-FormLayout__Item">
                  <div className="small-div">
                    <div className="">
                      <div className="Polaris-Labelled__LabelWrapper">
                        <div className="Polaris-Label">
                          <label
                            id="hoursLabel"
                            htmlFor="hours"
                            className="Polaris-Label__Text"
                          >
                            Corner radius
                          </label>
                        </div>
                      </div>
                      <InputNumber
                        id="hours"
                        label="hoursLabel"
                        defaultValue={design.cornerRadus}
                        onChange={(e) => {
                          setDesign({
                            ...design,
                            cornerRadus: e,
                          })
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Polaris-Card__Section">
              <div className="Polaris-FormLayout">
                <div className="Polaris-FormLayout__Item">
                  <span className="Polaris-TextStyle--variationStrong">
                    Close Icon
                  </span>
                </div>
                <div class="Polaris-FormLayout__Item">
                  <div className="Polaris-Labelled__LabelWrapper">
                    <div className="Polaris-Label">
                      <label
                        id="hoursLabel"
                        htmlFor="hours"
                        className="Polaris-Label__Text"
                      >
                        Close icon color
                      </label>
                    </div>
                  </div>
                  <div class="Polaris-Stack">
                    <div class="Polaris-Stack__Item">
                      <div class="">
                        <div className="Polaris-Connected">
                          <Colorpicker
                            state1={design.closeIconColorl}
                            onChange={(e) => {
                              setDesign({
                                ...design,
                                closeIconColorl: hsbToHex(e),
                              })
                            }}
                          />
                          <InputComponent
                            default={design.closeIconColorl}
                            onChange={(e) => {
                              setDesign({
                                ...design,
                                closeIconColorl: e.target.value,
                              })
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Polaris-Card__Section">
              <NavLink to="/Top_BottomPage/Placement_top">
                <button
                  className="Polaris-Button Polaris-Button--fullWidth"
                  type="button"
                >
                  <span className="Polaris-Button__Content">
                    <span className="Polaris-Button__Text">
                      Continue to Placement
                    </span>
                  </span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col col-md-18" id="preview">

          <TimerBagde_Top design={design} content={content} />

        </div>
      </div>
    </>
  )
}

export default Design_top
