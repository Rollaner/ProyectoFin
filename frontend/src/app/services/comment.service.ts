import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

   public getAllComments(ID:String):Observable<comment[]>{
    return this.httpclient.get<comment[]>(this.baseURL+'/producto/'+ID);
  } 

  public newComment(Comment:comment){
    return this.httpclient.post<comment>(this.baseURL+'/producto/new', Comment);
  }
}
