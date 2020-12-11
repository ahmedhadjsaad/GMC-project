import {
  ADD_PRODUCT,
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  FETCH_FAIL,
  FETCH_PRODUCTS,
  FETCH_SUCCESS,
  GET_TOTAL,
  SEARCH,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_SUCCESS,
} from "../constants/actions-types";

const initialState = {
  loading: false,
  errors: null,
  products: [],
  keyword: "",
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case FETCH_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, payload],
      };
    case ADD_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, payload],
      };
    case DELETE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, payload],
      };
    case UPDATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
      case GET_TOTAL : 
      return {
        ...state,
        total : payload
      }
    case SEARCH:
      return {
        ...state,
        keyword: payload,
      };

    default:
      return state;
  }
};
export default productReducer;
