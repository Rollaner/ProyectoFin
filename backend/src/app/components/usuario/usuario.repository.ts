import mongoose from 'mongoose';
import { Usuario } from "../../models/usuario.model";
import usuarioSchema from "./usuario.schema";

function getAllUsuarios(){
    return usuarioSchema.find();
}

function getUsuario(email: string, pass:string){
    usuarioSchema.findOne({Email: email, Password: pass}, function (err:any,docs:any){
        if(err){
            return null;
        }
        else{
            return docs;
        }
    })
}

function getUsuarioById(id: string){
    return usuarioSchema.findOne({ _id: id});
}
function addUsuario(usuario: Usuario){
    return usuarioSchema.create(usuario);
}
function updateUsuario(id: string, usuario: Usuario){
    return usuarioSchema.findByIdAndUpdate(id, usuario, {new: true});
}


export default {getAllUsuarios, getUsuarioById, addUsuario, updateUsuario, getUsuario};