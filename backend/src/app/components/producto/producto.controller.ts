import productoRepository from "./producto.repository";
import { Producto } from "../../models/producto.model";

function getAllProductos():Producto[]{
    return productoRepository.getAllProductos();
}
function getProductoById(id:string){
    return productoRepository.getProductoById(id);
}

function addProducto(producto:Producto){
    return productoRepository.addProducto(producto);
}
function updateProducto(id: string, producto:Producto){
    return productoRepository.updateProducto(id,producto);
}

export default { getAllProductos, getProductoById, addProducto, updateProducto};