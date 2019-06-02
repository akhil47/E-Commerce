import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/services/product.service';
import { AccountService } from 'src/app/services/account.service';
import { Cart } from 'src/app/Modals/Customer/cart.modal';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit, OnDestroy {

  cart: Cart
  isCartEmpty: boolean = true

  menuPopupActive: boolean = false;
  menuPopupItemIndex: number = 0
  menuPopupTitle: string =''
  menuPopupData: any[] = []

  notificationPopupActive: boolean = false
  notifyText: string = ''

  alertPopupActive: boolean = false
  alertText: string = ''
  alertItemIndex: number

  cartUpdatesSubscription: any

  constructor(private router: Router, 
    private route: ActivatedRoute, private productService: ProductService, 
    private accountService: AccountService) {
      this.cart = this.accountService.getCart()
      this.isCartEmpty = (this.cart.getCartItems().length > 0)? false : true
      this.cartUpdatesSubscription = this.accountService.cartUpdates.subscribe(
        (cart) =>{
          this.cart = cart
          if(cart.getCartItems().length != 0){
            this.isCartEmpty = false
          }
          else{
            this.isCartEmpty = true
          }
        }
      )
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.cartUpdatesSubscription.unsubscribe()
  }
  onPlaceOrder(){
    this.router.navigate(['/address'])
  }


  
  //Popup Menu methods

  openMenu(event: any, index: number){
    this.menuPopupActive = true;
    this.menuPopupTitle = event['title']
    this.menuPopupData = event['listItems']
    this.menuPopupItemIndex = index
  }
  closeMenu(event){
    this.menuPopupActive = false;
    if(this.menuPopupTitle == 'Select Size'){
      this.closeSizeMenu(event)
    }
    else if(this.menuPopupTitle == 'Select Quantity'){
      this.closeQuantityMenu(event)
    }
  }
  closeSizeMenu(selectedItem){
    let productId = this.cart.getCartItems()[this.menuPopupItemIndex].productId
    this.accountService.updateSizeOfCartItem(this.menuPopupItemIndex, productId, selectedItem)
  }
  closeQuantityMenu(selectedItem){
    let productId = this.cart.getCartItems()[this.menuPopupItemIndex].productId
    let size = this.cart.getCartItems()[this.menuPopupItemIndex].size

    this.accountService.updateQuantityOfCartItem(this.menuPopupItemIndex, productId, size, selectedItem)
  }


  //Notification Methods

  showNotification(text: string){
    this.notifyText = text
    this.notificationPopupActive = true
  }
  closeNotification(){
    this.notifyText = ''
    this.notificationPopupActive = false
  }



  //Alert Methods

  showAlert(text: string, index: number){
    this.alertText = text
    this.alertPopupActive = true
    this.alertItemIndex = index
  }
  closeAlert(choice: boolean){
    this.alertText = ''
    this.alertPopupActive = false
    if(choice) this.accountService.removeItemFromCart(this.alertItemIndex)
  }
}
