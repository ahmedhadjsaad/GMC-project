import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromWishlist } from "../../JS/actions/actions";
import Vide from "../../Images/empty.png";
import { withRouter } from "react-router-dom";

const CartWishList = (props) => {
  const cartWishlist = useSelector((state) => state.cartReducer.cartWishlist);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    subTotal();
  }, [cartWishlist]);

  const subTotal = () => {
    if (
      cartWishlist.map((el) => el.Qtn * el.Prix).reduce((a, b) => a + b, 0) ===
      0
    ) {
      setTotal(0);
    } else {
      setTotal(
        cartWishlist.map((el) => el.Qtn * el.Prix).reduce((a, b) => a + b, 0) >
          50
          ? cartWishlist
              .map((el) => el.Qtn * el.Prix)
              .reduce((a, b) => a + b, 0) - 7
          : cartWishlist
              .map((el) => el.Qtn * el.Prix)
              .reduce((a, b) => a + b, 0)
      );
    }
  };
  return (
    <div>
      {cartWishlist.length === 0 ? (
        <div className="Panier-vide">
          <img className="Image-panier-vide" src={Vide} alt="" />
          <h3> Votre carte Wishlist est vide </h3>
        </div>
      ) : (
        <div className="panier-grid">
          <div className="panier-ctn">
            <h1> Wishlist </h1>
            {cartWishlist.map((el) => (
              <div className="pr-ctn">
                <div className="Article-panier">
                  <img src={el.Image} alt="" />
                  <h2> {el.Name} </h2>
                </div>
                <div className="prix-ctn">
                  <h3> {el.Prix} TND </h3>
                </div>
                <div>
                  <button
                    onClick={() => dispatch(addToCart(el))}
                    className="btn-add-cart-wishlist"
                  >
                    {" "}
                    ADD TO CART
                  </button>
                </div>
                <div className="prix-ctn">
                  <h3>{el.Qtn * el.Prix} TND</h3>
                </div>
                <i
                  onClick={() => dispatch(removeFromWishlist(el._id))}
                  class="fas fa-trash-alt"
                ></i>
              </div>
            ))}
          </div>
          <div className="total-ctn">
            <h1> Accueil</h1>
            <div className="article-panier">
              <h4>{cartWishlist.length} articles </h4>
            </div>
            <div className="Livraison-panier">
              <h4>Livraison :</h4>
              <h2>
                {cartWishlist
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
              <button
                onClick={() => props.history.push("/Cart")}
                className="btn-paiement"
              >
                PANIER
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(CartWishList);
