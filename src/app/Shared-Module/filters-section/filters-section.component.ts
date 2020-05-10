import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters-section',
  templateUrl: './filters-section.component.html',
  styleUrls: ['./filters-section.component.css']
})
export class FiltersSectionComponent implements OnInit {

  @Output() filterSectionClose = new EventEmitter<boolean>()

  brandFilters: string[] = [
    'Levis',
    'Tommy Hilfiger',
    'Adidas',
    'Nike',
    'United Colors of Benninton',
    'Wrangler',
    'White House',
    'Gas',
    'Louis Phillipe',
    'Roadster'
  ]
  priceFilters: string[] = [
    '10% Discount and above',
    '20% Discount and above',
    '30% Discount and above',
    '40% Discount and above',
    '50% Discount and above',
    '60% Discount and above',
    '70% Discount and above',
    '80% Discount and above',
  ]
  //filter string arrays should be imported by a service 
  //using a data model(to be developed)
  constructor() { }

  ngOnInit() {
  }

  onCloseFilters(){
    this.filterSectionClose.emit(true)
  }

}
