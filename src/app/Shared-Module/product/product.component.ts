import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ProductDisplay } from 'src/app/modals/product-display.modal';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductDisplay

  @ViewChild('test') test: ElementRef

  constructor() {
    
  }
  
  ngOnInit() {
  }
}