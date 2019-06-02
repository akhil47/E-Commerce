import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from 'src/app/Modals/Product/product.modal';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { CartItem } from 'src/app/Modals/Customer/cart-item.modal';
import { DummyServer } from 'src/app/services/dummy-server.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  
  product: Product
  productId: number
  productDiscount: number
  selectedSize: string
  sizeNotSelected: boolean = false

  itemInWishlist:boolean = false

  notificationPopupActive: boolean = false
  notifyText: string

  alertPopupActive: boolean = false
  alertText: string

  isLoggedIn: boolean = false

  constructor(private productService: ProductService, private route: ActivatedRoute,
    private accountService: AccountService, private server: DummyServer) {
      this.isLoggedIn = this.server.isLoggedIn()
  }

  ngOnInit() {
    this.productId = this.route.snapshot.params['id']
    this.product = this.productService.getProduct(this.productId)

    let discount = this.product.getSizeList()[0].price * (this.product.getSizeList()[0].discount /100)
    this.productDiscount = Math.round(this.product.getSizeList()[0].price - discount)

    this.itemInWishlist = this.accountService.checkIfItemExistsInWishlist(this.productId)
  }


  // Wishlist methods

  addToWishList(){
    this.accountService.addItemToWishList(this.productId)
    this.notifyText = this.product.getName() + 
      ' has been added to your Wishlist successfully'
    this.openNotification()
    this.itemInWishlist = true
  }
  removeFromWishList(){
    this.alertText = 'Do you want to remove ' + this.product.getName() + ' from your Wishlist?'
    this.openAlert()
  }



  //Cart methods

  addToCart(){
    this.selectedSize = this.productService.sizeActive
    if(this.selectedSize == 'none'){
      this.sizeNotSelected = true
      return
    }
    else{
      this.sizeNotSelected = false
      this.addItemToCart()
    }
    
  }
  addItemToCart(){
    if(!this.accountService.checkIfProductExistsInCart(
      this.productId, this.selectedSize)){
        let item = this.product.getSize(this.selectedSize)
        let cartItem = new CartItem()

        cartItem.productId = this.productId
        cartItem.size = this.selectedSize
        cartItem.quantity = 1
        cartItem.price = item.price
        cartItem.discount = item.discount
        this.accountService.addItemToCart(cartItem)
      }
      this.productService.sizeSelected.next('none')
      this.notifyText = this.product.getName() + ' has been added to your Cart successfully'
      this.openNotification()
  }



  //Notification methods

  openNotification(){
    this.notificationPopupActive = true
  }
  closeNotification(){
    this.notificationPopupActive = false
    this.notifyText = ''
  }



  //Alert Methods

  openAlert(){
    this.alertPopupActive = true
  }
  closeAlert(value: boolean){
    this.alertPopupActive = false
    this.alertText = ''
    if(value){
      this.accountService.removeItemFromWishList(this.productId)
      this.itemInWishlist = false
    }
  }
}
