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
    Img: "test"
  }

  suscription;

  constructor(private route:ActivatedRoute) {

    this.suscription = this.route.paramMap.subscribe(params =>{
      if(params.get("name") != null)
        this.product.Name = params.get("name"); 
    }); 

   }

  ngOnInit(): void {
  }

}
