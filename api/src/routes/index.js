const { Router } = require("express");
const router = Router();

const productRouter = require("./Product");
const userRoutes = require("./Users");
const contactRoutes = require("./ContactUs");
const reviewRoutes = require("./Review");
const authRouter = require("./Auth");

router.use("/cloth", productRouter);
router.use("/users", userRoutes);
router.use("/contact", contactRoutes);
router.use("/auth", authRouter);
router.use("/review", reviewRoutes);

module.exports = router;
