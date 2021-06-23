import { Categoria } from "../../models/categoria.model";
import categoriaSchema from "./categoria.schema";

function getAllCategorias(){
    return categoriaSchema.find();
}

function getCategoriaById(id: string){
    return categoriaSchema.findOne({ _id: id});
}
function addCategoria(categoria: Categoria){
    return categoriaSchema.create(categoria);
}
function updateCategoria(id: string, categoria: Categoria){
    return categoriaSchema.findByIdAndUpdate(id, categoria, {new: true});
}




export default {getAllCategorias, getCategoriaById, addCategoria, updateCategoria};