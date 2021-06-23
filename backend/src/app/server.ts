import express, {Express} from "express";
import producto from "./components/producto/index";
import cors from "cors";
import mongooseModule from "./modules/mongoose.module";
import categoria from "./components/categoria";
import usuario from "./components/usuario";

 async function main(){
     const server: Express = express();
     const port: number = 5000;

     server.use(express.json());
     server.use(cors);
     server.use('/api',producto,categoria,usuario);
     
    
     try{
         await mongooseModule.connect();
         console.log('DB connection success');
         server.listen(port, ()=>{
             console.log('Server Listening on: http://localhost:'+ port)
         })
        }catch (error){
            console.log('Failed DB connection!');
        }
 }
 export default { main };