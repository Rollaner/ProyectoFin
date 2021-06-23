import { Producto } from "../../models/producto.model";
import productoSchema from "./producto.schema";

function getAllProductos(){
    return productoSchema.find();
}

function getProductoById(id: string){
    return productoSchema.findOne({ _id: id});
}
function addProducto(producto: Producto){
    return productoSchema.create(producto);
}
function updateProducto(id: string, producto: Producto){
    return productoSchema.findByIdAndUpdate(id, producto, {new: true});
}




export default {getAllProductos, getProductoById, addProducto, updateProducto};