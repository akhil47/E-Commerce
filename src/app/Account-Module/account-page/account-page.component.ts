import { Component, OnInit, OnChanges, HostListener } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/Modals/Customer/customer.modal';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  
  name: string
  mail: string
  mobileNo: string
  gender: string

  mobileScreen: boolean = false;
  mobileMenuItemSelected: boolean = false;

  constructor(private accountService: AccountService,
    private router: Router) {
      this.name = this.accountService.customer.getName()
      this.mail = this.accountService.customer.getMail()
      this.mobileNo = this.accountService.customer.getMobileNo()
      this.gender = this.accountService.customer.getGender()
    }

  ngOnInit() {
    if(window.innerWidth < 768){
      this.mobileScreen = true;
    }
    else{
      this.mobileScreen = false;
    }

    this.accountService.mobileMenuStateChanged.subscribe(
      (flag) => {
        this.mobileMenuItemSelected = flag;
      }
    )
    this.accountService.mobileMenuItemSelectedState.subscribe(
      (flag) => {
        this.mobileMenuItemSelected = flag;
      }
    )
  }
  goToAccount(){
    if(this.mobileScreen){
      this.mobileMenuItemSelected = false;
      this.router.navigate(['account'])
    }
  }
}
