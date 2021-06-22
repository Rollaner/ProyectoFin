import { Producto } from "../../models/producto.model";
import productoSchema from "./producto.schema";

const PRODUCTS: Producto[] = [
    {   _id: "1",
        Name: "Reality dethreader",
        Stock: 2,
        Description: "For when nukes don't cut it",
        Category: "WMD",
        Price: 200000,
        Rating: 1
    }
]

/* function getAllProductos(){
    return productoSchema.find();
}*/

function getAllProductos():Producto[]{
    return PRODUCTS;
}

export default {getAllProductos};