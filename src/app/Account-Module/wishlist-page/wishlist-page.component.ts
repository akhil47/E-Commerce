import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/Modals/Product/product.modal';
import { ProductService } from 'src/app/services/product.service';
import { AccountService } from 'src/app/services/account.service';
import { CartItem } from 'src/app/Modals/Customer/cart-item.modal';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css']
})
export class WishlistPageComponent implements OnInit, OnDestroy {

  wishListProductId: number[] 
  wishListProducts: Product[]

  alertPopupActive: boolean = false
  alertText: string = ''
  alertProductId: number

  notificationPopupActive: boolean = false
  notificationText: string =''

  sizePopupActive: boolean = false
  sizePopupProduct: Product
  sizeText: string = 'Select Size'
  sizeListItems: string[] = []

  wishListUpdatesSubscription: any
  
  constructor(private productService: ProductService, private accountService: AccountService) {

    this.wishListProductId = this.accountService.getWishlist()
    this.wishListProducts = this.productService.getWishListItems(this.wishListProductId)


    this.wishListUpdatesSubscription = this.accountService.wishListUpdates.subscribe(
      (ids: number[]) => {
        this.wishListProductId = ids
        this.wishListProducts = this.productService.getWishListItems(this.wishListProductId)
      }
    )


  }
  ngOnInit() {
  }
  ngOnDestroy(){
    this.wishListUpdatesSubscription.unsubscribe()
  }
  moveToCart(product: Product, size: string){
    if(!this.accountService.checkIfProductExistsInCart(product.getId(), size)){
      let item = product.getSize(size)
      let cartItem = new CartItem()

      cartItem.productId = product.getId()
      cartItem.size = size
      cartItem.quantity = 1
      cartItem.price = item.price
      cartItem.discount = item.discount
      
      this.accountService.addItemToCart(cartItem)
    }
    this.accountService.removeItemFromWishList(product.getId())
    this.notificationText = product.getName() + ' has been successfully added to your Cart!'
    this.openNotification()
  }



  //Nofitication Methods

  openNotification(){
    this.notificationPopupActive = true
  }
  closeNotification(){
    this.notificationText = ''
    this.notificationPopupActive = false
  }



  //Alert methods

  openAlert(productId: number){
    this.alertProductId = productId
    let product = this.productService.getProduct(productId)
    this.alertText = 'Do you want to remove ' + product.getName() + ' from your Wishlist?'
    this.alertPopupActive = true
  }
  closeAlert(choice: boolean){
    this.alertPopupActive = false
    this.alertText = ''
    this.alertProductId = undefined
    if(choice) this.accountService.removeItemFromWishList(this.alertProductId)
  }
  


  // Size Selection Methods
  openSizePopup(product: Product){
    this.sizeListItems = product.getSizeNamesList()
    this.sizePopupProduct = product
    this.sizePopupActive = true
  }
  closeSizePopup(size: string){
    this.sizePopupActive = false
    this.sizeListItems = []
    this.moveToCart(this.sizePopupProduct, size)
    this.sizePopupProduct = undefined
  }

}