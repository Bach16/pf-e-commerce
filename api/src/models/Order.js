const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  id_pay: {
    type: String,
  },
  items: {
    type: Array,
  },
  date_approved: {
    type: String,
  },
  operation_type: {
    type: String,
  },
  order: {
    type: Array,
  },
  payer: {
    type: Array,
  },
  status: {
    type: String,
  },
  status_detail: {
    type: String,
  },
  statusProduct: {
    type: String,
    enum: ["delivered", "undelivered"],
    default: "undelivered",
  },
  email: {
    type: String,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("Order", orderSchema);

// const { DataTypes } = require("sequelize");
// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.

// module.exports = (sequelize) => {
//     sequelize.define(
//         "order",
//         {
//             id: {
//                 type: DataTypes.UUID,
//                 defaultValue: DataTypes.UUIDV4,
//                 allowNull: false,
//                 primaryKey: true,
//               },
//             amount: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false
//             },
//             email_addres: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 validate: {
//                     isEmail: true
//                 },
//             },
//             shipping_addres: {
//                 type: DataTypes.STRING,
//                 allowNull: false,

//             },
//             date: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },
//             state: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },

//         },{ timestamps: false }
//         )
// }
