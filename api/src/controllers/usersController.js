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

const getUsers = async (req, res) => {
  try {
    const { email } = req.query;
    const users = await userSchema.find();

    if (email) {
      let userEmail = users.filter((user) => user.email === email);
      userEmail.length
        ? res.status(200).json(userEmail)
        : res.status(201).json("Not found");
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json(`Error ${error}`);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    let user = await userSchema.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json(`Error ${error}`);
  }
};

const putUser = async (req, res) => {
  const { id } = req.params;

  const { name, lastname, email, addres, phone, roll } = req.body;

  userSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          name,
          lastname,
          email,
          addres,
          phone,
          roll,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  userSchema
    .findOneAndDelete({ _id: id })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
};

const putRoll = async (req, res) => {
  const { id } = req.params;
  const { roll } = req.body;

  userSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          roll,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
};

module.exports = {
  postUser,
  getUsers,
  getUserById,
  putUser,
  deleteUser,
  putRoll,
};
