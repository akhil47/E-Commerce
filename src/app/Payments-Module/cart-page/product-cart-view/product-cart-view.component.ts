import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Modals/Product/product.modal';

@Component({
  selector: 'app-product-cart-view',
  templateUrl: './product-cart-view.component.html',
  styleUrls: ['./product-cart-view.component.css']
})
export class ProductCartViewComponent implements OnInit {

  @Input() product: Product
  @Output() showSizeMenu = new EventEmitter<{title: string, listItems: string[]}>()
  @Output() showQuantityMenu = new EventEmitter<{title: string, listItems: string[]}>()

  constructor() { }

  ngOnInit() {
  }
  openSizeDropdown(){
    this.showSizeMenu.emit({title: 'Select Size', listItems: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']})
  }
  openQuantityDropdown(){
    this.showQuantityMenu.emit({title: 'Select Quantity', listItems: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']})
  }
}
