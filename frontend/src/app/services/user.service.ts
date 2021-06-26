import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from '../interfaces/cliente';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseURL:string;
  private loggedIn:boolean = false;
  private user:string;
  

  constructor(private httpclient:HttpClient) {
    this.baseURL = 'http://localhost:5000/api'
   }
  
  public async getLogin(correo:string, pass:string){
    let aux = await this.getUser(correo, pass).toPromise();
    this.user = aux.Name;
    if(this.user != null){ 
      this.loggedIn = true;
      return true;
    }
    this.loggedIn = false;
    return false;
  }
  
  private getUser(correo:string, pass:string):Observable<Cliente>{
    return this.httpclient.get<Cliente>(this.baseURL + '/user/' + correo + pass);
  }

  public getUsername(){
    if(this.loggedIn)
      return this.user;
    return null;  
  }

  public signup(cliente:Cliente){
    this.httpclient.post(this.baseURL + '/user/', cliente);
  }

  public isLoggedIn(){
    if(this.loggedIn)
      return true;
    return false
  }
}
