import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { addToCart } from "../../JS/actions/actions";
import Rating from "@material-ui/lab/Rating";

const Solaire = (props) => {
  const productList = useSelector((state) => state.productReducer.products);
  const [valueRate, setValueRate] = useState();
  const dispatch = useDispatch();

  return (
    <div className="visage-ctn">
      <div className="bg-ctn">
        <h1> Solaire </h1>
        <div className="dis-more">
          <h1
            style={{ cursor: "pointer" }}
            onClick={() => props.history.push("/Category" + "/Solaire")}
          >
            {" "}
            Se more{" "}
          </h1>
          <i
            onClick={() => props.history.push("/Category" + "/Solaire")}
            class="fas fa-angle-right"
          ></i>
        </div>
      </div>
      <div className="visage-grid">
        <div className="ul-ctn">
          <ul className="ul-produits">
            <li className="li-produit">Autobronzant</li>
            <li className="li-produit">Après-solaire</li>
            <li className="li-produit">Protection solaire enfant</li>
            <li className="li-produit">Maquillage solaire</li>
            <li className="li-produit">Protection solaire lèvres</li>
            <li className="li-produit">Indice solaire fort 40 à 50+</li>
            <li className="li-produit">Indice solaire faible SPF15</li>
            <li className="li-produit">Indice solaire moyen 20 à 30</li>
          </ul>
        </div>
        <div className="image-ctn">
          <img
            className="Image-main"
            src="https://www.publicdomainpictures.net/pictures/230000/nahled/sunscreen.jpg"
            alt=""
          />
        </div>
        <div className="product-ctn">
          <div className="product-grid-main">
            {productList
              .slice(
                productList.findIndex((item) => item.Category === "Solaire") + 3
              )
              .filter((el) => el.Category === "Solaire")
              .map((el) => (
                <div className="map-ctn-main">
                  <img src={el.Image} alt="" />
                  <p className="name-product">{el.Name}</p>
                  <div className="rating-product">
                    <Rating
                      onChange={(e) => setValueRate(e.target.value)}
                      defaultValue={el.Rating}
                      size="large"
                    />
                  </div>
                  <p className="price-product">{el.Prix} TND </p>
                  <button
                    onClick={() => dispatch(addToCart(el))}
                    className="btn-add-cart"
                  >
                    ADD TO CART
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Solaire);
