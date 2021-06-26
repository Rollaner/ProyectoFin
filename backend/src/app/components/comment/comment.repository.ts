import { comment } from "../../models/comment.model";
import commentSchema from "./comment.schema";

function getAllcomments(){
    return commentSchema.find();
}

function getcommentById(id: string){
    return commentSchema.findOne({ _id: id});
}
function addcomment(comment: comment){
    return commentSchema.create(comment);
}

function getCommentByUser(user: string){
    return commentSchema.find({User: user})
}

function updatecomment(id: string, comment: comment){
    return commentSchema.findByIdAndUpdate(id, comment, {new: true});
}

function getCommentByProdid(prodid: string){
    return commentSchema.find({product: prodid})
}


export default {getAllcomments, getcommentById, addcomment, updatecomment, getCommentByProdid ,getCommentByUser};