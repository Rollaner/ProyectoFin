import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cart = new Subject<Product[]>(); //Carrito
  avisoCart$ = this.cart.asObservable(); //Observable del carrito
  contador:number = 0;  
  productStorage:Product[] = [] //Array de memoria del carrito

  constructor() { }

  updateCart(item:Product){
    this.productStorage.push(item);
    if(this.contador > 0){
      this.productStorage = this.productStorage.slice(-(this.contador+1)); //Elimina duplicados del array de memoria
    }
    this.contador++;
    this.cart.next(this.productStorage);
  }

  deleteFromCart(aux:Product):Observable<Product[]>{
    if(this.productStorage.indexOf(aux) >= 0){
      this.productStorage.splice(this.productStorage.indexOf(aux),1);
    }
    this.cart.next(this.productStorage);
    return this.avisoCart$;
  }

  getCartData():Observable<Product[]>{
    return this.avisoCart$;
  }
}
