import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/Modals/Product/product.modal';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { CartItem } from 'src/app/Modals/Customer/cart-item.modal';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  
  product: Product
  productId: number
  selectedSize: string
  sizeNotSelected: boolean = false

  popupActive: boolean = false
  notifyText: string

  constructor(private productService: ProductService, private route: ActivatedRoute,
    private accountService: AccountService) {
    
  }

  ngOnInit() {
    this.productId = this.route.snapshot.params['id']
    this.product = this.productService.getProduct(this.productId)
  }



  // Wishlist and Cart methods

  addToWishList(){
    this.accountService.addItemToWishList(this.productId)
    this.notifyText = this.product.getName() + 
      ' has been added to your Wishlist successfully'
    this.popupActive = true
  }
  addToCart(){
    if(typeof this.selectedSize === 'undefined'){
      this.sizeNotSelected = true
      return
    }
    else{
      this.sizeNotSelected = false
      this.addItemToCart()
    }
    
  }
  addItemToCart(){
    let item = this.productService.getProduct(this.productId).getSize(this.selectedSize)
    let cartItem = new CartItem()

    cartItem.productId = this.productId
    cartItem.size = this.selectedSize
    cartItem.quantity = 1
    cartItem.price = item.price
    cartItem.discount = item.discount
    this.accountService.addItemToCart(cartItem)
    this.openPopup()
  }



  //Notification methods

  openPopup(){
    this.notifyText = this.product.getName() + ' has been added to your Cart successfully'
    this.popupActive = true
  }
  closePopup(){
    this.popupActive = false
    this.notifyText = ''
  }
}
