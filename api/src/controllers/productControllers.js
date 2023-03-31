const axios = require("axios");
const productSchema = require('../models/Product');


const getProduct = async (req, res) => {
    const {model} = req.query
    const product = await productSchema.find()

    try {
      if (model) {
        let productModel = product.filter()
      } else {
        
      }
    } catch (error) {
      res.send(`Error ${error}`)
    }
  };

 
  