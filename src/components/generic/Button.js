import React from 'react';

import './Button.scss';

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.handler}
      className={props.className}
      disabled={props.isDisabled}
    >
      {props.description}
    </button>
  )
}

export default Button;