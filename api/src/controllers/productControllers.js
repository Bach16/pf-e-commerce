const axios = require("axios");
const productSchema = require("../models/Product");

const getProduct = async (req, res) => {
  const { model } = req.query;
  const product = await productSchema.find();

  try {
    if (model) {
      let productModel = product.filter((prod) =>
        prod.model.toLowerCase().includes(model.toLowerCase())
      );

      productModel.length
        ? res.status(200).json(productModel)
        : res.status(201).json("Not found");
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.send(`Error ${error}`);
  }
};

const postProduct = async (req, res) => {
  let { trademark, stock, price, size, description, type, categorie } =
    req.body;

  const productCreate = await productSchema.findOne({
    where: { trademark: trademark },
  });

  if (productCreate) {
    return res.status(403).send("The product already exist");
  } else {
    let ProductCreated = await productSchema.create({
      trademark,
      stock,
      price,
      size,
      description,
      type,
      categorie,
    });

    return res.status(200).send("The product was successfully created");
  }
};

const getIdProduct = async (req, res) => {
  const { id } = req.params;

  productSchema
    .findById(id)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error}` }));
};

const getTradeMarkProduct = async (req, res) => {
  const { trademark } = req.params;

  productSchema
    .findBy(trademark)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error}` }));
};

const putProduct = async (req, res) => {
  const { id } = req.params;

  const { trademark, stock, price, size, description, type, categorie } =
    req.body;

  productSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          trademark,
          stock,
          price,
          size,
          description,
          type,
          categorie,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const deleteProduct = async (req, res) => {
  const { active } = req.body;
  const { id } = req.params;

  productSchema
    .updateOne({ _id: id }, { $set: { active } })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
};

module.exports = {
  getProduct,
  getIdProduct,
  postProduct,
  putProduct,
  deleteProduct,
  getTradeMarkProduct,
};
