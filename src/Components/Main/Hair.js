import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { addToCart } from "../../JS/actions/actions";
import Rating from "@material-ui/lab/Rating";


const Hair = (props) => {
  const productList = useSelector((state) => state.productReducer.products);
  const [valueRate, setValueRate] = useState();

  const dispatch = useDispatch();

  return (
    <div className="visage-ctn">
      <div className="bg-ctn">
        <h1> Hair </h1>
        <div className="dis-more">
          <h1
            style={{ cursor: "pointer" }}
            onClick={() => props.history.push("/Category" + "/Hair")}
          >
            {" "}
            Se more{" "}
          </h1>
          <i
            onClick={() => props.history.push("/Category" + "/Hair")}
            class="fas fa-angle-right"
          ></i>
        </div>
      </div>
      <div className="visage-grid">
        <div className="ul-ctn">
          <ul className="ul-produits">
            <li className="li-produit">Shampooing</li>

            <li className="li-produit">Après Shampooing</li>
            <li className="li-produit">Masque</li>
            <li className="li-produit">Coloration</li>
            <li className="li-produit">Huiles Et Sérums</li>
            <li className="li-produit">Soins Cheveux</li>
            <li className="li-produit">Compléments Allimentaires</li>
          </ul>
        </div>
        <div className="image-ctn">
          <img
            className="Image-main"
            src="https://img.ohmymag.com/article/cheveux/avoir-des-cheveux-sains-utilisez-des-produits-capillaires-sans-sulfate_48b7689f3eb10ccbc8c68fdd1f80c2e058f9c260.jpg"
            alt=""
          />
        </div>
        <div className="product-ctn">
          <div className="product-grid-main">
            {productList
              .slice(productList.findIndex((item) => item.Category === "Hair"))
              .filter((el) => el.Category === "Hair")
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
                    {" "}
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

export default withRouter(Hair);
