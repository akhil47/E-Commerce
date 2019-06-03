import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.css']
})
export class CheckboxFilterComponent implements OnInit {

  isExpanded: boolean = true;

  @Input() filterName: string = ''
  @Input() options: string[] = []
  
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
