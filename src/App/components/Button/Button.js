import React from "react";

import "./Button.css"

/**
 * Composant du button html
 * @param {object} props props du composant
 * @returns  component render
 */
const Button = (props) => {
  console.log(props);
  return <button className="Button">{props.text}</button>;
};

export default Button;