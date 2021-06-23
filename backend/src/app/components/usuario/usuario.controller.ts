import usuarioRepository from "./usuario.repository";
import { Usuario } from "../../models/usuario.model";

function getAllUsuarios():Usuario[]{
    return usuarioRepository.getAllUsuarios();
}
function getUsuarioById(id:string){
    return usuarioRepository.getUsuarioById(id);
}

function getUsuario(email: string, pass:string){
    return usuarioRepository.getUsuario(email, pass);
}

function addUsuario(usuario:Usuario){
    return usuarioRepository.addUsuario(usuario);
}
function updateUsuario(id: string, usuario:Usuario){
    return usuarioRepository.updateUsuario(id,usuario);
}

export default { getAllUsuarios, getUsuarioById, addUsuario, updateUsuario, getUsuario};