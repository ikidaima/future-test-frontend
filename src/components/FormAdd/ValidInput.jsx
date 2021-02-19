import React from 'react';

import './ValidInput.scss';

const ValidInput = (props) => {
  let mainClass = 'input-wrapper';

  if (props.className) {
    mainClass = mainClass + ' ' + props.className;
  }

  return (
    <div className={mainClass}>
      <input
        className="input-wrapper__input"
        id={props.id}
        name={props.name}
        value={props.value}
        type="text"
        placeholder={props.placeholder}
        onChange={props.handler}
        required
      />
      <label
        className={props.showWarningMessage ? "input-wrapper__label-error invalid" : "input-wrapper__label-error"}
        htmlFor={props.id}
      >
        {props.warningMessage}
      </label>
    </div>
  )
}

export default ValidInput;