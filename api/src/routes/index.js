const { Router } = require("express");
const router = Router();

const productRouter = require("./Product");
const userRoutes = require("./Users");
const contactRoutes = require("./ContactUs");

router.use("/cloth", productRouter);
router.use("/users", userRoutes);
router.use("/contact", contactRoutes);

module.exports = router;
