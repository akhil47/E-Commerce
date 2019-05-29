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
  
  product: Product //For later use
  productId: number
  selectedSize: string
  sizeNotSelected: boolean = false

  constructor(private productService: ProductService, private route: ActivatedRoute,
    private accountService: AccountService) {
    
  }

  ngOnInit() {
    this.productId = this.route.snapshot.params['id']
    this.product = this.productService.getProduct(this.productId)
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
  addToWishList(){
    this.accountService.addItemToWishList(this.productId)
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
  }

}
