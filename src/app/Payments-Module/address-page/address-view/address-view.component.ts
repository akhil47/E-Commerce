import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Address } from 'src/app/Modals/Customer/address.modal';
import { AccountService } from 'src/app/services/account.service';
import { ControlContainer, NgForm } from '@angular/forms';


@Component({
  selector: 'app-address-view',
  templateUrl: './address-view.component.html',
  styleUrls: ['./address-view.component.css']
})
export class AddressViewComponent implements OnInit {

  @Input() address: Address
  @Input() addressIndex: number
  @Input() defaultSelectedAddressindex: number

  @Output() deleteAddress = new EventEmitter<number>()
  @Output() selectedAddressIndex = new EventEmitter<number>()
  
  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }
  onEdit(){
    this.accountService.addressEditStatus.next(true)
    this.accountService.pushEditAddressData(this.address, this.addressIndex, 'Edit Address')
  }
  onRemove(){
    this.deleteAddress.emit(this.addressIndex)
  }
  onClick(index){
    this.selectedAddressIndex.emit(index)
  }
}
