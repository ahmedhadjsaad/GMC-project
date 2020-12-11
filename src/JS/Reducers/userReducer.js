import {
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_USER,
  LOG_OUT,
  RATE_FAIL,
  RATE_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
  USER_TOTAL,
  USER_TOTAL_SUCCESS,
} from "../constants/actions-types";

const initialState = {
  loading: false,
  user: null,
  errors: null,
  usersTotal : 0
  
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: payload,
      };
    case LOG_OUT:
      localStorage.setItem("cartItems", "[]");
      return {
        ...state,
        isAuth: null,
        role : null,
        token: null,
      };
      case RATE_SUCCESS : 
      return {
        ...state,
        loading : false,
        ratingSuccess : payload
      }
      case RATE_FAIL : 
      return {
        ...state,
        loading : false,
      }
      case USER_TOTAL : 
      return {
        ...state,
        loading : true
      }
      case USER_TOTAL_SUCCESS : 
      return {
        ...state,
        loading : false,
        usersTotal : payload
      }
      

    default:
      return state;
  }
};

export default userReducer;
