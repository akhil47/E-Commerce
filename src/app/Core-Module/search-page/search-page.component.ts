import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  areFiltersActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openFilters(){
    if(this.areFiltersActive){
      this.areFiltersActive = false;
    }
    else{
      this.areFiltersActive = true;
    }
  }
  closeFilters(){
    this.areFiltersActive = false;
  }
}
