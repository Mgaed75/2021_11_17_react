import React from "react";
import PropTypes from "prop-types";
import styles from "./FlexLayout.module.scss";

const FlexLayout = (props) => {
  console.group("FlexLayout");
  console.log(props);
  console.groupEnd();

  return (
    <div className={styles.FlexLayout} data-testid="FlexLayout">
      {props.children}
    </div>
  );
};

FlexLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

FlexLayout.defaultProps = {};

export default FlexLayout;
