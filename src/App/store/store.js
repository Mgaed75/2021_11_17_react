import { createStore } from "redux";

export const ressourcesInitialStates = {
  memes: [],
  images: [],
};

/**
 * Enum d'actions publiques
 */
export const RESSOURCES_PUBLIC_ACTION = Object.freeze({
  REPLACE_MEMES_LIST: "REPLACE_MEMES_LIST",
  REPLACE_IMAGES_LIST: "REPLACE_IMAGES_LIST",
  ADD_MEME: "ADD_MEME",
});

function ressourceReducer(state = ressourcesInitialStates, action) {
  console.log(action);
  switch (action.type) {
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

const store = createStore(ressourceReducer);
// Le store s'abonne à mon reducer (écoute les changements)
store.subscribe(() => {
  console.log(store.getState());
});

// déclenche un changement d'état lors du remplacement d'images
store.dispatch({
  type: RESSOURCES_PUBLIC_ACTION.REPLACE_IMAGES_LIST,
  values: [{ id: 0 }, { id: 1 }],
});

// déclenche un changement d'état lors du remplacement de mêmes
store.dispatch({
  type: RESSOURCES_PUBLIC_ACTION.REPLACE_MEMES_LIST,
  values: [{ id: 10 }, { id: 11 }],
});

// déclenche un changement d'état lors d'ajout de même
store.dispatch({
  type: RESSOURCES_PUBLIC_ACTION.ADD_MEME,
  value: [{ id: 20 }],
});

export default store;
