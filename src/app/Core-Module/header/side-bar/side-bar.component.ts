import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {

  constructor(private headerService: HeaderService, private accountService: AccountService) { }

  sidebarActive : boolean = false;

  menMenu: boolean = false;
  womenMenu: boolean = false;
  kidsMenu: boolean = false;
  accessoriesMenu: boolean = false;

  sideBarStatusSubscription: any
  

  ngOnInit() {
    this.sideBarStatusSubscription = this.headerService.sideBarStatus.subscribe(
      (isActive) => {
        this.sidebarActive = isActive
      }
    )
  }
  ngOnDestroy(){
    this.sideBarStatusSubscription.unsubscribe()
  }
  showMenMenu(){
    if(this.menMenu){
      this.menMenu = false;
    }else{
      this.menMenu = true;
    }
  }
  showWomenMenu(){
    if(this.womenMenu){
      this.womenMenu = false;
    }else{
      this.womenMenu = true;
    }
  }
  showKidsMenu(){
    if(this.kidsMenu){
      this.kidsMenu= false;
    }else{
      this.kidsMenu= true;
    }
  }
  showAccessoriesMenu(){
    if(this.accessoriesMenu){
      this.accessoriesMenu= false;
    }else{
      this.accessoriesMenu= true;
    }
  }
  goToAccount(){
    this.accountService.mobileMenuItemSelectedState.next(false)
  }
}
