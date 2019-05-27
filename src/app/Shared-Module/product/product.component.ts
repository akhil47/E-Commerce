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

  constructor() {
    
  }
  
  ngOnInit() {
  }
}