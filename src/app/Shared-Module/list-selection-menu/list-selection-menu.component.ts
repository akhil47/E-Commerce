import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-list-selection-menu',
  templateUrl: './list-selection-menu.component.html',
  styleUrls: ['./list-selection-menu.component.css']
})
export class ListSelectionMenuComponent implements OnInit {

  @Input() title: string
  @Input() listItems: any[]
  @Output() itemSelected = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }
  onItemSelect(item){
    this.itemSelected.emit(item)
  }
}
