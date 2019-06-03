import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/Modals/Order/order.modal';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderIndex: number
  order: Order


  constructor(private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.orderIndex = this.route.snapshot.params['id']
    this.order = this.orderService.getOrdersList()[this.orderIndex]
  }

}
