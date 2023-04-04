const bcryptjs = require("bcryptjs");
const Product = require("../models/Product");
const User = require("../models/User");
const userSchema = require("../models/User");
const { validateCreate } = require("../validators/Users");
const { eMail } = require("../nodemailer/mailer");

const postUser = async (req, res) => {
  try {
    validateCreate;

    const users = await User.find({});
    const user = userSchema(req.body);

    const newUser = await new User({
      name: user.name,
      email: user.email,
      image:
        user.image ||
        "https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol.png",
      lastname: user.lastname,
      phone: user.phone,
      addres: user.addres,
    });

    const saveUser = await newUser.save();

    res.status(200).json(saveUser);
    eMail(user.email);
  } catch (error) {
    res.status(500).send(`{messaje: ${error}}`);
  }
};
