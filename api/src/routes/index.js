const { Router } = require("express");
const router = Router();

const productRouter = require("./Product");

router.use("/product", productRouter);

module.exports = router;
