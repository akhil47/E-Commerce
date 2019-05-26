import { Component, OnInit, Input } from '@angular/core';
import { OrderSummary } from 'src/app/modals/order-summary.modal';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  @Input() summary: OrderSummary
  constructor() { }

  ngOnInit() {
  }

}
