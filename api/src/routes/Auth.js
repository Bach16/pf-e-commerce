const express = require("express");
const {
  controllerAuth,
  tokenValidator,
  logOut,
} = require("../controllers/authController");

const router = express.Router();

console.log(tokenValidator);

router.get("/login", (req, res) => {
  controllerAuth(req, res);
});

router.get("/callback", (req, res) => {
  tokenValidator(req, res);
});

router.get("/logout", (req, res) => {
  logOut(req, res);
});

module.exports = router;
