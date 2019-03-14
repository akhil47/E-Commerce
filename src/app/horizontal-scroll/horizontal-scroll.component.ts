import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../modals/product.modal';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.css']
})
export class HorizontalScrollComponent implements OnInit {

  @ViewChild('productsMainContainer', { read: ElementRef }) public bannersContent: ElementRef<any>;

  productList : Product[] = []

  constructor() {
    // temporary code will be replaced by service
    for(let i = 0; i < 10; i++){
      this.productList.push(new Product())
    }
  }

  ngOnInit() {
  }

  public scrollRight(): void {
    this.bannersContent.nativeElement.scrollTo({ left: (this.bannersContent.nativeElement.scrollLeft + 200), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.bannersContent.nativeElement.scrollTo({ left: (this.bannersContent.nativeElement.scrollLeft - 200), behavior: 'smooth' });
  }

  onLeftScroll(){
    this.scrollLeft()
    console.log('left')
  }
  onRightScroll(){
    this.scrollRight()
    console.log('right')
  }
}