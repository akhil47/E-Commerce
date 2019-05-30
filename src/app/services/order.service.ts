import { Coupon } from '../Modals/Order/coupon.modal';
import { Subject } from 'rxjs';

export class OrderService{
    private couponsList: Coupon[]

    couponsListUpdates = new Subject<Coupon[]>()

    constructor(){
        this.couponsList = []
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
}