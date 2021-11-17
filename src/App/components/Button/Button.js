import React from "react";

import style from "./Button.module.css";

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
      className={style.Button}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        ...props.style,
      }}
      onClick={(evt) => {
        // évènement géré par le composant pas renvoyé au parent
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
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object,
};

Button.defaultProps = {
  color: "white",
  bgColor: "greenyellow",
};

export default Button;
