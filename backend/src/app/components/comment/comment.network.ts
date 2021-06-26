import express, { Router } from "express";
import responseModule from "../../modules/response.module";
import commentController from "./comment.controller"

const router: Router = express.Router();

router.get('/all', async (req: express.Request, res: express.Response)=>{
    try {
        let comments =  await commentController.getAllcomments();
        responseModule.success(req, res, comments);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})
router.get('users/:user', async (req: express.Request, res: express.Response)=>{
    try {
        const user: string = req.params['user'];
        let comments =  await commentController.getCommentByUser(user);
        responseModule.success(req, res, comments);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})

router.get('/:prodid', async (req: express.Request, res: express.Response)=>{
    try {
        const prodid: string = req.params['prodid'];
        let comments =  await commentController.getCommentByProdid(prodid);
        responseModule.success(req, res, comments);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})

router.post('/new', async (req: express.Request, res: express.Response)=>{
    try {
        const comment = req.body;
        let newcomment =  await commentController.addcomment(comment);
        responseModule.success(req, res, newcomment, 201);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})
router.patch('/update', async (req: express.Request, res: express.Response)=>{
    try {
        const id: string = req.params['id'];
        const newcomment = req.body;
        let updatecomment =  await commentController.updatecomment(id, newcomment);
        responseModule.success(req, res, updatecomment, 201);
    }catch(error){ 
        responseModule.error(req,res);
    }    
})


export default router;