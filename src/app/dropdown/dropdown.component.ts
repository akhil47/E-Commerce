import { Component, OnInit, Input } from '@angular/core';
import { DropdownList } from '../modals/dropdown-list.modal';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() dropDownLists: DropdownList[] = []

  constructor() { }

  ngOnInit() {
  }

}
