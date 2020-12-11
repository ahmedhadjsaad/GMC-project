const express = require("express");
const { addProducts, findProducts, deleteProduct, updateProduct } = require("../controllers/product.contoller");
const Products = require("../model/Products");

const Router = express.Router();

Router.post('/', addProducts )

Router.get(`/`, findProducts)

Router.delete('/:id' , deleteProduct)

Router.post('/:id' , updateProduct)

module.exports = Router;
