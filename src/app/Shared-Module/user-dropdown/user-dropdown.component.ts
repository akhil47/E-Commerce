import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.css']
})
export class UserDropdownComponent implements OnInit {

  loginSuccess: boolean = false

  title: string = 'Welcome to XYZ'
  description: string = 'To access account and manage orders'

  constructor() { }

  ngOnInit() {
  }

}
