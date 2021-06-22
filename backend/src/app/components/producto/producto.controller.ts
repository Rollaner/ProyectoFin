import productoRepository from "./producto.repository";
import { Producto } from "../../models/producto.model";

function getAllProductos():Producto[]{
    return productoRepository.getAllProductos();
}

export default { getAllProductos};