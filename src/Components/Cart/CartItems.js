import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTotal,
  rateProduct,
  removeFromCart,
} from "../../JS/actions/actions";
import { incrementFn } from "../../JS/actions/actions";
import { decrementFn } from "../../JS/actions/actions";
import Vide from "../../Images/empty.png";
import Rating from "@material-ui/lab/Rating";
import { withRouter } from "react-router-dom";

const CartItems = (props) => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const [valueRate, setValueRate] = useState(0);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    subTotal();
  }, [cartItems]);

  const subTotal = () => {
    if (
      cartItems.map((el) => el.Qtn * el.Prix).reduce((a, b) => a + b, 0) === 0
    ) {
      setTotal(0);
    } else {
      setTotal(
        cartItems.map((el) => el.Qtn * el.Prix).reduce((a, b) => a + b, 0) < 50
          ? cartItems.map((el) => el.Qtn * el.Prix).reduce((a, b) => a + b, 0) +7
              
          : cartItems.map((el) => el.Qtn * el.Prix).reduce((a, b) => a + b, 0)
      );
    }
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="Panier-vide">
          <img className="Image-panier-vide" src={Vide} alt="" />
          <h3> Votre panier est vide </h3>
        </div>
      ) : (
        <div className="panier-grid">
          <div className="panier-ctn">
            <h1> Panier</h1>
            {cartItems.map((el) => (
              <div className="pr-ctn">
                <div className="Article-panier">
                  <img src={el.Image} alt="" />
                  <h2> {el.Name} </h2>
                </div>
                <div className="prix-ctn">
                  <h3> {el.Prix} TND </h3>
                </div>
                <div className="stepper-input">
                  <a
                    className="decrement"
                    onClick={() => dispatch(decrementFn(el))}
                  >
                    –
                  </a>
                  <h1 className="quantity"> {el.Qtn < 2 ? 1 : el.Qtn} </h1>
                  <a
                    className="increment"
                    onClick={() => dispatch(incrementFn(el))}
                  >
                    +
                  </a>
                </div>
                <div className="prix-ctn">
                  <h3>{el.Qtn * el.Prix} TND</h3>
                </div>
                <i
                  onClick={() => dispatch(removeFromCart(el._id))}
                  class="fas fa-trash-alt"
                ></i>
              </div>
            ))}
          </div>
          <div className="total-ctn">
            <h1> Accueil</h1>
            <div className="article-panier">
              <h4>{cartItems.length} articles </h4>
            </div>
            <div className="Livraison-panier">
              <h4>Livraison :</h4>
              <h2>
                {cartItems
                  .map((el) => el.Qtn * el.Prix)
                  .reduce((a, b) => a + b, 0) > 50
                  ? "Livraison gratuite"
                  : "7 TND"}
              </h2>
            </div>
            <div className="total-panier">
              <h4>Total : </h4>
              <h2>{total} TND</h2>
            </div>
            <div>
              {!isAuth ? (
                ""
              ) : (
                <div className="dn-rating">
                  <h4> Donner votre avis</h4>
                  <div className="Rating">
                    <Rating
                      onChange={(e) => {
                        setValueRate(e.target.value);
                        dispatch(
                          rateProduct({
                            senderName: isAuth.name,
                            senderFamilyName : isAuth.familyName,
                            rateValue: valueRate,
                          })
                        );
                      }}
                      defaultValue={valueRate}
                      size="large"
                    />
                  </div>
                </div>
              )}
              <button
                onClick={() => {
                  props.history.push("/Procede");
                  dispatch(getTotal(total));
                }}
                className="btn-paiement"
              >
                PROCEDER AU PAIEMENT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(CartItems);
