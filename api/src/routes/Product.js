const express = require("express");
const router = express.Router();
const {
  getProduct,
  getIdProduct,
  postProduct,
} = require("../controllers/productControllers");

router.post("/", (req, res) => {
  postProduct(req, res);
});

router.get("/", (req, res) => {
  getProduct(req, res);
});

router.get("/product/:id", (req, res) => {
  getIdProduct(req, res);
});

module.exports = router;
