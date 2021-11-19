import React from "react";
import PropTypes from "prop-types";
import style from "./FlowLayout.module.scss";

const FlowLayout = (props) => {
  return (
  <div className={style.FlowLayout} data-testid="FlowLayout">
    {props.children}
  </div>
  );
};

FlowLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default FlowLayout;