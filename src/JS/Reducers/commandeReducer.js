import {
  ADD_COMMANDE_SUCCESS,
  ADD_COMMANDE,
  ADD_COMMANDE_FAIL,
  FETCH_COMMANDES,
  FETCH_COMMANDES_SUCCESS,
  FETCH_COMMANDES_FAIL,
} from "../constants/actions-types";

const initialState = {
  commandes: [],
  loading: false,
  errors: null,
};

const commandeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_COMMANDE:
      return {
        ...state,
        loading: false,
      };
    case ADD_COMMANDE_SUCCESS:
      localStorage.setItem("cartItems", "[]");
      return {
        ...state,
        loading: true,
        commandes: payload,
      };
    case ADD_COMMANDE_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case FETCH_COMMANDES:
      return {
        ...state,
        loading: false,
      };
    case FETCH_COMMANDES_SUCCESS:
      return {
        ...state,
        loading: true,
        commandes: payload,
      };
    case FETCH_COMMANDES_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default commandeReducer;
