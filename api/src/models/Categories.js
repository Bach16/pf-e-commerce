const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


module.exports = (sequelize) => {
    sequelize.define(
        "categories",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
              },
            description: {
                type: DataTypes.STRING,
                allowNull: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
              },

        },{ timestamps: false }
        )
}