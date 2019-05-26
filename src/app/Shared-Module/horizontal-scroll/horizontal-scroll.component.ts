import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { ProductDisplay } from 'src/app/modals/product-display.modal';


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
  productList : ProductDisplay[] = []

  constructor(private renderer: Renderer2) {
    // temporary code will be replaced by service
    for(let i = 0; i < 10; i++){
      this.productList.push(new ProductDisplay())
    }
  }

  ngOnInit() {
    for(let i = 0; i < 10; i++){
      this.productList[i].name = 'Tommy Hilfiger White Regular Fit Solid Casual Shirt';
      this.productList[i].imageUrl = 'https://snow-commerce.imgix.net/aetv/history/products/the_curse_of_oak_island/apparel/merch//COOI-tShirt-Men-Cotton-Charcoal.jpg?auto=compress&fm=pjpg&q=80&cs=strip&h=200&w=200'
      this.productList[i].oldPrice = 4799
      this.productList[i].newPrice = 3999
      this.productList[i].discount = ' ( 17% Off )'
      this.productList[i].sizes = 'S M L XL XXL'
    }
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