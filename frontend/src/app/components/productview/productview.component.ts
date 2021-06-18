import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.scss']
})
export class ProductviewComponent implements OnInit {

  product:Product = {
    Name: "",
    Stock: 1,
    Category: "",
    Price: 1,
    Rating: 1,
    ID: 1,
  }

  param;

  constructor(private route:ActivatedRoute) {

    this.param = this.route.paramMap.subscribe(params =>{
      if(params.get("id") != null){
        let aux = parseInt(params.get("id")!,10)
        this.product.ID = aux;
      }  
    }); 

   }

  ngOnInit(): void {
  }

}
