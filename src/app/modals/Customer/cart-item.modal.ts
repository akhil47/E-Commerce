export class CartItem{
    productId: number
    size: string
    quantity: number
    price: number //total price when quantity is more than one
    discount: number
    constructor(){}
    // price calculation method is required
}