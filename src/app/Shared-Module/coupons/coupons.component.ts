import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Coupon } from 'src/app/Modals/Order/coupon.modal';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit, OnDestroy {

  @Output() couponSelected = new EventEmitter<Coupon>()
  @Output() menuClosed = new EventEmitter<boolean>()

  couponInput:string = ''
  couponsListUpdatesSubscription: any

  couponsList: Coupon[] = []
  constructor(private orderService: OrderService) {
    this.couponsList = orderService.getCouponsList()
    this.couponsListUpdatesSubscription = this.orderService.couponsListUpdates.subscribe(
      (list: Coupon[]) => {
        this.couponsList = list
      }
    )
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.couponsListUpdatesSubscription.unsubscribe()
  }
  onCouponSelect(index: number){
    this.couponSelected.emit(this.couponsList[index])
    this.closeMenu()
  }
  onCouponInput(){
    console.log(this.couponInput)
    this.closeMenu()
    // Dynamic search of coupon using service and then return Coupon Object
    // Code to be updated later
  }
  closeMenu(){
    this.menuClosed.emit(true)
  }
}
