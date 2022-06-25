import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

export const User = sequelize.define("usuarios", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  passwordHash: {
    type: DataTypes.STRING,
    comment: "aca se guarda encriptada la password usando bcrypt",
  },
  correo: {
    type: DataTypes.STRING,
    unique: true,
  },
  rut: {
    type: DataTypes.STRING,
    unique: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  apellidos: {
    type: DataTypes.STRING,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
  },
  genero: {
    type: DataTypes.ENUM(["masculino", "femenino", "otros", "no responde"]),
    defaultValue: "no responde"
  },
  fono: {
    type: DataTypes.STRING,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.ENUM(["valido", "baneado", "eliminado"]),
    defaultValue: "valido"
  },
}, {
  freezeTableName: true
});
