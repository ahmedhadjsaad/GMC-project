import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfile, logout } from "../../JS/actions/actions";
import { search } from "../../JS/actions/actions";

const Header = (props) => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const cartWishlist = useSelector((state) => state.cartReducer.cartWishlist);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const [Open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <div className="header-ctn">
      <div className="header-1">
        <div className="title-projet">
          <h1 onClick={() => props.history.push("/")}> SANTÉ FOR LIFE </h1>
        </div>
        <div className="search">
          <input
            onChange={(e) => dispatch(search(e.target.value))}
            className="input-search"
            type="text"
            placeholder="I'am shopping for ..."
          />
          {props.location.pathname !== "/Search" && (
            <button
              onClick={() => props.history.push("/Search")}
              className="btn-search"
            >
              {" "}
              Search{" "}
            </button>
          )}
        </div>
        <div className="wishlist">
          <i
            onClick={() => props.history.push("/Wishlist")}
            class="far fa-heart"
          ></i>
          <span
            onClick={() => props.history.push("/Wishlist")}
            className="nombreWilshit"
          >
            {cartWishlist.length}
          </span>
        </div>
        <div className="panier">
          <i
            onClick={() => props.history.push("/Cart")}
            class="fas fa-shopping-cart"
          ></i>
          <span
            onClick={() => props.history.push("/Cart")}
            className="nombreProduit"
          >
            {" "}
            {cartItems.length}{" "}
          </span>
        </div>
        <div className="user">
          <i class="far fa-user"></i>
          <div>
            {JSON.parse(localStorage.getItem("token") === null) ? (
              <h3 onClick={() => props.history.push("/Login")}> Login</h3>
            ) : (
              <h3
                onClick={() => {
                  dispatch(logout());
                  props.history.push("/");
                }}
              >
                {" "}
                Logout{" "}
              </h3>
            )}
            {/* <h3> {!isAuth ? "" :isAuth.name} </h3> */}
            <h3 onClick={() => props.history.push("/Register")}>Register</h3>
          </div>
        </div>
      </div>
      <div className="header-2">
        <div className="Catégories-container">
          <div className="shop-by-cat">
            <h2 onClick={() => setOpen(!Open)}>
              {" "}
              <i class="fas fa-bars"></i> Shop by Category
            </h2>
          </div>
          <div>
            {Open && (
              <div className="Drop-Menu-Cat">
                <h3>Materiels Medicals</h3>
                <h3>Santé et Beauté</h3>
                <h3>Bébé et Maman</h3>
                <h3>Visage</h3>
                <h3>Solaire</h3>
                <h3>Chaussures</h3>
                <h3>Nature et Bio</h3>
                <h3>Soin de corps</h3>
                <h3>Cheveux</h3>
              </div>
            )}
          </div>
        </div>
        <h3>
          {" "}
          <i class="fas fa-home"></i> Home{" "}
        </h3>
        <h3> New </h3>
        <h3> Promotions </h3>
        <h3> Marques </h3>
        <h3> Contact </h3>
      </div>
    </div>
  );
};

export default withRouter(Header);
