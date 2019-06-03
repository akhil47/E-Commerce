import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/Modals/Order/order.modal';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  ordersList: Order[]

  constructor(private orderService: OrderService) {
    this.ordersList = this.orderService.getOrdersList()
  }

  ngOnInit() {
  }

}
