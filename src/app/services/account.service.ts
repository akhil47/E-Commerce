import { Subject } from 'rxjs';
import { Customer } from '../Modals/Customer/customer.modal';
import { Address } from '../Modals/Customer/address.modal';
import { CartItem } from '../Modals/Customer/cart-item.modal';
import { Cart } from '../Modals/Customer/cart.modal';
import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable()
export class AccountService{

    private customer: Customer

    mobileMenuStateChanged = new Subject<boolean>();
    mobileMenuItemSelectedState = new Subject<boolean>();
    addressEditStatus = new Subject<boolean>();

    addressUpdates = new Subject<Address[]>()
    addressEdit = new Subject<{address: Address, index: number, title: string, editMode: boolean}>()

    profileEdit = new Subject<Object>()

    wishListUpdates = new Subject<number[]>()
    cartUpdates = new Subject<Cart>()
    
    constructor(private productService: ProductService){
        this.customer = new Customer()
        this.initCustomer()
        this.addressUpdates.next(this.customer.getAddresses())
    }
    initCustomer(){
        this.customer.setName('Akhilesh Lingala')
        this.customer.setMobileNo('91xxx xxxxx')
        this.customer.setMail('akhil@gmail.com')
        this.customer.setGender('Male')
        this.customer.setStatus(true)
        this.customer.setJoinedOn('27-05-2019')

        var addrs = [new Address(), new Address(), new Address(), new Address()]
        for(let i = 0; i < 4; i++){
            addrs[i].name = "Akhilesh Lingala"
            addrs[i].mobile = '91XXXXXXXX'
            addrs[i].doorNo = '12/Z, Sector - 10'
            addrs[i].area = 'Ukkunagaram'
            addrs[i].city = 'Visakhapatnam'
            addrs[i].state = 'Andhra Pradesh'
            addrs[i].pincode = '530036'
        }
        this.customer.setAddresses(addrs)
        this.customer.setWishlist([10, 1]) // set it dynamically
    }
    // Basic Get and Set Methods of Customer
    getCart(){
        return this.customer.getCart()
    }
    getAddresses(){
        return this.customer.getAddresses()
    }
    getWishlist(){
        return this.customer.getWishlist()
    }
    getName(){
        return this.customer.getName()
    }
    getMobileNo(){
        return this.customer.getMobileNo()
    }
    getMail(){
        return this.customer.getMail()
    }
    getGender(){
        return this.customer.getGender()
    }



    // Update Methods

    pushProfileEditData(data: Object){
        // Solution function after major headache :)
        setTimeout(()=>{
            this.profileEdit.next(data)
            //Timeout will be applied only to the code placed inside this anonymous function
        }, 50)
    }
    pushEditAddressData(addr: Address, i: number, header: string){
        // Solution function after major headache :)
        setTimeout(()=>{
            this.addressEdit.next({address: addr, index: i, title: header, editMode: true})
            //Timeout will be applied only to the code placed inside this anonymous function
        }, 50)
        
    }
    pushNewAddressData(header: string){
        // Solution function after major headache :)
        setTimeout(()=>{
            this.addressEdit.next({address: new Address(), index: 0, title: header, editMode: false})
            //Timeout will be applied only to the code placed inside this anonymous function
        }, 30)
    }

    
    addAddress(address: Address){
        this.customer.addAddress(address)
        this.addressUpdates.next(this.customer.getAddresses())
    }
    removeAddress(index: number){
        this.customer.removeAddress(index)
        this.addressUpdates.next(this.customer.getAddresses())
    }
    updateAddress(address: Address, index: number){
        this.customer.updateAddress(address, index)
        this.addressUpdates.next(this.customer.getAddresses())
    }
    updateProfile(data: Object){
        this.customer.setName(data['name'])
        this.customer.setGender(data['gender'])
        this.customer.setMobileNo(data['mobileNo'])
        this.customer.setMail(data['mail'])
    }
    

    addItemToWishList(id: number){
        this.customer.addProductToWishlist(id)
        this.wishListUpdates.next(this.customer.getWishlist())
    }
    removeItemFromWishList(id: number){
        this.customer.removeProductFromWishlist(id)
        this.wishListUpdates.next(this.customer.getWishlist())
    }
    addItemToCart(item: CartItem){
        this.customer.addProductToCart(item)
        this.customer.updateCartSummary(0)
        this.cartUpdates.next(this.customer.getCart())
    }
    removeItemFromCart(index: number){
        this.customer.removeProductFromCart(index)
        this.customer.updateCartSummary(0)
        this.cartUpdates.next(this.customer.getCart())
    }



    updateSizeOfCartItem(index: number, productId: number, size: string){
        let product = this.productService.getProduct(productId)
        let sizeDetails = product.getSize(size)

        this.customer.updateSizeOfCartItem(index, size, 1, sizeDetails.price, sizeDetails.discount)
        this.customer.updateCartSummary(0)
        this.cartUpdates.next(this.customer.getCart())
    }
    updateQuantityOfCartItem(index: number, productId: number, size: string, quantity: number){
        let product = this.productService.getProduct(productId)
        let sizeDetails = product.getSize(size)

        this.customer.updateQuantityOfCartItem(index, sizeDetails.price, quantity)
        this.customer.updateCartSummary(0)
        this.cartUpdates.next(this.customer.getCart())
    }

}