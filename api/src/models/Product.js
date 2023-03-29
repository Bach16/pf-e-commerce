const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
    sequelize.define(
        "product",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
              },
            trademark: {
                type: DataTypes.STRING,
                allowNull: false,

            },
            size: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            stock: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            description:{
                type: DataTypes.STRING,
                allowNull: false
            }

        },{ timestamps: false }
        )
}