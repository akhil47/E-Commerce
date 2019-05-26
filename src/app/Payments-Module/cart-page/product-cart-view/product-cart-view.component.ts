import { Component, OnInit, Input } from '@angular/core';
import { ProductCart } from 'src/app/modals/product-cart.model';

@Component({
  selector: 'app-product-cart-view',
  templateUrl: './product-cart-view.component.html',
  styleUrls: ['./product-cart-view.component.css']
})
export class ProductCartViewComponent implements OnInit {

  @Input() product: ProductCart

  constructor() { }

  ngOnInit() {
  }

}
