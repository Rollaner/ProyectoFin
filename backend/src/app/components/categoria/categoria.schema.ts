import {Schema, model, Types} from "mongoose";
const categoriaSchema: Schema = new Schema({
    Name: {type: String, required: true},
    Products: {type: String}
});

export default model('Categoria', categoriaSchema, 'Categorias');