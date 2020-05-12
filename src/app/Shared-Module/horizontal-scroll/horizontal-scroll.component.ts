import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import { Product } from 'src/app/Modals/Product/product.modal';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.css']
})
export class HorizontalScrollComponent implements OnInit {

  @ViewChild('itemsContainer', { read: ElementRef, static: true }) public itemsContainer: ElementRef;
  
  title: string = 'Featured Products'
  itemsList : Product[] = []

  constructor(private productService: ProductService) {
    // temporary code will be replaced by service
    for(let i = 0; i < 20; i++){
      this.itemsList.push(this.productService.products[i])
    }
  }

  ngOnInit() {
  }

  onLeftScroll(){
    this.itemsContainer.nativeElement.scrollTo({ left: (this.itemsContainer.nativeElement.scrollLeft - 200), behavior: 'smooth' });
  }
  onRightScroll(){
    this.itemsContainer.nativeElement.scrollTo({ left: (this.itemsContainer.nativeElement.scrollLeft + 200), behavior: 'smooth' });
  }

}