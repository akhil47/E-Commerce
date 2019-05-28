import { Component, OnInit, Input } from '@angular/core';
import { Address } from 'src/app/Modals/Customer/address.modal';
import { OrderSummary } from 'src/app/modals/order-summary.modal';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.css']
})
export class AddressPageComponent implements OnInit {

  addressList: Address[]
  orderSummary: OrderSummary

  popupActive: boolean = false;
  popupItemIndex: number = 0
  popupData: Address

  constructor(private accountService: AccountService) {
    this.accountService.addressEditStatus.subscribe(
      (flag) =>{
        this.popupActive = flag;
      }
    )
    this.addressList = this.accountService.customer.getAddresses()
    this.orderSummary = new OrderSummary()
  }

  ngOnInit() {
    this.accountService.addressUpdates.subscribe(
      (addresses: Address[]) => {
        this.addressList = addresses
      }
    )
    this.orderSummary.MRP = 99999
    this.orderSummary.shippingCharges = 99999
    this.orderSummary.GST = 99999
    this.orderSummary.discount = 99999
    this.orderSummary.total = 99999
  }
  createAddress(){
    this.accountService.addressEditStatus.next(true)
    this.accountService.pushNewAddressData('New Address')
  }
}
