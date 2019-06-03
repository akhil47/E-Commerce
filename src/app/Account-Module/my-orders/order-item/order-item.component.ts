import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/Modals/Customer/cart-item.modal';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() orderItem: CartItem
  name: string
  image: string
  discount: number
  discountPrice: number

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    let product = this.productService.getProduct(this.orderItem.productId)
    this.image = product.getImages()[0]
    this.name = product.getName()

    this.discount = Math.round(this.orderItem.price * (this.orderItem.discount/100))
    this.discountPrice = Math.round(this.orderItem.price - this.discount)
  }

}
