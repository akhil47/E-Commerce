import { User } from './user.modal';
import { Address } from './address.modal';
import { Cart } from './cart.modal';
import { CartItem } from './cart-item.modal';

export class Customer extends User{
    private name: string
    private mobileNo: string
    private mail: string
    private gender: string
    private addresses: Address[]
    private wishlist: number[]
    private cart: Cart
    private status: boolean
    private joinedOn: string
    constructor(){
        super()
        this.addresses = []
        this.wishlist = []
        this.cart = new Cart()
    }
    // Get methods
    getName(){ return this.name }
    getMobileNo(){ return this.mobileNo }
    getMail(){ return this.mail }
    getGender(){ return this.gender }
    getAddresses(){ return this.addresses }
    getWishlist(){ return this.wishlist }
    getCart(){ return this.cart }
    getStatus() { return this.status }
    getJoinedOn() { return this.joinedOn }

    // Set methods
    setName(name: string){
        this.name = name
    }
    setMobileNo(mobileNo: string){
        this.name = name
    }
    setMail(mail: string){
        this.mail = mail
    }
    setGender(gender: string){
        this.gender = gender
    }
    setAddresses(addressList: Address[]){
        this.addresses = addressList
    }
    setWishlist(wishlist: number[]){
        this.wishlist = wishlist
    }
    setCart(cart: Cart){
        this.cart = cart
    }
    setStatus(status: boolean){
        this.status = status
    }
    setJoinedOn(joinedOn: string){
        this.joinedOn = joinedOn
    }

    // Update Methods
    addProductToWishlist(productId: number){
        this.wishlist.push(productId)
    }
    removeProductFromWishlist(productId: number){
        // Yet to write
    }
    addProductToCart(item: CartItem){
        this.cart.cartItems.push(item)
    }
    removeProductFromCart(productId: number){
        // yet to write
    }
    addAddress(address: Address){
        this.addresses.push(address)
    }
    removeAddress(){
        // yet to write
    }
}