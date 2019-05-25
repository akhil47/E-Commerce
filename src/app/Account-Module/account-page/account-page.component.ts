import { Component, OnInit, OnChanges, HostListener } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  mobileScreen: boolean = false;
  mobileMenuItemSelected: boolean = false;

  constructor(private accountService: AccountService,
    private router: Router) { }

  ngOnInit() {
    if(window.innerWidth < 768){
      this.mobileScreen = true;
    }
    else{
      this.mobileScreen = false;
    }
    console.log(this.mobileScreen)

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
