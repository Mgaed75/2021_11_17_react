import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import style from "./MemeForm.module.scss"

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
        <input type="text" id="f_titre" placeholder="Un titre?" />
        <hr />

        <h2>Image</h2>
        <select>
          <option value="-1">NNN</option>
        </select>
        <hr />

        <h2>Texte</h2>
        <input type="text" placeholder="Formation ReactJS" />
        <div className={style.half}>
          <label htmlFor="f_text_x">x:</label><input id="f_text_x" type="number" className={style.smallInput} min='0'/>c
          <label htmlFor="f_text_y">y:</label><input id="f_text_y" type="number" className={style.smallInput}/>
        </div>
        <hr />

        <label htmlFor='f_text_color'>Color</label><input id='f_text_color' type="color" className={style.smallInput}/>
        <hr />

        <h2>Décorations</h2>
        <h3>Font-Size</h3>
        <h3>Font-Weight</h3>
        <input id="f_underline" type="checkbox" /><label htmlFor="f_underline">Underline</label>
        /
        <label htmlFor="f_italic">Italic</label><input id="f_italic" type="checkbox" />

        <div className={style.half}>
          <Button type="reset" text="Clear" bgColor="tomato" />
          <Button
            type="submit"
            text="Save"
            onButtonClicked={() => {
              this.setState({ counter: this.state.counter + 1 });
              console.log(this.state);
            }}
            bgColor="skyblue"
          />
        </div>
      </form>
    </div>
  );
}

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
