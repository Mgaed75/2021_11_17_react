import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import style from "./MemeForm.module.scss";

const initialState = {};

function MemeForm(props) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // didMount + didUpdate
    return () => {
      // will Unmount
    };
  }, [state]);

  return (
    <div data-testId="MemeForm">
      <form>
        <h1>Titre</h1>
        <input
          type="text"
          id="f_titre"
          placeholder="Un titre?"
          value={props.meme.titre}
        />
        <hr />
        <h2>Image</h2>
        <select value={props.meme.imageId}>
          <option value="-1">Aucune</option>
          {props.images.map((ele, i) => (
            <option value={ele.id}>{ele.titre}</option>
          ))}
        </select>
        <hr />
        <h2>Texte</h2>
        <input
          type="text"
          placeholder="Formation ReactJS"
          value={props.meme.text}
        />
        <div className={style.half}>
          <label htmlFor="f_text_x">x:</label>
          <input
            id="f_text_x"
            type="number"
            className={style.smallInput}
            min="0"
            value={props.meme.x}
          />
          <label htmlFor="f_text_y">y:</label>
          <input
            id="f_text_y"
            type="number"
            className={style.smallInput}
            value={props.meme.y}
          />
        </div>
        <hr />
        <label htmlFor="f_text_color">Color:</label>
        <input
          id="f_text_color"
          type="color"
          className={style.smallInput}
          value={props.meme.color}
        />
        <hr />
        <h2>Décorations</h2>
        <label htmlFor="f_font_size">Font-Size:</label>
        <input
          id="f_font_size"
          type="number"
          className={style.smallInput}
          min="0"
          value={props.meme.fontSize}
        />
        <hr />
        <label htmlFor="f_font_weight">Font-Weight:</label>
        <input
          id="f_font_weight"
          type="number"
          className={style.smallInput}
          value={props.meme.fontWeight}
        />
        <hr />

        <div className={style.half}>
          <input
            id="f_underline"
            type="checkbox"
            checked={props.meme.underline}
          />
          <label htmlFor="f_underline">Underline</label>
          <label htmlFor="f_italic">Italic</label>
          <input id="f_italic" type="checkbox" checked={props.meme.italic} />
        </div>
        <div className={style.half}>
          <Button
            type="reset"
            text="Clear"
            bgColor="#FF6347"
            onButtonClicked={() => {}}
          />
          <Button
            type="submit"
            text="Save"
            onButtonClicked={() => {
              this.setState({ counter: this.state.counter + 1 });
              console.log(this.state);
            }}
            bgColor="#87CEEB"
          />
        </div>
      </form>
    </div>
  );
}

MemeForm.propTypes = {
  meme: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
  onMemeChange: PropTypes.func.isRequired,
};

MemeForm.defaultProps = {};

export default MemeForm;
