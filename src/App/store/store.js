import { combineReducers, createStore } from "redux";
import { REST_ADR, REST_RESSOURCES } from "../config/config";

//état initial des ressources
export const ressourcesInitialStates = {
  memes: [],
  images: [],
};

// état initial du même courant
export const currentInitialState = {
    titre: "",
    text: "",
    x: 0,
    y: 10,
    fontSize: 10,
    color: "#000000",
    fontWeight: "500",
    underline: false,
    italic: false,
    frameX: 0,
    frameY: 0,
    imageId: -1,
  };
  
//Enum d'actions publiques pour les ressources courantes
export const RESSOURCES_PUBLIC_ACTION = Object.freeze({
  REPLACE_MEMES_LIST: "REPLACE_MEMES_LIST",
  REPLACE_IMAGES_LIST: "REPLACE_IMAGES_LIST",
  ADD_MEME: "ADD_MEME",
});

// Enum d'actions publiques pour le même courant
export const CURRENT_PUBLIC_ACTIONS = Object.freeze({
    UPDATE_CURRENT: "UPDATE_CURRENT",
    CLEAR_MEME: "CLEAR_MEME",
    SAVE_MEME: "SAVE_MEME",
  });

//Enum d'actions privées pour les ressources courantes
const RESSOURCES_PRIVATE_ACTION = Object.freeze({
    INIT: "INIT",
    INIT_ARRAYS: "INIT_ARRAYS",
  });

/**
 * Reducer pour les ressources
 * @param {*} state
 * @param {*} action
 * @returns le nouveau state
 */
function ressourceReducer(state = ressourcesInitialStates, action) {
  console.log(action);
  switch (action.type) {
    case RESSOURCES_PRIVATE_ACTION.INIT:
        // initialisation
      const pImages = fetch(`${REST_ADR}${REST_RESSOURCES.images}`).then((flux) => flux.json());
      const pMemes = fetch(`${REST_ADR}${REST_RESSOURCES.memes}`).then((flux) => flux.json());
      Promise.all([pImages, pMemes])
        .then((array_array) => {
            // déclenche un changement d'état lors de l'initialisation des tableaux
            store.dispatch({
                type: RESSOURCES_PRIVATE_ACTION.INIT_ARRAYS, values: array_array
            })
        });
      return state;
    case RESSOURCES_PRIVATE_ACTION.INIT_ARRAYS:
        // initialisation des images et mêmes
        return { ...state, memes: action.values[1], images: action.values[0] };
    case RESSOURCES_PUBLIC_ACTION.REPLACE_IMAGES_LIST:
      // copie le state et modifie les images par les valeurs passées en paramètres
      return { ...state, images: action.values };
    case RESSOURCES_PUBLIC_ACTION.REPLACE_MEMES_LIST:
      // copie le state et modifie les mêmes par les valeurs passées en paramètres
      return { ...state, memes: action.values };
    case RESSOURCES_PUBLIC_ACTION.ADD_MEME:
      // copie le state et ajoute le même dans la copie des mêmes  par la valeur passée en paramètres
      return { ...state, memes: [...state.memes, action.value] };
    default:
      return state;
  }
}

/**
 * Reducer pour le même courant
 * @param {*} state
 * @param {*} action
 * @returns le nouveau state
 */
const currentReducer = (state = currentInitialState, action) => {
  switch (action.type) {
    case CURRENT_PUBLIC_ACTIONS.UPDATE_CURRENT:
      return { ...state, ...action.value };
    case CURRENT_PUBLIC_ACTIONS.CLEAR_MEME:
      return { ...currentInitialState };
    default:
      return state;
  }
};

/**
 * Création d'un store utilisant 2 reducers :
 *  - currentReducer
 *  - ressourceReducer
 */
const store = createStore(
  combineReducers({ current: currentReducer, ressources: ressourceReducer })
);
// Le store s'abonne à mes reducers (écoute les changements)
store.subscribe(() => {
  console.log(store.getState());
});

// déclenche le changement d'état à l'initialisation
store.dispatch({
    type: RESSOURCES_PRIVATE_ACTION.INIT,
})

export default store;
