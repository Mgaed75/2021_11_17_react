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
      style={{backgroundColor:props.bgColor, color:props.color} }
      onClick={(evt) => {
        // evenement géré par le composant pas renvoye au parent
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
};

Button.defaultProps={
  color: "white",
  bgColor: "greenyellow"
}

export default Button;
