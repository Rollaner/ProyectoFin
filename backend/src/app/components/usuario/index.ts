import express, {Express, Request, Response} from "express";
import usuarioRouter from "./usuario.network";
const usuario: Express = express(); //mini server para el router y data
usuario.use('/usuario',usuarioRouter);
export default usuario;