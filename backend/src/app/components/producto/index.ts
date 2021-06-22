import express, {Express, Request, Response} from "express";
import productoRouter from "./producto.network";
const producto: Express = express(); //mini server para el router y data
producto.use('/producto',productoRouter);
export default producto;