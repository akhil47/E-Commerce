import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  toggleSideBar: boolean = false;

  ngOnInit() {
  }

  openSideBar(event){
    if(this.toggleSideBar){
      this.toggleSideBar = false;
    }
    else{
      this.toggleSideBar = true;
    }
    console.log('openSideBar()')
  }

}
