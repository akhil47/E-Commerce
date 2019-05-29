import { Component, OnInit, Input } from '@angular/core';

import { Cart } from 'src/app/Modals/Customer/cart.modal';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  @Input() summary: Cart
  constructor() { }

  ngOnInit() {
  }

}
