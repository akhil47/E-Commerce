import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters-section',
  templateUrl: './filters-section.component.html',
  styleUrls: ['./filters-section.component.css']
})
export class FiltersSectionComponent implements OnInit {

  @Output() filterSectionClose = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  onCloseFilters(){
    this.filterSectionClose.emit(true)
  }

}
