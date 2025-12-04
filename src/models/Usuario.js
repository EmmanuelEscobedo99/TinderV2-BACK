const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Usuario = sequelize.define("Usuario", {
  ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  NOMBRES: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  APELLIDOS: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  EDAD: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  SEXO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  INTERESES: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  AFICIONES: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DESCRIPCION: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  FOTOPERFIL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CORREO: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  CONTRASENA: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "usuario",
  timestamps: false,
});


module.exports = Usuario;
