import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Coupon } from '../Modals/Order/coupon.modal';
import { Order } from '../Modals/Order/order.modal';
import { Cart } from '../Modals/Customer/cart.modal';
import { AccountService } from './account.service';

@Injectable()
export class OrderService{

    private couponsList: Coupon[]

    newOrder: Order
    ordersList: Order[]

    couponsListUpdates = new Subject<Coupon[]>()

    constructor(private accountService: AccountService){
        this.couponsList = []
        this.initCoupons()
    }
    initCoupons(){
        for(let i = 1; i <= 5; i++){
            let coupon = new Coupon()
            coupon.code = 'MAYBONANZA'+ (i * 10)
            coupon.description = 'Get ' + (i * 10) + '% off upto Rs. ' + (i * 100) + ', on your orders above Rs. 500'
            coupon.discount = (i * 10)
            coupon.maxDiscountAmount = (i * 100)
            coupon.validTill = '27-06-2019'
            this.couponsList.push(coupon)
        }
    }
    getCouponsList(){
        return this.couponsList
    }
    placeOrder(cart: Cart){
    }

    
}