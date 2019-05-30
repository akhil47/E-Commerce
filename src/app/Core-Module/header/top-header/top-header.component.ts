import { Component, OnInit } from '@angular/core';
import { DropdownList } from 'src/app/modals/dropdown-list.modal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
  onsSubmit(form: NgForm){
    console.log(form.form.value)
  }

}
