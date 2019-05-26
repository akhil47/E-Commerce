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
}
