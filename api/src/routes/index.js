const { Router } = require("express");
const router = Router();

const productRouter = require("./Product");
const userRoutes = require("./Users");
const contactRoutes = require("./ContactUs");
const reviewRoutes = require("./Review");

router.use("/cloth", productRouter);
router.use("/users", userRoutes);
router.use("/contact", contactRoutes);
router.use("/review", reviewRoutes);

module.exports = router;
