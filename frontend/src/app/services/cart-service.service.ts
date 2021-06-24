import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { CartInterface } from '../interfaces/cart-interface';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import {ProductService} from './product.service'
import {UserService} from './user.service'

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cart = new Subject<CartInterface[]>(); //Carrito
  avisoCart$ = this.cart.asObservable(); //Observable del carrito
  contador:number = 0;  
  productStorage:CartInterface[] = []; //Array de memoria del carrito
  stock:number = 0;

  private baseURL:string;

  constructor(private httpclient:HttpClient , private productService:ProductService, userService:UserService) {
    this.baseURL = 'http://localhost:5000/api'
   }

   convert(item: Product){
     let aux: CartInterface = 
     {
      producto: item._id,
      cant: 0,
      stock: item.Stock,
      price: item.Price,
     }
     return aux;
   }

  updateCart(item:Product){
    let aux = this.convert(item);
    this.productStorage.push(aux);
    if(this.contador > 0){
      this.productStorage = this.productStorage.slice(-(this.contador+1)); //Elimina duplicados del array de memoria
    }
    this.contador++;
    this.cart.next(this.productStorage);
  }

  addToCart(item:Product):Observable<CartInterface[]>{
    let aux = this.convert(item);
    if(this.productStorage.indexOf(aux) >= 0){
      this.productStorage[this.productStorage.indexOf(aux)].cant++
    }
    this.cart.next(this.productStorage);
    return this.avisoCart$;
  }

  removeFromCart(item:Product):Observable<CartInterface[]>{
    let aux = this.convert(item);
    if(this.productStorage.indexOf(aux) >= 0){
      this.productStorage[this.productStorage.indexOf(aux)].cant--
    }
    this.cart.next(this.productStorage);
    return this.avisoCart$;
  }

  deleteFromCart(item:Product):Observable<CartInterface[]>{
    let aux = this.convert(item);
    if(this.productStorage.indexOf(aux) >= 0){
      this.productStorage.splice(this.productStorage.indexOf(aux),1);
    }
    this.cart.next(this.productStorage);
    return this.avisoCart$;
  }

  getCartData():Observable<CartInterface[]>{
    return this.avisoCart$;
  }

}
