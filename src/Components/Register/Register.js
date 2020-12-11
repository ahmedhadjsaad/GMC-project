import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../JS/actions/actions";
import { Redirect } from "react-router-dom";

const Register = (props) => {
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Signup = (e) => {
    e.preventDefault();
    dispatch(
      register({
        name,
        familyName,
        email,
        password,
      })
    );
  };

  return (
    <div>
      {loading ? (
        <h1> please wait .. </h1>
      ) : user ? (
        <Redirect to="/Login" />
      ) : (
        <div>
          <div className="login-register">
            <h1 onClick={() => props.history.push("/Login")}> Login</h1>
            <h1>Register</h1>
          </div>
          <div className="lg-ctn">
            <h4> Register an account </h4>
            <input
              class="ant-input form-control"
              type="text"
              placeholder="Name ..."
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              class="ant-input form-control"
              type="text"
              placeholder="Family Name ..."
              onChange={(e) => setFamilyName(e.target.value)}
            ></input>
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
            <button onClick={Signup} className="btn-login">
              {" "}
              Register{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Register);
