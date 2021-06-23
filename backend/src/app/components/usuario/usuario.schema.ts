import {Schema, model, Types} from "mongoose";
const usuarioSchema: Schema = new Schema({
    Name: {type: String, required: true},
    Email: {type: String, required: true},
    Password: {type: String, required: true}
});

export default model('Usuario', usuarioSchema, 'Usuarios');