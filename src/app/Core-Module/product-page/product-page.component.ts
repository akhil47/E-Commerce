import { Component, OnInit } from '@angular/core';
import { ProductDisplay } from 'src/app/modals/product-display.modal';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  productImages: string[] = [
    //More images may added later stage
    'https://assets.jassets.com/h_600,q_95,w_440/v1/assets/images/productImage/2018/7/6/cd37416d-5556-4024-9d7f-bb5ebde43a6a1530825330030-1.webp'
  ]
  productInfo: ProductDisplay //For later use
  constructor() { }

  ngOnInit() {
  }

}
