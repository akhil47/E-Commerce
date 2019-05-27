import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/Modals/Product/product.modal';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  
  product: Product //For later use
  constructor(private productService: ProductService) {
    this.product = productService.products[0]
  }

  ngOnInit() {
  }

}
