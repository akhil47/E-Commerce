import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/Modals/Product/product.modal';
import { ProductService } from 'src/app/services/product.service';
import { AccountService } from 'src/app/services/account.service';

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
  onMoveToCart(){
    //need size selection for product to be moved to cart
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
  

}