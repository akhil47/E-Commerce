import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/Modals/Order/order.modal';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() order: Order
  @Input() orderIndex: number

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  openOrderDetails(){
    this.router.navigate(['order-details/', this.orderIndex], { relativeTo: this.route.parent})
  }
}
