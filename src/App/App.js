import React from "react";
import { connect } from "react-redux";

import FlexLayout from "./components/FlexLayout/FlexLayout";
import Header from "./components/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import store from "./store/store";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  /**
   * Une fois que le composant a été chargé
   * 3arguments (1er arg : props,  2e arg: ancienne valeur d'état)
   */
  componentDidUpdate() {
    // Permet d'afficher du style css dans les logs console
    console.log(
      "%c%s",
      "font-size:24pt;color: #FF0000; background-color: #87CEEB; border: 1px solid #000000",
      "Le changement est prêt et effectif ! "
    );
  }

  /***
   * Méthode de rendu
   */
  render() {
    return (
      <React.Fragment>
        <Header />
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <h1>Bonjour et Bienvenue !</h1>
              Voici le nouveau générateur de même - version 2021
            </Route>
            <Route path="/thumbnail">
              <MemeThumbnail
                images={this.props.images}
                memes={this.props.memes}
              />
            </Route>
            <Route path="/edit">
              <FlexLayout>
                <MemeViewer
                  meme={this.props.current}
                  image={this.props.images.find(
                    (ele) => ele.id === this.props.current.imageId
                  )}
                />
                <MemeForm />
              </FlexLayout>
            </Route>
            <Route path="/">
              <h1>Erreur 404 : Not Found !! :(</h1>
            </Route>
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

/**
 * Envoie des variables aux propriétés du container
 * @param {*} state état du magasin
 * @param {*} own les infos du parent
 * @returns
 */
function mapStateToProps(state, own) {
  return {
    ...own,
    current: state.current,
    images: state.ressources.images,
  };
}
/**
 * Envoie des actions aux propriétés du container
 * @param {*} dispatch
 * @returns
 */
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
