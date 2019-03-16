import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-featured-content',
  templateUrl: './featured-content.component.html',
  styleUrls: ['./featured-content.component.css']
})
export class FeaturedContentComponent implements OnInit {

  imageList: string[] = [
    "https://images.thesouledstore.com/public/theSoul/uploads/slider/20190301172946.jpg",
    "https://images.thesouledstore.com/public/theSoul/uploads/slider/20190314140013.jpg",
    "https://images.thesouledstore.com/public/theSoul/uploads/slider/20190301173035.jpg",
    "https://images.thesouledstore.com/public/theSoul/uploads/slider/20190305102901.jpg",
    "https://images.thesouledstore.com/public/theSoul/uploads/slider/20190124122644.jpg"
  ]

  currentImage: string
  counter: number = 0

  constructor() {
    this.currentImage = this.imageList[this.counter]
    setInterval(()=>{
      if(this.counter < 4){
        this.counter++
      }
      else{
        this.counter = 0
      }
      this.currentImage = this.imageList[this.counter]
    }, 5000)
    
  }
  ngOnInit() {
  }

  activateSlide(index){
    this.counter = index
    this.currentImage = this.imageList[index]
  }

  backwardSlide(){
    if(this.counter == 0){
      this.counter = 4
    }
    else{
      this.counter -= 1
    }
    this.currentImage = this.imageList[this.counter]
  }

  forwardSlide(){
    if(this.counter == 4){
      this.counter = 0
    }
    else{
      this.counter += 1
    }
    this.currentImage = this.imageList[this.counter]
  }

  
}
