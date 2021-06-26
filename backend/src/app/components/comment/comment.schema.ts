import {Schema, model, Types} from "mongoose";
const commentSchema: Schema = new Schema({
    User: {type: String, required: true},
    Comment: {type: String, required: true},
    product: {type: String, required: true}
});

export default model('comment', commentSchema, 'comments');