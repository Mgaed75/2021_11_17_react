import React from "react";

import "./App.css";

import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Button
        text="OK"
        onButtonClicked={(arg) => {
          alert("click sur button");
        }}
        style={{fontSize:'45pt'}}
      />

      <Button text="Cancel" color="red"/>

      <Button
        text="User ne clique pas ICI"
        bgColor="tomato"
        onButtonClicked={(arg) => {
          console.log(arg)
          alert("Le user a osé cliquer, il est vilain celui-ci ! ");
        }}
      />

      <Button text="Je sais quand tu vas quand même cliquer" />

      <Button text="For Test" />
    </div>
  );
}

export default App;
