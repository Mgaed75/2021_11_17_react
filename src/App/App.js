import React from "react";

import FlexLayout from "./components/FlexLayout/FlexLayout";
import Header from "./components/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import { REST_ADR, REST_RESSOURCES } from "./config/config";
import store from "./store/store";


class App extends React.Component {
  
  // Constructeur
  constructor(props) {
    super(props);
    this.state = {
      current: {
        titre: "mon 1er même",
        text: "stop la triche",
        x: 390,
        y: 530,
        fontSize: 28,
        color: "#FF6347",
        fontWeight: "900",
        underline: true,
        italic: true,
        frameX: 0,
        frameY: 0,
        imageId: 0,
      },
      images: [],
    };
  }

  /**
   * Une fois que le composant a été monté
   */
  componentDidMount() {
    fetch(`${REST_ADR}${REST_RESSOURCES.images}`)
      // transforme le flux retour du fetch en json
      .then((flux) => flux.json())
      // renseigne le tableau d'images du json dans image du state
      .then((array) => this.setState({ images: array }));
  }

  /**
   * Une fois que le composant a été chargé
   * 3arguments (1er arg : props,  2e arg: ancienne valeur d'état)
   */
  componentDidUpdate() {
    // Permet d'afficher du style css dans les logs console
    console.log(
      "%c%s",
      "font-size:24pt;color: #FF0000; background-color: #87CEEB; border: 1px solid #000000",
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
              meme={this.state.current}
              image={this.state.images.find(
                (ele) => ele.id === this.state.current.imageId
              )}
            />
            <MemeForm
              meme={this.state.current}
              onMemeChange={(meme) => this.setState({ current: meme })}
              images={this.state.images}
            />
          </FlexLayout>
        </div>
      </>
    );
  }
}

export default App;
