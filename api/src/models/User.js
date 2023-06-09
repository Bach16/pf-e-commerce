const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    image: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    addres: {
      type: String,
      required: true,
    },
    review: {
      type: Array,
      ref: "Review",
    },
    phone: {
      type: String,
      unique: true,
      minLength: 9,
    },
    roll: {
      type: String,
      enum: ["admin", "user", "superAdmin"],
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
// const { DataTypes } = require("sequelize");
// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.

// module.exports = (sequelize) => {
//     sequelize.define(
//         "consumer",
//         {
//             id: {
//                 type: DataTypes.UUID,
//                 defaultValue: DataTypes.UUIDV4,
//                 allowNull: false,
//                 primaryKey: true,
//               },
//             email: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 validate: {
//                     isEmail: true
//                 },
//                 unique: true
//             },
//             addres: {
//                 type: DataTypes.STRING,
//                 allowNull: false,

//             },
//             phone: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false
//             },
//             country: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },
//             name: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//               },

//         },{ timestamps: false }
//         )
// }
