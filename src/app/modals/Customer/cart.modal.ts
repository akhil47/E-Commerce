import { CartItem } from './cart-item.modal';

export class Cart{
    private cartItems: CartItem[]
    MRP: number
    shippingCharges: number
    GST: number
    discount: number
    couponDiscount: number
    total: number
    constructor(){
        this.cartItems = []
    }
    getCartItems(){
        return this.cartItems;
    }


    
    // Cart Item Modification Methods

    addCartItem(item: CartItem){
        this.cartItems.push(item)
    }
    removeCartItem(index: number){
        this.cartItems.splice(index, 1)
    }
    updateSizeOfCartItem(index: number, size: string, quantity: number,
        price: number, discount: number){
            this.cartItems[index].size = size;
            this.cartItems[index].quantity = quantity
            this.cartItems[index].price = price * quantity
            this.cartItems[index].discount = discount
        }
    updateQuantityOfCartItem(index: number, price: number, quantity: number){
        this.cartItems[index].quantity = quantity
        this.cartItems[index].price = price * quantity
    }



    // Cart Value Calculation Methods

    calculateCartValues(shippingCharges: number){
        this.MRP = Math.round(this.calculateMRP())
        this.shippingCharges = Math.round(shippingCharges)
        this.discount = Math.round(this.calculateDiscount())
        this.GST = Math.round((this.MRP - this.discount) * 0.05)
        
        this.couponDiscount = Math.round(0) //Update Later to method call
        this.total = Math.round(this.calculateTotal())
    }
    private calculateMRP(){
        let mrp: number = 0
        for(let item of this.cartItems){
            mrp += item.price
        }
        return mrp
    }
    private calculateDiscount(){
        let totalDiscount: number = 0
        for(let item of this.cartItems){
            let itemDiscount = item.price * (item.discount/100) 
            totalDiscount += itemDiscount
        }
        return totalDiscount
    }
    private calculateTotal(){
        let total = this.MRP + this.shippingCharges + this.GST
        total = total - (this.discount + this.couponDiscount)
        return total
    }
}