import express, {Express, Request, Response} from "express";
const user: Express = express(); //mini server para el router y data
user.use('/user');
export default user;