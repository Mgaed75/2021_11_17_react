import React from "react";
import { connect } from "react-redux";

import FlexLayout from "./components/FlexLayout/FlexLayout";
import Header from "./components/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import store from "./store/store";

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
        <div className="App">
          <FlexLayout>
            <MemeViewer
              meme={this.props.current}
              image={this.props.images.find(
                (ele) => ele.id === this.props.current.imageId
              )}
            />
            <MemeForm />
          </FlexLayout>
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
