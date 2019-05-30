import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Address } from 'src/app/Modals/Customer/address.modal';


@Component({
  selector: 'app-address-view2',
  templateUrl: './address-view2.component.html',
  styleUrls: ['./address-view2.component.css']
})
export class AddressView2Component implements OnInit {

  constructor(private accountService: AccountService) { }

  @Input() address: Address
  @Input() addressIndex: number

  @Output() deleteAddress = new EventEmitter<number>()
  
  ngOnInit() {
  }

  onEdit(){
    this.accountService.addressEditStatus.next(true)
    this.accountService.pushEditAddressData(this.address, this.addressIndex, 'Edit Address')
  }
  onRemove(){
    this.deleteAddress.emit(this.addressIndex)
  }

}
