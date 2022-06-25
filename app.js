import express from "express";
// import "express-async-errors";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import { requestLogger } from "./utils/requestlogger.js";
import { errorHandler } from "./utils/errorHandler.js";
import { unknownEndpoint } from "./utils/unknownEndPoint.js";
import { MainRouter } from "./controllers/index.js";

//-----
// lo que esta aca abajo son las funciones necesarias para que
// se pueda servir el index.html del backend desde la carpeta public
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//-----

const app = express();

app.use(cors());

app.use(express.json());

app.use(requestLogger);

app.use(express.static(__dirname + "/public"));

app.use("/api", MainRouter);

app.use(unknownEndpoint);

app.use(errorHandler);

export default app;
