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

  popupActive: boolean = false;
  popupItemIndex: number = 0
  popupTitle: string =''
  popupData: any[] = []

  cartUpdatesSubscription: any

  constructor(private router: Router, 
    private route: ActivatedRoute, private productService: ProductService, 
    private accountService: AccountService) {
      this.cart = this.accountService.getCart()
      this.cartUpdatesSubscription = this.accountService.cartUpdates.subscribe(
        (cart) =>{
          this.cart = cart
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
  openMenu(event: any, index: number){
    this.popupActive = true;
    this.popupTitle = event['title']
    this.popupData = event['listItems']
    this.popupItemIndex = index
  }
  closeMenu(event){
    this.popupActive = false;
    switch(this.popupTitle){
      case 'Select Size':
        this.closeSizeMenu(event)
        break
      case 'Select Quantity':
        this.closeQuantityMenu(event)
        break
    }
  }
  closeSizeMenu(selectedItem){
    let productId = this.cart.getCartItems()[this.popupItemIndex].productId
    this.accountService.updateSizeOfCartItem(this.popupItemIndex, productId, selectedItem)
  }
  closeQuantityMenu(selectedItem){
    let productId = this.cart.getCartItems()[this.popupItemIndex].productId
    let size = this.cart.getCartItems()[this.popupItemIndex].size

    this.accountService.updateQuantityOfCartItem(this.popupItemIndex, productId, size, selectedItem)
  }
}
