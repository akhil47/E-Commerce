import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { ProductDisplay } from 'src/app/modals/product-display.modal';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  areFiltersActive: boolean = false;
  productList : ProductDisplay[] = []

  header_1: string = 'MEN / Clothing / Shirts'
  header_2: string = 'Men Shirts - 13845 items'
  constructor() {
    for(let i = 0; i < 20; i++){
      this.productList.push(new ProductDisplay())
    }
  }
  ngOnInit() {
    for(let i = 0; i < 20; i++){
      this.productList[i].name = 'Tommy Hilfiger White Regular Fit Solid Casual Shirt';
      this.productList[i].imageUrl = 'https://snow-commerce.imgix.net/aetv/history/products/the_curse_of_oak_island/apparel/merch//COOI-tShirt-Men-Cotton-Charcoal.jpg?auto=compress&fm=pjpg&q=80&cs=strip&h=200&w=200'
      this.productList[i].oldPrice = 4799
      this.productList[i].newPrice = 3999
      this.productList[i].discount = ' ( 17% Off )'
      this.productList[i].sizes = ['S', 'M', 'L', 'XL', 'XXL']
    }
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
