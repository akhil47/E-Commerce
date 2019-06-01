import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {

  imageSelected: number
  @Input() images: string[]
  
  constructor() { }

  ngOnInit() {
    this.imageSelected = 0
  }
  changeImage(index: number){
    this.imageSelected = index
  }
  leftArrow(){
    if(this.imageSelected != 0) this.imageSelected -= 1
    else this.imageSelected = this.images.length - 1
  }
  rightArrow(){
    this.imageSelected = (this.imageSelected + 1) % this.images.length
  }

}