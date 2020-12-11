import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { addToCart } from "../../JS/actions/actions";
import Rating from "@material-ui/lab/Rating";
import { Modal } from "@material-ui/core";

const Visage = (props) => {
  const productList = useSelector((state) => state.productReducer.products);
  const [valueRate, setValueRate] = useState();
  const [productId, setProductId] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setProductId(id);
    setShow(true);
  };

  const dispatch = useDispatch();

  const renderModal = () => {
    return (
      <Modal
        className="modal-modal"
        open={show}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <div className="popupdiv">
            <div>
              <h1>{productId.Name}</h1>
              <img
                style={{ height: "200px", width: "100px" }}
                src={productId.Image}
                alt=""
              />
            </div>
          </div>
        </div>
      </Modal>
    );
  };

  return (
    <div className="visage-ctn">
      <div className="bg-ctn">
        <h1> Visage </h1>
        <div className="dis-more">
          <h1
            style={{ cursor: "pointer" }}
            onClick={() => props.history.push("/Category" + "/Visage")}
          >
            {" "}
            Se more{" "}
          </h1>
          <i
            onClick={() => props.history.push("/Category" + "/Visage")}
            class="fas fa-angle-right"
          ></i>
        </div>
      </div>
      <div className="visage-grid">
        <div className="ul-ctn">
          <ul className="ul-produits">
            <li className="li-produit">Nettoyant & Démaquillant</li>
            <li className="li-produit">Soin Anti-Âge</li>
            <li className="li-produit">Hydratation Et Nutrition</li>
            <li className="li-produit">Anti-Tache , Dépigmentant</li>
            <li className="li-produit">Yeux</li>
            <li className="li-produit">Lèvres</li>
            <li className="li-produit">Cicatrices</li>
          </ul>
        </div>
        <div className="image-ctn">
          <img
            className="Image-main"
            src="https://parapharmacieplus.tn/modules/poslistcateproduct/images/158d70f1d5e08f3caa69186d8b14b9f43d243585_visage_categ.jpg"
            alt=""
          />
        </div>
        <div className="product-ctn">
          <div className="product-grid-main">
            {productList
              .slice(
                productList.findIndex((item) => item.Category === "Visage") + 3
              )
              .filter((el) => el.Category === "Visage")
              .map((el) => (
                <div className="map-ctn-main">
                  <img onClick={() => handleShow(el)} src={el.Image} alt="" />
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
          {show && renderModal(handleShow, show, handleClose)}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Visage);
