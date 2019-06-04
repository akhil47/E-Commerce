import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Address } from 'src/app/Modals/Customer/address.modal';
import { AccountService } from 'src/app/services/account.service';
import { Cart } from 'src/app/Modals/Customer/cart.modal';
import { NgForm } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.css']
})
export class AddressPageComponent implements OnInit, OnDestroy {

  addressList: Address[]
  selectedAddressIndex: number = 0
  cart: Cart

  addressPopupActive: boolean = false;
  addressPopupItemIndex: number = 0
  addressPopupData: Address

  alertPopupActive: boolean = false
  alertText: string = ''
  alertAddressIndex: number

  addressEditStatusSubscription: any
  addressUpdatesSubscription: any

  constructor(private accountService: AccountService, private orderService: OrderService) {
    this.addressEditStatusSubscription = this.accountService.addressEditStatus.subscribe(
      (flag) =>{
        this.addressPopupActive = flag;
      }
    )
    this.addressList = this.accountService.getAddresses()
    this.cart = this.accountService.getCart()
    if(this.addressList.length == 0) this.selectedAddressIndex = -1
    else this.selectedAddressIndex = 0
  }

  ngOnInit() {
    this.addressUpdatesSubscription = this.accountService.addressUpdates.subscribe(
      (addresses: Address[]) => {
        this.addressList = addresses
        if(this.addressList.length == 0) this.selectedAddressIndex = -1
        else this.selectedAddressIndex = 0
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
  setSelectedAddress(index){
    this.selectedAddressIndex = index
  }
  makePayment(){
    if(this.selectedAddressIndex != -1){
      this.orderService.placeOrder(this.cart, this.addressList[this.selectedAddressIndex])
      this.accountService.emptyCart()
    }
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
    this.selectedAddressIndex = 0
    this.alertAddressIndex = undefined
  }
}
