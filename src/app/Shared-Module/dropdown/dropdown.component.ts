import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/Modals/Product/category.modal';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() categories: Category

  constructor() { }

  ngOnInit() {
  }

}
