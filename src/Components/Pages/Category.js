import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { addToCart } from "../../JS/actions/actions";
import { addToWishlist } from "../../JS/actions/actions";
import Rating from "@material-ui/lab/Rating";

const Category = (props) => {
  const [products, setProducts] = useState([]);
  const [valueRate, setValueRate] = useState();
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    setProducts(
      productList.filter((el) => el.Category === props.match.params.Category)
    );
  }, [productList]);
  return (
    <div className="pd-ctn">
      <div className="pd-cat">{/* <h2> {products[0].Category} </h2> */}</div>
      <div className="pd-img"></div>
      <div className="nb-produits">
        <h2>
          {" "}
          There is {``}
          {products.length} {``}
          Products
        </h2>
      </div>
      <div className="pd-list">
        {loading ? (
          <h1>plz loading</h1>
        ) : (
          products.map((el) => (
            <div className="pd-list-map">
              <img src={el.Image} alt="" />
              <h5> {el.Name} </h5>
              <div className="Rating">
                <Rating
                  onChange={(e) => setValueRate(e.target.value)}
                  defaultValue={el.Rating}
                  size="large"
                />
              </div>
              <h4> {el.Prix} TND </h4>
              <div className="btn-shop-pd">
                <div
                  onClick={() => dispatch(addToCart(el))}
                  className="bouton_4"
                >
                  <AddShoppingCartIcon
                    style={{ fontSize: 40, color: "white" }}
                  />
                  <span className="texteduboutton_4">Add to cart</span>
                </div>
                <div
                  onClick={() => dispatch(addToWishlist(el))}
                  className="bouton_4"
                >
                  <FavoriteBorderIcon
                    style={{ fontSize: 40, color: "white" }}
                  />
                  <span className="texteduboutton_4">Add to Wishlist</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Category;
