import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.Header} data-testid="Header">
    <span className={styles.meme}>Meme</span>
    <span className={styles.dot}>.</span>
    <span className={styles.js}>js</span>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
