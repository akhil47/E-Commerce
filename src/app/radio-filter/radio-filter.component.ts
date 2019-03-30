import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-filter',
  templateUrl: './radio-filter.component.html',
  styleUrls: ['./radio-filter.component.css']
})
export class RadioFilterComponent implements OnInit {

  isExpanded: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onExpand(){
    if(this.isExpanded){
      this.isExpanded = false;
    }
    else{
      this.isExpanded = true;
    }
  }

}
