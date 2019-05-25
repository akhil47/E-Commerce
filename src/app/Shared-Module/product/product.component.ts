import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productImageURL: string = 'https://snow-commerce.imgix.net/aetv/history/products/the_curse_of_oak_island/apparel/merch//COOI-tShirt-Men-Cotton-Charcoal.jpg?auto=compress&fm=pjpg&q=80&cs=strip&h=200&w=200'

  @Input() name: string = 'Tommy Hilfiger White Regular Fit Solid Casual Shirt';
  @Input() oldPrice: number = 4799;
  @Input() newPrice: number = 3999;
  @Input() discount: string = ' ( 17% Off )';
  @Input() sizes: string = 'S M L XL XXL';

  @ViewChild('test') test: ElementRef

  constructor() {
    
  }
  
  ngOnInit() {
  }
}