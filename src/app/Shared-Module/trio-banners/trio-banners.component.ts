import { Component, OnInit } from '@angular/core';
import { BannerGridElement } from 'src/app/modals/banner-grid-element.modal';

@Component({
  selector: 'app-trio-banners',
  templateUrl: './trio-banners.component.html',
  styleUrls: ['./trio-banners.component.css']
})
export class TrioBannersComponent implements OnInit {

  title = "Today's Exlcusives"
  banners = [
    new BannerGridElement('https://bit.ly/2SZeQZO', '/'),
    new BannerGridElement('https://bit.ly/2X6jN4D', '/'),
    new BannerGridElement('https://bit.ly/3cvTlrn', '/')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
