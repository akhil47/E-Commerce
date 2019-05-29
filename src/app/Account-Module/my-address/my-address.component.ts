import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.css']
})
export class MyAddressComponent implements OnInit, OnDestroy {

  addressEditStatusSubscription: any

  constructor(private accountService: AccountService, private router: Router,
      private route: ActivatedRoute)
      { }

  ngOnInit() {
    this.addressEditStatusSubscription = this.accountService.addressEditStatus.subscribe(
      (flag) => {
        if(flag){
          this.router.navigate(['address-edit'], {relativeTo: this.route })
        }
        else{
          this.router.navigate(['address-display'], {relativeTo: this.route })
        }
      }
    )
  }
  ngOnDestroy(){
    this.addressEditStatusSubscription.unsubscribe()
  }
  createAddress(){
    this.accountService.addressEditStatus.next(true)
    this.accountService.pushNewAddressData('New Address')
  }


}
