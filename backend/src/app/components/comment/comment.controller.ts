import commentRepository from "./comment.repository";
import { comment } from "../../models/comment.model";

function getAllcomments():comment[]{
    return commentRepository.getAllcomments();
}
function getCommentByUser(user: string){
    return commentRepository.getCommentByUser(user);
}

function getCommentByProdid(prodid: string){
    return commentRepository.getCommentByProdid(prodid);
}

function addcomment(comment:comment){
    return commentRepository.addcomment(comment);
}
function updatecomment(id: string, comment:comment){
    return commentRepository.updatecomment(id,comment);
}

export default { getAllcomments, getCommentByUser, addcomment, updatecomment, getCommentByProdid};