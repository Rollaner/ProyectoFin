import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL:string;

  constructor(private httpclient:HttpClient, private userService:UserService) {
    this.baseURL = 'http://localhost:5000/api'
   }

  public getAllProducts(){
    return this.httpclient.get(this.baseURL+'/Productos/all');
  }

  public updateProduct(producto:Product){
    return this.httpclient.patch(this.baseURL+ '/Productos/update', producto);
 }

  public getProduct(ID:string){
    return this.httpclient.get(this.baseURL + '/Productos/' + ID);
  }
}
