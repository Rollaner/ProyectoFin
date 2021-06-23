import express, { Router } from "express";
import responseModule from "../../modules/response.module";
import categoriaController from "./categoria.controller"

const router: Router = express.Router();

router.get('/all', async (req: express.Request, res: express.Response)=>{
    try {
        let categorias =  await categoriaController.getAllCategorias();
        responseModule.success(req, res, categorias);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})
router.get('/:id', async (req: express.Request, res: express.Response)=>{
    try {
        const id: string = req.params['id'];
        let categorias =  await categoriaController.getCategoriaById(id);
        responseModule.success(req, res, categorias);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})
router.post('/new', async (req: express.Request, res: express.Response)=>{
    try {
        const categoria = req.body;
        let newCategoria =  await categoriaController.addCategoria(categoria);
        responseModule.success(req, res, newCategoria, 201);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})
router.patch('/update', async (req: express.Request, res: express.Response)=>{
    try {
        const id: string = req.params['id'];
        const newCategoria = req.body;
        let updateCategoria =  await categoriaController.updateCategoria(id, newCategoria);
        responseModule.success(req, res, updateCategoria, 201);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})



export default router;