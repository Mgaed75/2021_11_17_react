import React from "react";

import Button from "./components/Button/Button";
class App extends React.Component {
  counter = 0;

  // Constructeur par défaut
  constructor(props) {
    super(props);
  }

  /***
   * Méthode de rendu
   */
  render() {
    return (
      <div className="App">
        counter:{this.counter}
        <Button
          text="Soustraire 1"
          onButtonClicked={() => {
            this.counter--;
            console.log(this.counter);
          }}
          bgColor="tomato"
        ></Button>
        <Button
          text="Ajouter 1"
          onButtonClicked={() => {
            this.counter++;
            console.log(this.counter);
          }}
          bgColor="green"
        ></Button>
      </div>
    );
  }
}

export default App;
