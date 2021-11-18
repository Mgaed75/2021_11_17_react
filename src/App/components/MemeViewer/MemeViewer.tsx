import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeViewer.module.scss";
import { I_Image, I_Meme } from "../../interfaces/interface";

interface I_Props {
  meme: I_Meme;
  image?: I_Image;
}

const MemeViewer = (props: I_Props) => (
  <svg
    className={styles.MemeViewer}
    data-testid="MemeViewer"
    viewBox={`0 0 ${props.image.w} ${props.image.h}`}
  >
    <image href={props.image.url} x="0" y="0" />
    <text
      x={props.meme.x}
      y={props.meme.y}
      fill={props.meme.color}
      fontSize={props.meme.fontSize}
      textDecoration={props.meme.underline ? "underline" : "none"}
      fontStyle={props.meme.italic ? "italic" : "none"}
      fontWeight={props.meme.fontWeight}
    >
      {props.meme.text}
    </text>
  </svg>
);

// remplacer par le typage en ts
/*
MemeViewer.propTypes = {
  meme: PropTypes.object.isRequired,
  image: PropTypes.object,
};
*/

MemeViewer.defaultProps = {};

export default MemeViewer;
