import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Address } from 'src/app/Modals/Customer/address.modal';
import { AccountService } from 'src/app/services/account.service';
import { Cart } from 'src/app/Modals/Customer/cart.modal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.css']
})
export class AddressPageComponent implements OnInit, OnDestroy {

  addressList: Address[]
  cart: Cart

  addressPopupActive: boolean = false;
  addressPopupItemIndex: number = 0
  addressPopupData: Address

  alertPopupActive: boolean = false
  alertText: string = ''
  alertAddressIndex: number

  addressEditStatusSubscription: any
  addressUpdatesSubscription: any

  constructor(private accountService: AccountService) {
    this.addressEditStatusSubscription = this.accountService.addressEditStatus.subscribe(
      (flag) =>{
        this.addressPopupActive = flag;
      }
    )
    this.addressList = this.accountService.getAddresses()
    this.cart = this.accountService.getCart()
  }

  ngOnInit() {
    this.addressUpdatesSubscription = this.accountService.addressUpdates.subscribe(
      (addresses: Address[]) => {
        this.addressList = addresses
      }
    )
  }
  ngOnDestroy(){
    this.addressEditStatusSubscription.unsubscribe()
    this.addressUpdatesSubscription.unsubscribe()
  }
  createAddress(){
    this.accountService.addressEditStatus.next(true)
    this.accountService.pushNewAddressData('New Address')
  }
  makePayment(){
  }



  //Alert Methods
  
  openAlert(index: number){
    this.alertAddressIndex = index
    this.alertText = 'Do you want to delete this address?'
    this.alertPopupActive = true
  }
  closeAlert(choice: boolean){
    this.alertPopupActive = false
    this.alertText = ''
    if(choice) this.accountService.removeAddress(this.alertAddressIndex)
    this.alertAddressIndex = undefined
  }
}
