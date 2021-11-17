import React, { useState } from "react";

import style from "./Button.module.css";

import PropTypes from "prop-types";

/**
 * Composant du button html
 * @param {object} props props du composant
 * @returns  component render
 */
const Button = (props) => {
  const [clicked, setClicked] = useState({
    state: false,
    autreValue: "Bonjour les ami.e.s",
  });
  console.log(props);

  return (
    // si le bouton est cliqué alors on lui ajoute un style particulier
    <button
      className={`${style.Button}${clicked.state ? " " + style.clicked : ""}`}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        ...props.style,
      }}
      onClick={(evt) => {
        setClicked({ ...clicked, state: true });
        setTimeout(() => {
          setClicked({ ...clicked, state: false });
        }, 300);
        // évènement géré par le composant pas renvoyé au parent
        props.onButtonClicked();
      }}
    >
      {props.text}
    </button>
  );
};

// Typage des propriétés
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object,
};

// Propriétés par défaut
Button.defaultProps = {
  color: "white",
  bgColor: "greenyellow",
};

export default Button;
