import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { UserService } from './user.service';
import { Subject,Observable } from 'rxjs';
import { comment } from '../interfaces/comment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseURL:String;

  constructor(private httpclient:HttpClient, private userService:UserService) {
    this.baseURL = 'http://localhost:5000/api'
   }

   public getAllComments(ID:String):Observable<Product[]>{
    return this.httpclient.get<Product[]>(this.baseURL+'/producto/'+ID);
  } 

  public newComment(Comment:comment){
    return this.httpclient.post<Product[]>(this.baseURL+'/producto/new', Comment);
  }
}
