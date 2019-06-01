import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {

  imageSelected: string
  @Input() images: string[]
  
  constructor() { }

  ngOnInit() {
    this.imageSelected = this.images[0]
  }
  changeImage(index: number){
    this.imageSelected = this.images[index]
  }

}
