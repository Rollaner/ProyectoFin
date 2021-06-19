import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products:Product[] = []

  constructor(private cartService:CartServiceService) { 

  }

  ngOnInit(): void {
    this.cartService.getCartData().subscribe(update =>{this.products=update}); //Updatea carrito con service
  }

  removeItem(item: Product){
    console.log(item.Name);
    this.cartService.deleteFromCart(item); //elimina item del servicio
    delete this.products[this.products.indexOf(item)]; //elimina item del componente
  }

  purchaseCart(){
    console.log("Cart purchased!");
  }
}
