import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit, OnDestroy {

  @Input() size: string

  isActive: boolean = false

  sizeSelectedSubscription: any

  constructor(private productService: ProductService) {
    this.sizeSelectedSubscription = this.productService.sizeSelected.subscribe(
      (size: string) => {
        if(size == this.size){
          if(this.isActive){
            this.isActive = false
            this.productService.sizeActive = 'none'
          }
          else{
            this.isActive = true
            this.productService.sizeActive = this.size
          }
        }
        else{
          this.isActive = false
        }
      }
    )
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.sizeSelectedSubscription.unsubscribe()
  }
  onSelect(){
    this.productService.sizeSelected.next(this.size)
  }

}
