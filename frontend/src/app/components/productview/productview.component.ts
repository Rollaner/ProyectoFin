import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService} from 'src/app/services/cart-service.service';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.scss']
})
export class ProductviewComponent implements OnInit {
  @Input() ID: String;
  public producto: Product;
  public Formulario: FormGroup;
  public Comentario: FormGroup
  display: boolean = false;
  calificado: boolean = false;

  constructor(private fb:FormBuilder,private _snackBar: MatSnackBar, private cartServiceService: CartServiceService, private userService: UserService,private productService: ProductService) {
    this.Formulario = this.fb.group({
      input: ['', Validators.required],
    });
    this.Comentario = this.fb.group({
      comentario: [''],
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
    this.producto.Rating=this.producto.Rating + parseInt(this.Formulario.value.input,10);
    this.producto.Contador++
    this.producto.Promedio = this.producto.Rating/this.producto.Contador;
    this.productService.updateProduct(this.producto);
    this.display = false;
    this.calificado = true;

  }
  activarCalificacion(){
    this.display=true;
  }

  agregarComentario(){
   if(!this.userService.isLoggedIn()){
      this._snackBar.open("Requiere ingresar antes de realizar esa accion", "ok");
      return;
    }
    this.Comentario.value
  }
}

