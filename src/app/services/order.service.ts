import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Coupon } from '../Modals/Order/coupon.modal';
import { Order } from '../Modals/Order/order.modal';
import { Cart } from '../Modals/Customer/cart.modal';
import { AccountService } from './account.service';
import { Address } from '../Modals/Customer/address.modal';
import { OrderTimeline } from '../Modals/Order/order-timeline.modal';

@Injectable()
export class OrderService{

    private couponsList: Coupon[]

    private ordersList: Order[] = []

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
    getOrdersList(){
        return this.ordersList
    }
    placeOrder(cart: Cart, address: Address){
        let order = new Order()
        order.id = Math.floor((Math.random() * 10000) + 1);
        order.customerId = this.accountService.getMail()
        order.pinCode = address.pincode
        order.address = address
        order.orderDetails = cart
        order.paymentMode = "COD"
        order.paymentStatus = "Pending"
        order.orderStatus = "Placed"

        order.timeline = new OrderTimeline()
        order.timeline.placementDate = '03-06-2019'
        order.timeline.shippedDate = 'N/A'
        order.timeline.deliveryDate = 'N/A'

        for(let i = 0; i < cart.getCartItems().length; i++){
            order.orderDetails.updateStatusOfCartitem(i, "Placed")
        }
        this.ordersList.push(order)
        console.log(this.ordersList)
    }

    
}