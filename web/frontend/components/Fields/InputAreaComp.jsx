import React from 'react'

const InputAreaComp = (props) => {
  return (
    <div
      className="Polaris-Connected__Item Polaris-Connected__Item--primary"
      style={{ marginRight: '2px' }}
    >
      <div className="Polaris-TextField Polaris-TextField--hasValue ">
        <textarea
          rows="2"
          id={props.id}
          className="Polaris-TextField__Input"
          type={props.type}
          defaultValue={props.default}
          placeholder={props.placeholder}
          name={props.name}
          default={props.default}
          aria-labelledby={props.label}
          value={props.default}
          onChange={props.onChange}
        />
        <div className="Polaris-TextField__Backdrop" />
      </div>
    </div>
  )
}

export default InputAreaComp
