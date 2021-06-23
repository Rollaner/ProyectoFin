import {Schema, model, Types} from "mongoose";
const productoSchema: Schema = new Schema({
    Name: {type: String, required: true},
    Stock: {type: Number},
    Description: {type: String, required: true},
    Category: {type: String, required: true},
    Price: {type: Number, required: true},
    Rating: {type: Number},
    Contador: {type: Number},
    Promedio: {type: Number}
});

export default model('Producto', productoSchema, 'Productos');