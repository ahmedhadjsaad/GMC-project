import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../JS/actions/actions";
import { getProfile } from "../../JS/actions/actions";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userReducer.loading);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const token = useSelector((state) => state.userReducer.token);

  useEffect(() => {
    dispatch(getProfile());
  }, [token]);

  const signIn = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );
  };
  {console.log('isAuth', isAuth)}
  return isAuth ? (
    isAuth.role === "admin" ? (
      <Redirect to="/Dashboard" />
    ) : (
      <Redirect to="/" />
    )
  ) : loading ? (
    <h1>
      {" "}
      <Backdrop className={classes.backdrop} open>
        <CircularProgress color="inherit" />
      </Backdrop>
    </h1>
  ) : (
    <div className="login-ctn">
      {/* {console.log("isAuth", isAuth)}{" "} */}
      <div className="login-register">
        <h1> Login</h1>
        <h1 onClick={() => props.history.push("/Register")}>Register</h1>
      </div>
      <div className="lg-ctn">
        <h4> Log in your account </h4>
        <input
          class="ant-input form-control"
          type="text"
          placeholder="Email address ..."
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          class="ant-input form-control"
          type="password"
          placeholder="Password ..."
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={signIn} className="btn-login">
          {" "}
          Login{" "}
        </button>
      </div>
    </div>
  );
};

export default withRouter(Login);
