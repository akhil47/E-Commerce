import { Component, OnInit, OnChanges, HostListener, OnDestroy } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/Modals/Customer/customer.modal';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit, OnDestroy {
  
  name: string
  mail: string
  mobileNo: string
  gender: string

  mobileScreen: boolean = false;
  mobileMenuItemSelected: boolean = false;

  mobileMenuStateChangedSubscription: any

  constructor(private accountService: AccountService,
    private router: Router) {
      this.name = this.accountService.getName()
      this.mail = this.accountService.getMail()
      this.mobileNo = this.accountService.getMobileNo()
      this.gender = this.accountService.getGender()
    }

  ngOnInit() {
    if(window.innerWidth < 768){
      this.mobileScreen = true;
    }
    else{
      this.mobileScreen = false;
    }

    this.mobileMenuStateChangedSubscription = this.accountService.mobileMenuStateChanged.subscribe(
      (flag) => {
        this.mobileMenuItemSelected = flag;
      }
    )
  }
  ngOnDestroy(){
    this.mobileMenuStateChangedSubscription.unsubscribe()
  }
  goToAccount(){
    if(this.mobileScreen){
      this.mobileMenuItemSelected = false;
      this.router.navigate(['account'])
    }
  }
}
