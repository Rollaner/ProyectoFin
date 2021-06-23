import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseURL:string;

  constructor(private httpclient:HttpClient) {
    this.baseURL = 'http://localhost:5000/api'
   }

  public getAllCategories(){
    return this.httpclient.get<Category[]>(this.baseURL+'/categoria/all');
  }

  public updateCategory(category:Category){
    return this.httpclient.patch(this.baseURL+ '/categoria/update', category);
 }

  public getCategory(ID:string){
    return this.httpclient.get<Category>(this.baseURL + '/categoria/' + ID);
  }
}