import {
  ADD_COMMANDE_SUCCESS,
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  DECREMENT,
  INCREMENT,
  LOG_OUT,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
} from "../constants/actions-types";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || "[]",
  cartWishlist: JSON.parse(localStorage.getItem("cartWishlist")) || "[]",
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const index = state.cartItems.findIndex((el) => el._id === payload._id);
      if (index !== -1) {
        return state;
      }
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };

    case ADD_TO_WISHLIST:
      const indexWishlist = state.cartWishlist.findIndex(
        (el) => el._id === payload._id
      );
      if (indexWishlist !== -1) {
        return state;
      }
      return {
        ...state,
        cartWishlist: [...state.cartWishlist, payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((el) => el._id != payload),
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        cartWishlist: state.cartWishlist.filter((el) => el._id != payload),
      };

    case INCREMENT:
      console.log("payload.Qtn", payload.Qtn);
      const elementsIndex = state.cartItems.findIndex(
        (item) => item._id === payload._id
      );
      let newArray = [...state.cartItems];
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        Qtn: newArray[elementsIndex].Qtn + 1,
      };
      return {
        ...state,
        cartItems: newArray,
      };

    case DECREMENT:
      if (state.cartItems.filter((el) => el._id == payload._id)[0].Qtn != 1) {
        const ElementsIndex = state.cartItems.findIndex(
          (item) => item._id === payload._id
        );
        let newArrayD = [...state.cartItems];
        newArrayD[ElementsIndex] = {
          ...newArrayD[ElementsIndex],
          Qtn: newArrayD[ElementsIndex].Qtn - 1,
        };
        return {
          ...state,
          cartItems: newArrayD,
        };
      }
    case ADD_COMMANDE_SUCCESS:
      return {
        ...state,
        cartItems: [],
      };
    case LOG_OUT : 
    return {
      ...state,
      cartItems : []
    }  
    default:
      return state;
  }
};

export default cartReducer;
