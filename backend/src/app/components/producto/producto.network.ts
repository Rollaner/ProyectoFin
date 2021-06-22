import express, { Router } from "express";
import responseModule from "../../modules/response.module";
import productoController from "./producto.controller"

const router: Router = express.Router();

router.get('/all', async (req: express.Request, res: express.Response)=>{
    try {
        let products =  await productoController.getAllProductos();
        responseModule.success(req, res, products);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})


export default router;