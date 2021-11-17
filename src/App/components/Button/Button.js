import React from "react";

import "./Button.css";

import PropTypes from "prop-types";

/**
 * Composant du button html
 * @param {object} props props du composant
 * @returns  component render
 */
const Button = (props) => {
  console.log(props);
  return (
    <button
      className="Button"
      onClick={(evt) => {
        props.onButtonClicked();
      }}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
};

export default Button;
