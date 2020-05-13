import { Component, OnInit, HostListener } from '@angular/core';
import { BannerGridElement } from 'src/app/modals/banner-grid-element.modal';

@Component({
  selector: 'app-banners-grid',
  templateUrl: './banners-grid.component.html',
  styleUrls: ['./banners-grid.component.css']
})
export class BannersGridComponent implements OnInit {

  mobileViewEnabled : boolean
  title: string = 'Top Brands'

  @HostListener('window:resize', ['$event']) onResize(event) {
    if(event.target.innerWidth >= 768) this.mobileViewEnabled = false
    else this.mobileViewEnabled = true
  }

  banners: Array<BannerGridElement> = [
    new BannerGridElement('https://bit.ly/3dN06pb', '/search'),
    new BannerGridElement('https://bit.ly/3dGeX4t', '/'),
    new BannerGridElement('https://bit.ly/3buSVQC', '/'),
    new BannerGridElement('https://bit.ly/2Lm1xP9', '/'),
    new BannerGridElement('https://bit.ly/3dHOzr3', '/'),
    new BannerGridElement('https://bit.ly/2AjYS65', '/'),
    new BannerGridElement('https://bit.ly/2LC3NSB', '/'),
    new BannerGridElement('https://bit.ly/2zDnWEI', '/'),
    new BannerGridElement('https://bit.ly/2YYbwSE', '/'),
    new BannerGridElement('https://bit.ly/2WU8qMO', '/'),
  ]

  constructor() {
    if(window.innerWidth >= 768) this.mobileViewEnabled = false
    else this.mobileViewEnabled = true
  }

  ngOnInit(): void {
  }
  getBanners(startIndex: number, endIndex: number){
    return this.banners.slice(startIndex, endIndex)
  }

}
