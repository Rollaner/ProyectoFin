import categoriaRepository from "./categoria.repository";
import { Categoria } from "../../models/categoria.model";

function getAllCategorias():Categoria[]{
    return categoriaRepository.getAllCategorias();
}
function getCategoriaById(id:string){
    return categoriaRepository.getCategoriaById(id);
}

function addCategoria(categoria:Categoria){
    return categoriaRepository.addCategoria(categoria);
}
function updateCategoria(id: string, categoria:Categoria){
    return categoriaRepository.updateCategoria(id,categoria);
}

export default { getAllCategorias, getCategoriaById, addCategoria, updateCategoria};