import React from "react";

import Button from "./components/Button/Button";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import Header from "./components/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
class App extends React.Component {
  counter = 0;

  // Constructeur
  constructor(props) {
    super(props);
    this.state = { counter: 0, value2: 0 };
  }

  /**
   * Une fois que le composant a été chargé
   * 3arguments (1er arg : props,  2e arg: ancienne valeur d'état)
   */
  componentDidUpdate() {
    // Permet d'afficher du style css dans les logs console
    console.log(
      "%c%s",
      "font-size:24pt;color: red; background-color: skyblue; border: 1px solid black",
      "Le changement est prêt et effectif : " + this.state.counter
    );
  }

  /***
   * Méthode de rendu
   */
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <FlexLayout>
            <MemeViewer
              meme={{
                titre: "mon 1er même",
                text: "stop la triche",
                x: 390,
                y: 530,
                fontSize: 28,
                color: "tomato",
                fontWeigh: "900",
                underline: true,
                italic: true,
                frameX: 0,
                frameY: 0,
              }}
              image={{
                id: 0,
                url: "img/meme1.jpg",
                titre: "meme1",
                h: 778,
                w: 736,
              }}
            />
            <MemeForm />
          </FlexLayout>
          {/* Exercice n°2*/}
          counter:{this.state.counter}
          <Button
            text="Soustraire 1"
            onButtonClicked={() => {
              this.setState({ counter: this.state.counter - 1 });
              console.log(this.state);
            }}
            bgColor="tomato"
          />
          <Button
            text="Ajouter 1"
            onButtonClicked={() => {
              this.setState({ counter: this.state.counter + 1 });
              console.log(this.state);
            }}
            bgColor="green"
          />
        </div>
      </>
    );
  }
}

export default App;
