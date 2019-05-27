import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { OrderSummary } from 'src/app/modals/order-summary.modal';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/Modals/Product/product.modal';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartProducts: Product[]
  orderSummary: OrderSummary

  popupActive: boolean = false;
  popupActiveMenu: string = ''
  popupItemIndex: number = 0
  popupTitle: string =''
  popupData: any[] = []

  constructor(private router: Router, 
    private route: ActivatedRoute, private productService: ProductService) {
      this.cartProducts = productService.products
      this.orderSummary = new OrderSummary()
  }

  ngOnInit() {
    this.orderSummary.MRP = 99999
    this.orderSummary.shippingCharges = 99999
    this.orderSummary.GST = 99999
    this.orderSummary.discount = 99999
    this.orderSummary.total = 99999
  }

  onPlaceOrder(){
    this.router.navigate(['/address'])
  }
  openSizeMenu(event: any, index: number){
    this.popupActive = true;
    this.popupTitle = event['title']
    this.popupData = event['listItems']
    this.popupActiveMenu = 'Size'
    this.popupItemIndex = index
    console.log(this.popupItemIndex)
  }
  openQuantityMenu(event: any, index: number){
    this.popupActive = true;
    this.popupTitle = event['title']
    this.popupData = event['listItems']
    this.popupActiveMenu = 'Quantity'
    this.popupItemIndex = index
    console.log(this.popupItemIndex)
  }
  closeMenu(event){
    this.popupActive = false;
    switch(this.popupActiveMenu){
      case 'Size':
        this.closeSizeMenu(event)
        break
      case 'Quantity':
        this.closeQuantityMenu(event)
        break
    }
  }
  closeSizeMenu(selectedItem){
    // this.cartProducts[this.popupItemIndex].size = selectedItem
    console.log(selectedItem)
  }
  closeQuantityMenu(selectedItem){
    // this.cartProducts[this.popupItemIndex].quantity = selectedItem
    console.log(selectedItem)
  }
}
