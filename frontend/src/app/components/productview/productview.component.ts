import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService} from 'src/app/services/cart-service.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.scss']
})
export class ProductviewComponent implements OnInit {
  @Input() ID: String;
  private producto: Product;
  private Formulario: FormGroup;
  display: boolean = false;

  constructor(private fb:FormBuilder,private _snackBar: MatSnackBar, private cartServiceService: CartServiceService, private productService: ProductService) {
    this.Formulario = this.fb.group({
      input: ['', Validators.required],
    });
   }

  async ngOnInit(): Promise<void> {
    try{
      this.producto= await this.productService.getProduct(this.ID).toPromise();
    }
    catch{
      console.log("error");
    }
  }
  agregarCarrito(){
    this.cartServiceService.updateCart(this.producto);
  }
  hayStock(){
    if(this.producto.Stock>0){
      return true;
    }
    else{
      this._snackBar.open("No hay Stock", "Ok");
      return false;
    }
  }
  calificarProducto(){
    this.producto.Rating=parseInt(this.Formulario.value,10);
    this.productService.updateProduct(this.producto);
  }
  activarCalificacion(){
    this.display=true;
  }
}

