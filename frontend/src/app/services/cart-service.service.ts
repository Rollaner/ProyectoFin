import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cart = new Subject<Product[]>();
  avisoCart$ = this.cart.asObservable();

  constructor() { }
}
