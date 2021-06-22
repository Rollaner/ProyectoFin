import {Request, Response} from "express";

function success(req: Request, res: Response, message: any, status?:number | undefined){
    res.status(status || 200).send(message);
}

function error(req: Request, res:Response, message?: any, status?:number | undefined){
    res.status(status || 500).send(message || "Unexpected error!");
}

export default {success,error}