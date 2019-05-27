import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Modals/Product/product.modal';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  areFiltersActive: boolean = false;
  productList : Product[]

  header_1: string = 'MEN / Clothing / Shirts'
  header_2: string = 'Men Shirts - 13845 items'
  constructor(private productService: ProductService) {
    this.productList = productService.products
  }
  ngOnInit() {
  }

  openFilters(){
    if(this.areFiltersActive){
      this.areFiltersActive = false;
    }
    else{
      this.areFiltersActive = true;
    }
  }
  closeFilters(){
    this.areFiltersActive = false;
  }
}
