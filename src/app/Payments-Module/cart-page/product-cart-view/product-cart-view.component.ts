import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

import { CartItem } from 'src/app/Modals/Customer/cart-item.modal';
import { AccountService } from 'src/app/services/account.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-cart-view',
  templateUrl: './product-cart-view.component.html',
  styleUrls: ['./product-cart-view.component.css']
})
export class ProductCartViewComponent implements OnInit, OnDestroy {

  @Input() cartItem: CartItem
  @Input() itemIndex: number
  
  @Output() showSizeMenu = new EventEmitter<{title: string, listItems: string[]}>()
  @Output() showQuantityMenu = new EventEmitter<{title: string, listItems: number[]}>()
  
  @Output() notification = new EventEmitter<string>()
  @Output() alert = new EventEmitter<string>()

  productId: number
  price: number = 0
  discount: number = 0
  discountPrice: number = 0
  image: string = ''
  title: string = ''
  
  sizes: string[] = []
  quantity: number[] = []

  cartUpdatesSubscription: any

  constructor(private accountService: AccountService, private productService: ProductService) {
    this.cartUpdatesSubscription = this.accountService.cartUpdates.subscribe(
      (cart) => {
        this.initialise()
      }
    )
  }

  ngOnInit() {
    this.initialise()
  }
  ngOnDestroy(){
    this.cartUpdatesSubscription.unsubscribe()
  }
  initialise(){
    this.price = this.cartItem.price
    this.discount = this.cartItem.discount
    this.discountPrice = Math.round((this.price) - (this.price * ((this.discount)/100)))

    let product = this.productService.getProduct(this.cartItem.productId)

    this.productId = product.getId()
    this.image = product.getImages()[0]
    this.title = product.getName()
    this.sizes = product.getSizeNamesList()

    this.quantity = []

    for(let i = 1; i <= product.getSize(this.cartItem.size).availableQuantity; i++){
      this.quantity.push(i)
    }

  }
  test(){
    console.log('working')
  }



  //Popup Menu methods

  openSizeMenu(){
    this.showSizeMenu.emit({title: 'Select Size', listItems: this.sizes})
  }
  openQuantityMenu(){
    this.showQuantityMenu.emit({title: 'Select Quantity', listItems: this.quantity})
  }
  


  //Alert and Notification methods

  removeCheck(){
    this.alert.emit('Do you want to remove ' + this.title + ' from your Cart?')
  }
  onMoveToWishlist(){
    if(!this.accountService.checkIfItemExistsInWishlist(this.cartItem.productId)){
      this.accountService.addItemToWishList(this.cartItem.productId)
    }
    this.accountService.removeItemFromCart(this.itemIndex)
    this.notification.emit(this.title + ' has been successfully moved to your Wishlist')
  }
}
