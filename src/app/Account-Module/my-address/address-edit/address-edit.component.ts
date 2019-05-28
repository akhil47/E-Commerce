import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Address } from 'src/app/Modals/Customer/address.modal';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit, OnDestroy {

  title: string = ''

  address: Address
  addressIndex: number
  subscription: any

  editMode: boolean = false

  constructor(private accountService: AccountService) {
    this.address = new Address()
    this.subscription = this.accountService.addressEdit.subscribe(
      (data) =>{
        this.address.name = data.address.name
        this.address.mobile = data.address.mobile
        this.address.doorNo = data.address.doorNo
        this.address.area = data.address.area
        this.address.city = data.address.city
        this.address.state = data.address.state
        this.address.pincode = data.address.pincode

        this.addressIndex = data.index
        this.title = data.title
        this.editMode = data.editMode
      }
    )
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
  onSave(){
    this.accountService.addressEditStatus.next(false)
    if(this.editMode){
      this.accountService.updateAddress(this.address, this.addressIndex)
    }
    else{
      this.accountService.customer.addAddress(this.address)
    }
  }
  onCancel(){
    this.accountService.addressEditStatus.next(false)
  }

}
