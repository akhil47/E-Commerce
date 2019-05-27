import { Component, OnInit } from '@angular/core';
import { ProductDisplay } from 'src/app/modals/product-display.modal';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css']
})
export class WishlistPageComponent implements OnInit {

  wishListProducts: ProductDisplay[] = []
  constructor() {
    for(let i = 0; i < 7; i++){
      this.wishListProducts.push(new ProductDisplay())
    }
  }

  ngOnInit() {
    for(let i = 0; i < 7; i++){
      this.wishListProducts[i].name = 'Calvin Klein Jeans Men Blue Slim Fit Solid Casual Shirt'
      this.wishListProducts[i].imageUrl = 'https://snow-commerce.imgix.net/aetv/history/products/the_curse_of_oak_island/apparel/merch//COOI-tShirt-Men-Cotton-Charcoal.jpg?auto=compress&fm=pjpg&q=80&cs=strip&h=200&w=200'
      this.wishListProducts[i].oldPrice = 99999
      this.wishListProducts[i].newPrice = 9999
      this.wishListProducts[i].discount = '90% Off'
      this.wishListProducts[i].sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    }
  }

}