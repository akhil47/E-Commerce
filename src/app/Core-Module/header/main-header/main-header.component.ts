import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';


@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  logoURL: string = 'https://www.gstatic.com/webp/gallery3/2.png'
  sideBarIconColor: boolean = false;
  searchBar: boolean = false;
  menuItems: string[] = ['Men', 'Women', 'Kids', 'Accessories', 'Sports', 'Home Appliances']

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
  }
  getDropDown(dropDownName: string){
    return this.headerService.getDropDownList(dropDownName)
  }
  onOpenSideBar(){
    if(this.sideBarIconColor){
      this.closeSidebar()
    }
    else{
      this.sideBarIconColor = true;
      this.headerService.sideBarStatus.next(true)
      this.closeSearch()
    }
  }
  openSearch(){
    if(this.searchBar){
      this.closeSearch()
    }
    else{
      this.searchBar = true;
      this.closeSidebar()
    }
  }
  closeSidebar(){
    this.sideBarIconColor = false;
    this.headerService.sideBarStatus.next(false)
  }
  closeSearch(){
    this.searchBar = false;
  }

}
