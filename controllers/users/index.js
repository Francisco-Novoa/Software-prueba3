import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
import { SECRET } from "../../utils/config.js";
import { User } from "../../models/index.js";
import { ValidaRut } from "../../utils/rutValidator.js";

export const usersRouter = express.Router();

usersRouter.post("/", async (req, res) => {
  const { password, rut, nombre, apellidos, fecha_nacimiento, fono, genero, direccion, } = req.body;
  if (!password || !rut)
    return res.status(400).send({ error: "Password o rut no encontrado" });
  if (password.length <= 6)
    return res.status(400).send({ error: "Contraseña recibida es muy corta" });
  if (!ValidaRut(rut))
    return res.status(400).send({ error: "Rut recibido es invalido" });
  if (!nombre)
    return res.status(400).send({ error: "Nombre no debe estar vacio" });
  if (!apellidos)
    return res.status(400).send({ error: "Apellidos no debe estar vacio" });
  if (!fecha_nacimiento)
    return res.status(400).send({ error: "Fecha de nacimiento no debe estar vacio" });
  if (!fono)
    return res.status(400).send({ error: "Fono no debe estar vacio" });
  if (!direccion)
    return res.status(400).send({ error: "Direccion no debe estar vacia" });
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const user = await User.create({ rut, passwordHash, nombre, apellidos, fecha_nacimiento, genero, fono, direccion, });
  const token = jwt.sign({ id: user._id, rut }, SECRET);
  res.status(201).json({
    token,
    message: "usuario creado exitosamente",
    data: { user: user.username, id: user.id },
  });
});

usersRouter.put("/cambiarpass", async (req, res) => {
  const { password, rut, id } = req.body;
  if (!password || !rut)
    return res.status(400).send({ error: "Password o rut no encontrado" });
  if (password.length <= 6)
    return res.status(400).send({ error: "Contraseña recibida es muy corta" });
  if (!ValidaRut(rut))
    return res.status(400).send({ error: "Rut recibido es invalido" });
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const user = await User.update({ passwordHash }, {
    where: {
      id
    },
    returning: true,
    raw: true
  });
  const cleaned = user.flat()[1]
  delete cleaned.passwordHash
  res.status(201).json({
    message: "password cambiada exitosamente",
    data: { user: cleaned },
  });
});

usersRouter.put("/:id", async (req, res) => {
  const { rut, nombre, apellidos, fecha_nacimiento, genero, fono, direccion } = req.body;
  const id = req.params.id
  if (!id)
    return res.status(400).send({ error: "Es necesario proveher un id" });
  if (!ValidaRut(rut))
    return res.status(400).send({ error: "Rut recibido es invalido" });
  if (!nombre)
    return res.status(400).send({ error: "Nombre no debe estar vacio" });
  if (!apellidos)
    return res.status(400).send({ error: "Apellidos no debe estar vacio" });
  if (!fecha_nacimiento)
    return res.status(400).send({ error: "Fecha de nacimiento no debe estar vacio" });
  if (!fono)
    return res.status(400).send({ error: "Fono no debe estar vacio" });
  if (!direccion)
    return res.status(400).send({ error: "Direccion no debe estar vacia" });
  const user = await User.update({ rut, nombre, apellidos, fecha_nacimiento, genero, fono, direccion, }, {
    where: {
      id
    },
    returning: true,
    raw: true
  });
  const cleaned = user.flat()[1]
  delete cleaned.passwordHash
  res.status(201).json({
    message: "usuario modificado exitosamente",
    data: { user: cleaned },
  });
});

usersRouter.delete("/:id", async (req, res) => {
  const id = req.params.id
  await User.update({ estado: "eliminado" }, {
    where: {
      id
    },
  });
  res.sendStatus(204);
});

usersRouter.get("/:id", async (req, res) => {
  const id = req.params.id
  const user = await User.findByPk(id, {
    raw: true
  });
  delete user.passwordHash
  res.status(200).json({
    message: "usuario obtenido exitosamente",
    data: { user },
  });
});