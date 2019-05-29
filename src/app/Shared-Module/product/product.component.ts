import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Product } from 'src/app/Modals/Product/product.modal';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product

  @ViewChild('test') test: ElementRef

  price: number = 0
  discount: number = 0
  discountPrice: number = 0
  
  constructor() {
    
  }
  
  ngOnInit() {
    this.price = this.product.getSizeList()[0].price
    this.discount = this.product.getSizeList()[0].discount
    this.discountPrice = Math.round((this.price) - (this.price * ((this.discount)/100)))
  }
}