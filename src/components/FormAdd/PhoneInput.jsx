import React from 'react';
import InputMask from 'react-input-mask';

const PhoneInput = (props) => {
  let mainClass = 'input-wrapper';

  if (props.className) {
    mainClass = mainClass + ' ' + props.className;
  }

  return (
    <div className={mainClass}>
      <InputMask
        className="input-wrapper__input"
        id={props.id}
        name={props.name}
        value={props.value}
        mask="(999)999-9999"
        maskPlaceholder="x"
        onChange={props.handler}
        placeholder={props.placeholder}
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

export default PhoneInput;