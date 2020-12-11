import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { addCommande, getProfile } from "../../JS/actions/actions";

const Procede = (props) => {
  const total = useSelector((state) => state.productReducer.total);
  const [checkOut, setCheckOut] = useState(false);
  const [checkLiv, setCheckLiv] = useState(false);
  const [name, setName] = useState();
  const [familyName, setFamilyName] = useState();
  const [adresse, setAdresse] = useState();
  const [codePostal, setCodePostal] = useState();
  const [phoneNumber, setphoneNumber] = useState();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  useEffect(() => {
    if (isAuth) {
      setName(isAuth.name);
      setFamilyName(isAuth.familyName);
    }
  }, [isAuth]);

  const commandeFn = (e) => {
    e.preventDefault();
    dispatch(
      addCommande({
        name,
        familyName,
        adresse,
        codePostal,
        phoneNumber,
        total,
        cartItems,
      })
    );
    setCheckLiv(true);
  };

  return !isAuth ? (
    <Redirect to="/Login" />
  ) : (
    <div>
      <div>
        <h1> {isAuth.name} </h1>
        <h1> {isAuth.familyName} </h1>
      </div>
      <div className="lg-ctn">
        <h4> Commander </h4>
        <input
          value={name}
          class="ant-input form-control"
          type="text"
          placeholder="Name ..."
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          value={familyName}
          class="ant-input form-control"
          type="text"
          placeholder="Family Name ..."
          onChange={(e) => setFamilyName(e.target.value)}
        ></input>
        <input
          class="ant-input form-control"
          type="text"
          placeholder="Adresse ..."
          onChange={(e) => setAdresse(e.target.value)}
        ></input>
        <input
          class="ant-input form-control"
          type="text"
          placeholder="Code Postal ..."
          onChange={(e) => setCodePostal(e.target.value)}
        ></input>
        <input
          class="ant-input form-control"
          type="text"
          placeholder="Phone number ..."
          onChange={(e) => setphoneNumber(e.target.value)}
        ></input>
        <button onClick={() => setCheckOut(!checkOut)} className="btn-login">
          {" "}
          Confirmer{" "}
        </button>
      </div>
      {checkOut && (
        <div>
          <h1> Name : {name} </h1>
          <h1> Family Name : {familyName} </h1>
          <h1> Adresse : {adresse} </h1>
          <h1> Phone Number : {phoneNumber} </h1>
          <h1> Total : {total} </h1>
          <button className="btn-login" onClick={commandeFn}>
            {" "}
            Commander{" "}
          </button>
        </div>
      )}
      {checkLiv && (
        <div>
          <h1> Votre livraison sera bientot livré </h1>
        </div>
      )}
    </div>
  );
};

export default Procede;
