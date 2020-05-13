import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-large-banner',
  templateUrl: './large-banner.component.html',
  styleUrls: ['./large-banner.component.css']
})
export class LargeBannerComponent implements OnInit {

  @Input() image: string = 'https://bit.ly/2LmpBkQ'
  @Input() link: string = '/'

  constructor() { }

  ngOnInit(): void {
  }

}
