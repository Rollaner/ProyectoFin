import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Category } from '../../interfaces/category';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {Name:"TEST", Stock:1, Category:"TEST", Price:1, Rating:5}
  ];
  categories: Category[] = [
    {Name:"TESTCat"}
  ];
  selected: String = '';
  selectbool: boolean = false;
  searchForm:FormGroup;
  search: String = '';
  empty: boolean = false;
  default: boolean = true;
  constructor(private fb:FormBuilder) {
    this.searchForm = this.fb.group({
      input: [''],
    });
   }

  ngOnInit(): void {
    this.default=true;
  }

  Search(){
    let sanitize = this.searchForm.value.input;
    this.search = sanitize;
    this.empty=this.emptySearch();
    this.default = false;
  }

  searchButton(cat:String){ //Dice que searchButton no esta definido (?)
    this.search=cat;
    console.log(cat);
    this.default=false;
  }

  emptySearch():boolean {
    let i:number = 0;
    for(i=0;i<this.products.length;i++){    
      if(this.search == this.products[i].Category){
        return false;
      }
      console.log(this.products[i].Category)  
      return true;
    }
    return true;
  }
  selectedcategory(cat:String){
    this.selected = cat;
    this.selectbool = true;
  }
}
