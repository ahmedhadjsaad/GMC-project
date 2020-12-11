import { combineReducers } from "redux";
import cartReducer from "./cartReducers";
import commandeReducer from "./commandeReducer";
import productReducer from "./productReducers";
import userReducer from "./userReducer";

export default combineReducers({
  productReducer: productReducer,
  cartReducer: cartReducer,
  userReducer: userReducer,
  commandeReducer :commandeReducer
});
