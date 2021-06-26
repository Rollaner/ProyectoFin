import express, {Express, Request, Response} from "express";
import commentRouter from "./comment.network"
const comment: Express = express(); //mini server para el router y data
comment.use('/comment',commentRouter);
export default comment;