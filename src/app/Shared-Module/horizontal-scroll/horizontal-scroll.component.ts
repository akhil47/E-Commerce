import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Product } from 'src/app/modals/product.modal';


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

  constructor(private renderer: Renderer2) {
    // temporary code will be replaced by service
    for(let i = 0; i < 10; i++){
      this.productList.push(new Product())
    }
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    
    this.heightValue = (this.productsMainContainer.nativeElement.scrollHeight).toString() + 'px'
    console.log(this.heightValue) // Working
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
}