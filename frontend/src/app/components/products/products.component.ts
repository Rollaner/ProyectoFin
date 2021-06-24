import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Category } from '../../interfaces/category';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[] 
  public categories: Category[]
  selected: String = '';
  selectbool: boolean = false;
  searchForm:FormGroup;
  search: String = '';
  empty: boolean = false;
  default: boolean = true;
  constructor(private fb:FormBuilder, private productService:ProductService, private categoryService:CategoryService) {
    this.searchForm = this.fb.group({
      input: [''],
    });
    this.products = [];
   }

  async ngOnInit(): Promise<void> {
    this.default=true;
    this.products= await this.productService.getAllProducts().toPromise();
    this.categories= await this.categoryService.getAllCategories().toPromise();
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
