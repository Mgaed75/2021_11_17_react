import React from "react";

import FlexLayout from "./components/FlexLayout/FlexLayout";
import Header from "./components/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
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
      image: [
        {
          id: 0,
          url: "img/meme1.jpg",
          titre: "meme1",
          h: 778,
          w: 736,
        },
        {
          id: 1,
          url: "img/meme2.png",
          titre: "meme2",
          h: 347,
          w: 670,
        },
      ],
    };
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
              image={this.state.image.find(
                (ele) => ele.id === this.state.current.imageId
              )}
            />
            <MemeForm
              meme={this.state.current}
              onMemeChange={(meme) => this.setState({ current: meme })}
              images={this.state.image}
            />
          </FlexLayout>
        </div>
      </>
    );
  }
}

export default App;
