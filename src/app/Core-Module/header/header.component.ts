import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

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
  }

}
