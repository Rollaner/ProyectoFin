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
    let aux:Product;
    aux.Name = item.producto;
    aux.Stock = item.stock;
    aux.Price = item.price;
    return aux;
  }

  ngOnInit(): void {
    this.cartService.getCartData().subscribe(update =>{this.cart = update}); //Updatea carrito con service
    this.display();
  }

  display(){
    let i:number = 0;
    this.cart.forEach(element => {
      this.products[i]=this.convert(element);     
      console.log(this.products[i]) 
    });
  }

  removeItem(item: Product){
    console.log(item.Name);
    this.cartService.removeFromCart(item); //elimina item del servicio
    delete this.products[this.products.indexOf(item)]; //elimina item del componente
  }

  addItem(item: Product){
    this.cartService.addToCart(item);
  }

  addLess(item:Product){
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
