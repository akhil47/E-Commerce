import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductCart } from 'src/app/modals/product-cart.model';
import { OrderSummary } from 'src/app/modals/order-summary.modal';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartProducts: ProductCart[] = []
  orderSummary: OrderSummary

  popupActive: boolean = false;
  popupActiveMenu: string = ''
  popupItemIndex: number = 0
  popupTitle: string =''
  popupData: any[] = []

  constructor(private router: Router, private route: ActivatedRoute) {
    for(let i = 0; i < 5; i++){
      this.cartProducts.push(new ProductCart())
    }
    this.orderSummary = new OrderSummary()
  }

  ngOnInit() {
    for(let i = 0; i < 5; i++){
      this.cartProducts[i].name = 'Calvin Klein Jeans Men Blue Slim Fit Solid Casual Shirt'
      this.cartProducts[i].imageUrl = 'https://assets.jassets.com/h_600,q_95,w_440/v1/assets/images/productImage/2018/7/6/cd37416d-5556-4024-9d7f-bb5ebde43a6a1530825330030-1.webp'
      this.cartProducts[i].oldPrice = 99999
      this.cartProducts[i].newPrice = 9999
      this.cartProducts[i].discount = '90% Off'
      this.cartProducts[i].size = '41'
      this.cartProducts[i].quantity = 1
    }
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
    this.cartProducts[this.popupItemIndex].size = selectedItem
    console.log(selectedItem)
  }
  closeQuantityMenu(selectedItem){
    this.cartProducts[this.popupItemIndex].quantity = selectedItem
    console.log(selectedItem)
  }
}
