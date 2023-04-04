const bcryptjs = require("bcryptjs");
const Product = require("../models/Product");
const User = require("../models/User");
const userSchema = require("../models/User");
const { validateCreate } = require("../validators/Users");
