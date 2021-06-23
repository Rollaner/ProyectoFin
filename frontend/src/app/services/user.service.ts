import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseURL:string;

  constructor(private httpclient:HttpClient) {
    this.baseURL = 'http://localhost:5000/api'
   }
  
  public getLogin(correo:string, pass:string){
    if(this.httpclient.get(this.baseURL + '/user/' + correo + pass)){
      return true;
    }
    return false;
  }
  
  public signup(cliente:Cliente){
    this.httpclient.post(this.baseURL + '/user/', cliente);
  }
}
