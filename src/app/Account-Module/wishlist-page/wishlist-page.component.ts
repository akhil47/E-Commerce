import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Modals/Product/product.modal';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css']
})
export class WishlistPageComponent implements OnInit {

  wishListProducts: Product[]
  constructor(private productService: ProductService) {
    this.wishListProducts = productService.products
  }

  ngOnInit() {
  }

}