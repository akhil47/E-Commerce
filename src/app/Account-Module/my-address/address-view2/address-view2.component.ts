import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-address-view2',
  templateUrl: './address-view2.component.html',
  styleUrls: ['./address-view2.component.css']
})
export class AddressView2Component implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  onEdit(){
    this.accountService.addressEditStatus.next(true)
  }

}
