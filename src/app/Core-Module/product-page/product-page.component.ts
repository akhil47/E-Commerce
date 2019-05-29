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
  constructor(private productService: ProductService, private route: ActivatedRoute,
    private accountService: AccountService) {
    
  }

  ngOnInit() {
    this.productId = this.route.snapshot.params['id']
    this.product = this.productService.getProduct(this.productId)
  }
  addToCart(){
    let cartItem = new CartItem()
    cartItem.productId = this.productId
    cartItem.size = 'S'
    cartItem.quantity = 1
    cartItem.price = 4999
    cartItem.discount = 20
    this.accountService.addItemToCart(cartItem)
    // Dynamic assignment is needed
  }
  addToWishList(){
    this.accountService.addItemToWishList(this.productId)
  }

}
