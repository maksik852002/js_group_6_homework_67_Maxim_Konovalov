import React from "react";

const Button = props => (
  <button
    style={props.style}
    onClick={props.click ? props.click : null}
    className={`btn ${props.addClass === 'navbar-toggler' ? props.addClass : ['btn', props.addClass].join('-')}`}
    disabled={props.disabled ? props.disabled : null}
    value={props.value ? props.value : null}
  >
    {props.label}
  </button>
);

export default Button;
