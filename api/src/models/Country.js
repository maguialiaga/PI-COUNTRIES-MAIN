const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "country",
    {
      id: {
        type: DataTypes.STRING(3),
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      area: {
        type: DataTypes.INTEGER,
        allowNull: true,
        //getter para mostrarlo en km!
        get() {
          return this.getDataValue("area") + "km2";
        },
      },
      poblacion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        //getter para mostrar como millones
        get() {
          return this.getDataValue("poblacion");
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
