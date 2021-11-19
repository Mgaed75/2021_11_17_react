import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import style from "./TemplateName.module.scss";
export const TemplateName = (props) => {
  return <div className={style.TemplateName} data-testid="TemplateName"></div>;
};

TemplateName.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state, own) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateName);
