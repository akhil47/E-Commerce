import { Component, OnInit, Input } from '@angular/core';

import { Cart } from 'src/app/Modals/Customer/cart.modal';
import { Coupon } from 'src/app/Modals/Order/coupon.modal';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  @Input() summary: Cart
  
  popupActive: boolean = false

  constructor(private accountService: AccountService) { 
  }

  ngOnInit() {
  }

  openCouponsPopup(){
    this.popupActive = true;
  }
  closeCouponsPopup(){
    this.popupActive = false;
  }


  
  applyCoupon(coupon: Coupon){
    this.accountService.applyCouponToCart(coupon)
  }
  removeCoupon(){
    this.accountService.applyCouponToCart(new Coupon())
  }

}
