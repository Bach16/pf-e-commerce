const express = require("express");
const router = express.Router();
const {
  getProduct,
  getIdProduct,
  postProduct,
  putProduct,
  deleteProduct,
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

router.put("/:id", (req, res) => {
  putProduct(req, res);
});

router.delete("/:id", (req, res) => {
  deleteProduct(req, res);
});

module.exports = router;
