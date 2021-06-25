import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartInterface } from 'src/app/interfaces/cart-interface';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products:Product[] = [];
  cart:CartInterface[] = [];
  notError:boolean = true;

  constructor(private cartService:CartServiceService, private userservice:UserService) { 

  }

  convert(item:CartInterface):Product{
    let aux: Product = {
      _id : "",
      Category : "",
      Rating : 0,
      Contador : 1,
      Promedio : 0,
      Name : item.producto,
      Stock : item.stock,
      Price : item.price,
    }
    return aux;
  }

  ngOnInit(): void {
    this.cartService.getCartData().subscribe(update =>{this.cart = update}); //Updatea carrito con service
  }

  removeItem(aux: CartInterface){
    let item = this.convert(aux);
    this.cartService.deleteFromCart(item); //elimina item del servicio
    this.cart.splice(this.cart.indexOf(aux),1);
    delete this.products[this.products.indexOf(item)]; //elimina item del componente
  }

  addItem(aux: CartInterface){
    let item = this.convert(aux);
    this.cart[this.cart.indexOf(aux)].cant++
    this.cartService.addToCart(item);
  }

  addLess(aux:CartInterface){
    let item = this.convert(aux);
    this.cart[this.cart.indexOf(aux)].cant--
    if(this.cart[this.cart.indexOf(aux)].cant <= 0)
      this.removeItem(aux);
    this.cartService.removeFromCart(item); 
  }

  purchaseCart(){
    if(this.userservice.isLoggedIn()){
      this.products.forEach(product => {
        if(product.Stock == 0){
          this.notError = false;
          return;
        }
      });
      console.log("Cart purchased!");
      this.notError = true;
    }  
    else
      this.notError = false;
  }

  error(){
    return this.notError;
  }
}
