import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banners-section',
  templateUrl: './banners-section.component.html',
  styleUrls: ['./banners-section.component.css']
})
export class BannersSectionComponent implements OnInit {

  bannerLarge: string = ''
  bannerMedium: string[] = []
  bannerSmall: string[] = []

  constructor() {
  }

  ngOnInit() {
    this.intialiseBanners()
  }

  intialiseBanners(){
    this.bannerLarge = 'https://assets.jassets.com/assets/images/retaillabs/2019/3/14/1d544fdb-61c2-49f9-8b1e-7679f2b9d7211552546728308-THH-slider-New.jpg';
    this.bannerMedium = [
      'https://assets.jassets.com/assets/images/retaillabs/2019/2/22/e02e701a-d1cf-495d-b11d-d35c25d799ed1550826225366-Classic-heritage-shoes-RIGHT-610x450.webp',
      'https://assets.jassets.com/assets/images/retaillabs/2019/2/22/d03bb8f3-b60a-4f2f-89be-09da17a195f71550826225345-print-Shirts-Left-610x450.webp'
    ]
    this.bannerSmall = [
      'https://images.thesouledstore.com/public/theSoul/uploads/slider/tile-20181012130745.jpg',
      'https://images.thesouledstore.com/public/theSoul/uploads/slider/tile-20181012130113.jpg',
      'https://images.thesouledstore.com/public/theSoul/uploads/slider/tile-20181012125954.jpg',
      'https://images.thesouledstore.com/public/theSoul/uploads/slider/tile-20181012130005.jpg'
    ]
  }
}
