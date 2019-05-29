import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Address } from 'src/app/Modals/Customer/address.modal';
import { AccountService } from 'src/app/services/account.service';
import { Cart } from 'src/app/Modals/Customer/cart.modal';

@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.css']
})
export class AddressPageComponent implements OnInit, OnDestroy {

  addressList: Address[]
  cart: Cart

  popupActive: boolean = false;
  popupItemIndex: number = 0
  popupData: Address

  addressEditStatusSubscription: any
  addressUpdatesSubscription: any

  constructor(private accountService: AccountService) {
    this.addressEditStatusSubscription = this.accountService.addressEditStatus.subscribe(
      (flag) =>{
        this.popupActive = flag;
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
}
