import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Address } from 'src/app/modals/address.modal';


@Component({
  selector: 'app-address-view2',
  templateUrl: './address-view2.component.html',
  styleUrls: ['./address-view2.component.css']
})
export class AddressView2Component implements OnInit {

  constructor(private accountService: AccountService) { }

  @Input() address: Address
  ngOnInit() {
  }

  onEdit(){
    this.accountService.addressEditStatus.next(true)
  }

}
