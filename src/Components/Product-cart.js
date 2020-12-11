import { Modal } from "@material-ui/core";
import React, { useState, useEffect } from "react";
// import "antd/dist/antd.css";
import { useDispatch } from "react-redux";

import { fetchProducts, updateProduct } from "../JS/actions/actions";

const Product = ({ product: { Category, Image, Name, Prix, Rating, _id } }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [CategoryU, setCategoryU] = useState();
  const [NameU, setNameU] = useState();
  const [ImageU, setImageU] = useState();
  const [PrixU, setPrixU] = useState();
  const [RatingU, setRatingU] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setCategoryU(Category);
    setNameU(Name);
    setImageU(Image);
    setPrixU(Prix);
    setRatingU(Rating);
  }, []);
  const renderModal = () => {
    return (
        <Modal
          open={show}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div>
          <input
            value={CategoryU}
            type="text"
            placeholder="category..."
            onChange={(e) => setCategoryU(e.target.value)}
          />
          <input
            value={NameU}
            type="text"
            placeholder="name..."
            onChange={(e) => setNameU(e.target.value)}
          />
          <input
            value={ImageU}
            type="text"
            placeholder="image..."
            onChange={(e) => setImageU(e.target.value)}
          />
          <input
            value={PrixU}
            type="text"
            placeholder="prix..."
            onChange={(e) => setPrixU(e.target.value)}
          />
          <input
            value={RatingU}
            type="text"
            placeholder="rating..."
            onChange={(e) => setRatingU(e.target.value)}
          />
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button
            variant="primary"
            onClick={() => {
              dispatch(
                updateProduct(_id, {
                  Category: CategoryU,
                  Image: ImageU,
                  Name: NameU,
                  Prix: PrixU,
                  Rating: RatingU,
                })
              );

              handleClose();
              dispatch(fetchProducts());
            }}
          >
            Save Changes
          </button>
          </div>
        </Modal>
    );
  };

  console.log("Image", Image);
  return (
    <div>
      <div>
        <img src={Image} alt="" />
        <h3>{Name}</h3>
        <h3>{Prix} TND </h3>
      </div>
      {show && renderModal(handleShow, show, handleClose)}
      <button onClick={handleShow}>Update</button>
    </div>
  );
};

export default Product;




{/* <Card
      cover={
        <img
          src={
            product.images && product.images.length ? product.images[0].url : ""
          }
          style={{ height: "150px", objectFit: "cover" }}
          className="p-1"
        />
      }
      actions={[
        <Link to={`/product/${product.slug}`}>
          <EyeOutlined />
          <br /> View Product
        </Link>,
        <Tooltip title={tooltip}>
          <a onClick={handleAddToCart}>
            {" "}
            <ShoppingCartOutlined />
            <br /> Add to Cart
          </a>
          ,
        </Tooltip>,
      ]}
    >
      {" "}
      <Meta
        title={product.title}
        description={`${
          product.description && product.description.substring(0, 10)
        }...`}
      />
    </Card> */}