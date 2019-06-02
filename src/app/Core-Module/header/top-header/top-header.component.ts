import { Component, OnInit } from '@angular/core';
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
  onSubmit(form: NgForm){
    console.log(form.form.value)
  }

}
