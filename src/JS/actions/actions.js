import {
  ADD_COMMANDE,
  ADD_COMMANDE_FAIL,
  ADD_COMMANDE_SUCCESS,
  ADD_PRODUCT,
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  DECREMENT,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  FETCH_COMMANDES,
  FETCH_COMMANDES_FAIL,
  FETCH_COMMANDES_SUCCESS,
  FETCH_FAIL,
  FETCH_PRODUCTS,
  FETCH_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  GET_TOTAL,
  INCREMENT,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_USER,
  LOG_OUT,
  RATE_FAIL,
  RATE_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
  SEARCH,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_SUCCESS,
  USER_TOTAL,
  USER_TOTAL_FAIL,
  USER_TOTAL_SUCCESS,
} from "../constants/actions-types";
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get("/product");
  dispatch({
    type: FETCH_PRODUCTS,
  });
  try {
    dispatch({
      type: FETCH_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_FAIL,
      // payload: error.response.data,
    });
  }
};

export const fetchCommande = () => async (dispatch) => {
  const res = await axios.get("/Commande");
  dispatch({
    type: FETCH_COMMANDES,
  });
  try {
    dispatch({
      type: FETCH_COMMANDES_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_COMMANDES_FAIL,
    });
  }
};

export const getTotal = (total) => (dispatch) => {
  dispatch ({
    type : GET_TOTAL,
    payload : total
  })
}

export const addProduct = (newProduct) => async (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,
  });
  try {
    const result = await axios.post("/product", newProduct);
    dispatch({
      type: ADD_PRODUCT_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_FAIL,
    });
  }
};

export const addCommande = (newCommande) => async (dispatch) => {
  dispatch({
    type: ADD_COMMANDE,
  });
  try {
    const res = await axios.post("/Commande", newCommande);
    dispatch({
      type: ADD_COMMANDE_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: ADD_COMMANDE_FAIL,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_PRODUCT,
  });
  try {
    const res = await axios.delete(`/product/${id}`);
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
    });
  }
};

export const updateProduct = (id, upProduct) => async (dispatch) => {
  dispatch({
    type: UPDATE_PRODUCT,
  });
  try {
    const res = await axios.post(`/product/${id}`, upProduct);
    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
    });
  }
};

export const addToCart = (product) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const rateProduct = (newRate) => async (dispatch) => {
  try {
    const res = await axios.post("/Rating", newRate);
    dispatch({
      type: RATE_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: RATE_FAIL,
    });
  }
};

export const addToWishlist = (product) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_WISHLIST,
    payload: product,
  });
  localStorage.setItem(
    "cartWishlist",
    JSON.stringify(getState().cartReducer.cartWishlist)
  );
};

export const removeFromCart = (_id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: _id,
  });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const removeFromWishlist = (_id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_WISHLIST,
    payload: _id,
  });
  localStorage.setItem(
    "cartWishlist",
    JSON.stringify(getState().cartReducer.cartWishlist)
  );
};

export const incrementFn = (el) => (dispatch, getState) => {
  dispatch({
    type: INCREMENT,
    payload: el,
  });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const decrementFn = (el) => (dispatch, getState) => {
  dispatch({
    type: DECREMENT,
    payload: el,
  });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const register = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER_USER,
  });
  try {
    const addRes = await axios.post("/Register", newUser);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: addRes.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      // payload: error.response.data,
    });
  }
};

export const login = (cred) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });
  try {
    const loginRes = await axios.post("/Login", cred);
    localStorage.setItem("token", loginRes.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: loginRes.data,
    });
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: GET_PROFILE,
  });
  try {
    const isAuth = await axios.get("/current", config);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: isAuth.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};

export const userTotal = () => async (dispatch) => {
  dispatch({
    type : USER_TOTAL
  })
  try {
    const userTot = await axios.get('/usersTotal')
    console.log('userTot', userTot.data)
    dispatch({
      type : USER_TOTAL_SUCCESS,
      payload : userTot.data
    })
  } catch (error) {
    dispatch({
      type : USER_TOTAL_FAIL,
      payload: error.response.data,

    })
  }
}

export const logout = () => (dispatch) => {
  dispatch({
    type: LOG_OUT,
  });
  localStorage.removeItem("token");
};

export const search = (s) => (dispatch) => {
  dispatch({
    type: SEARCH,
    payload: s,
  });
};
