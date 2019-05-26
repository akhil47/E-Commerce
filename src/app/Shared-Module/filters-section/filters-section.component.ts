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
    'Levis',
    'Levis',
    'Levis',
    'Levis',
    'Levis',
    'Levis',
    'Levis',
    'Levis',
    'Levis'
  ]
  priceFilters: string[] = [
    '0-100',
    '100-200',
    '200-300',
    '300-400',
    '400-500',
    '500-600',
    '600-700',
    '700-800',
    '800-900',
    '900-1000'
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
