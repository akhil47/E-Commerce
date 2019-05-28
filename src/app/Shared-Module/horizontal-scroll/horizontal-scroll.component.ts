import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

import { Product } from 'src/app/Modals/Product/product.modal';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.css']
})
export class HorizontalScrollComponent implements OnInit, AfterViewInit {

  @ViewChild('productsMainContainer', { read: ElementRef }) public productsMainContainer: ElementRef;
  @ViewChild('leftArrowContainer') leftArrow: ElementRef;
  @ViewChild('rightArrowContainer') rightArrow: ElementRef;
  heightValue: string
  productList : Product[] = []

  constructor(private renderer: Renderer2, private productService: ProductService) {
    // temporary code will be replaced by service
    for(let i = 0; i < 10; i++){
      this.productList.push(productService.products[i])
    }
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    
    this.heightValue = (this.productsMainContainer.nativeElement.scrollHeight).toString() + 'px'
    // console.log(this.heightValue) // Working
    // this.renderer.setAttribute(this.leftArrow.nativeElement, 'height', this.heightValue)
    // this.renderer.setAttribute(this.rightArrow.nativeElement, 'height', this.heightValue)
  }

  public scrollRight(): void {
    this.productsMainContainer.nativeElement.scrollTo({ left: (this.productsMainContainer.nativeElement.scrollLeft + 200), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.productsMainContainer.nativeElement.scrollTo({ left: (this.productsMainContainer.nativeElement.scrollLeft - 200), behavior: 'smooth' });
  }


  onLeftScroll(){
    this.scrollLeft()
  }
  onRightScroll(){
    this.scrollRight()
  }
  onClick(){
    console.log('clicked')
  }
}