import express, {Express, Request, Response} from "express";
import categoriaRouter from "./categoria.network";
const categoria: Express = express(); //mini server para el router y data
categoria.use('/categoria',categoriaRouter);
export default categoria;