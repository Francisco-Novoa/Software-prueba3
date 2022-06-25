import express from "express";

import { usersRouter } from "./users/index.js";
import { loginRouter } from "./login/index.js";


export const MainRouter = express.Router();

MainRouter.use("/login", loginRouter);
MainRouter.use("/users", usersRouter);

