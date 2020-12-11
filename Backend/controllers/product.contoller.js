const config = require('config')

const Products = require('../model/Products')

exports.addProducts =async (req, res) => {
    try {
        console.log(req.body)
      const newProduct = new Products({
        Category: req.body.Category,
        Name: req.body.Name,
        Image: req.body.Image,
        Prix: req.body.Prix,
        Rating: req.body.Rating,
        Qtn: req.body.Qtn,
      });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errors: error });
    }
  };

  exports.findProducts=async (req, res) => {
    try {
      const product = await Products.find();
      res.json(product);
    } catch (error) {
      console.error(error);
      res.json(error);
    }
  };

  exports.deleteProduct=async(req,res)=>{
    const {id} = req.params;
    try {
      await Products.deleteOne({_id : id})
      res.json('Product deleted')
    } catch (error) {
      console.log(error)
      res.json(error)
    }
  }

  exports.updateProduct=async(req,res)=>{
    const {id} = req.params;
    const {Category,Name,Image,Prix,Rating} = req.body
    try {
      const editProduct = {
        Category,
        Name,
        Image,
        Prix,
        Rating,
      }
      const editRes = await Products.findByIdAndUpdate(id , editProduct)
      res.json(editRes)
    } catch (error) {
      console.error(error)
      res.json(error)
    }
  }
  
