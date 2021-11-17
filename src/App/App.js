import React from "react";

import Button from "./components/Button/Button";
class App extends React.Component {
  counter = 0;

  // Constructeur
  constructor(props) {
    super(props);
    this.state={counter:0, value2:0}
  }

  /**
   * Une fois que le composant a été chargé
   * 3arguments (1er arg : props,  2e arg: ancienne valeur d'état)
  */
  componentDidUpdate(){
    // Permet d'afficher du style css dans les logs console
    console.log("%c%s", "font-size:24pt;color: red; background-color: skyblue; border: 1px solid black", "Le changement est prêt et effectif : " + this.state.counter);
  }

  /***
   * Méthode de rendu
   */
  render() {
    return (
      <div className="App">
        counter:{this.state.counter}
        <Button
          text="Soustraire 1"
          onButtonClicked={() => {
            this.setState({counter:this.state.counter-1})
            console.log(this.state);
          }}
          bgColor="tomato"
        />
        <Button
          text="Ajouter 1"
          onButtonClicked={() => {
            this.setState({counter:this.state.counter+1})
            console.log(this.state);
          }}
          bgColor="green"
        />
      </div>
    );
  }
}

export default App;
