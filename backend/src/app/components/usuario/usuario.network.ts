import express, { Router } from "express";
import responseModule from "../../modules/response.module";
import usuarioController from "./usuario.controller"

const router: Router = express.Router();

router.get('/all', async (req: express.Request, res: express.Response)=>{
    try {
        let usuarios =  await usuarioController.getAllUsuarios();
        responseModule.success(req, res, usuarios);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})
router.get('/:id', async (req: express.Request, res: express.Response)=>{
    try {
        const id: string = req.params['id'];
        let usuarios =  await usuarioController.getUsuarioById(id);
        responseModule.success(req, res, usuarios);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})
router.get('/:Email/:Pass', async (req: express.Request, res: express.Response)=>{
    try {
        const Email: string = req.params['Email'];
        const Pass: string = req.params['Pass'];
        let usuarios =  await usuarioController.getUsuario(Email,Pass);
        responseModule.success(req, res, usuarios);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})
router.post('/new', async (req: express.Request, res: express.Response)=>{
    try {
        const usuario = req.body;
        let newUsuario =  await usuarioController.addUsuario(usuario);
        responseModule.success(req, res, newUsuario, 201);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})
router.patch('/update', async (req: express.Request, res: express.Response)=>{
    try {
        const id: string = req.params['id'];
        const newUsuario = req.body;
        let updateUsuario =  await usuarioController.updateUsuario(id, newUsuario);
        responseModule.success(req, res, updateUsuario, 201);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})



export default router;