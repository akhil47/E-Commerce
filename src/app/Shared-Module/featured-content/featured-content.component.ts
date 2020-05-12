import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-content',
  templateUrl: './featured-content.component.html',
  styleUrls: ['./featured-content.component.css']
})
export class FeaturedContentComponent implements OnInit, AfterViewInit {

  @ViewChild('imageSlider') slider : ElementRef
  @ViewChildren('image') images : QueryList<ElementRef>

  // Use different images for desktop and mobile versions
  imageList: string[] = [
    "https://images.thesouledstore.com/public/theSoul/uploads/slider/20190301172946.jpg",
    "https://images.thesouledstore.com/public/theSoul/uploads/slider/20190314140013.jpg",
    "https://images.thesouledstore.com/public/theSoul/uploads/slider/20190301173035.jpg",
    "https://images.thesouledstore.com/public/theSoul/uploads/slider/20190305102901.jpg",
    "https://images.thesouledstore.com/public/theSoul/uploads/slider/20190124122644.jpg"
  ]
  linksList = ['search', 'search', 'search', 'search', 'search']

  firstClone: string
  firstCloneLink: string

  lastClone: string
  lastCloneLink: string

  currentImage: string
  counter: number = 1
  size : number = 0

  constructor(private renderer: Renderer2, private router: Router) {
    setInterval(()=>{ this.nextSlide() }, 5000)
    this.firstClone = this.imageList[0]
    this.firstCloneLink = this.linksList[0]
    this.lastClone = this.imageList[this.imageList.length - 1]
    this.lastCloneLink = this.linksList[this.linksList.length - 1]
  }
  ngOnInit() {
    
  }
  ngAfterViewInit(){
    this.size = this.slider.nativeElement.offsetWidth
    this.renderer.setStyle(this.slider.nativeElement, 'transform', 'translateX(' + (-this.size * this.counter) + 'px)')
  }
  
  imageLinkClicked(link: string){
    this.router.navigate(['/' + link])
  }

  previousSlide(){
    if(this.counter <=0) return
    this.counter -= 1;
    this.applyTransition('transform 0.4s ease-in-out')
  }
  nextSlide(){
    if(this.counter >= this.images.length - 1) return
    this.counter += 1
    this.applyTransition('transform 0.4s ease-in-out')
  }
  transitionEnd($event){
    // After each sliding transtion end(when sliding effect ends) it checks 
    // wheather we have reached last slide or first slide
    // if we reached first slide and try to go back then 
    // lastClone is used to continue animation and is later reseted
    // to original last slide, similarly for the first slide.

    if(this.images['_results'][this.counter].nativeElement.id == 'lastClone'){
      this.counter = this.images.length - 2
      this.applyTransition('none')
    }
    if(this.images['_results'][this.counter].nativeElement.id == 'firstClone'){
      this.counter = this.images.length - this.counter
      this.applyTransition('none')
    }
  }
  applyTransition(transitionType: string){
    this.renderer.setStyle(this.slider.nativeElement, 'transition', transitionType)
    this.renderer.setStyle(this.slider.nativeElement, 'transform', 'translateX(' + (-this.size * this.counter) + 'px)')
  }

  
}
