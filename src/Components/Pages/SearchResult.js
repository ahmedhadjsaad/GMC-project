import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../JS/actions/actions";
import { addToWishlist } from "../../JS/actions/actions";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";



const SearchResult = () => {
  const productList = useSelector((state) => state.productReducer.products);
  const keyword = useSelector((state) => state.productReducer.keyword);
  const dispatch = useDispatch()

  return (
    <div className="pd-list">
      {productList
        .filter((el) => el.Name.toUpperCase().includes(keyword.toUpperCase()))
        .map((el) => (
          <div className="pd-list-map">
            <img src={el.Image} alt="" />
            <h5> {el.Name} </h5>
            <h4> {el.Prix} TND </h4>
            <div className="btn-shop-pd">
              <div onClick={() => dispatch(addToCart(el))} className="bouton_4">
                <AddShoppingCartIcon style={{ fontSize: 40, color: "white" }} />
                <span className="texteduboutton_4">Add to cart</span>
              </div>
              <div
                onClick={() => dispatch(addToWishlist(el))}
                className="bouton_4"
              >
                <FavoriteBorderIcon style={{ fontSize: 40, color: "white" }} />
                <span className="texteduboutton_4">Add to Wishlist</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchResult;
