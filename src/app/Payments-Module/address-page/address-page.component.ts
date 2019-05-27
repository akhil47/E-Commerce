import { Component, OnInit, Input } from '@angular/core';
import { Address } from 'src/app/modals/address.modal';
import { OrderSummary } from 'src/app/modals/order-summary.modal';

@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.css']
})
export class AddressPageComponent implements OnInit {

  addressList: Address[] = []
  orderSummary: OrderSummary

  popupActive: boolean = false;
  popupItemIndex: number = 0
  popupData: Address

  constructor() {
    for(let i = 0; i < 4; i++){
      this.addressList.push(new Address())
    }
    this.orderSummary = new OrderSummary()
  }

  ngOnInit() {
    for(let i = 0; i < 4; i++){
      this.addressList[i].name = "Akhilesh Lingala"
      this.addressList[i].mobile = '91XXXXXXXX'
      this.addressList[i].address = '12/Z, Sector - 10'
      this.addressList[i].town = 'Ukkunagaram'
      this.addressList[i].city = 'Visakhapatnam'
      this.addressList[i].state = 'Andhra Pradesh'
      this.addressList[i].pincode = '530036'
    }
    this.orderSummary.MRP = 99999
    this.orderSummary.shippingCharges = 99999
    this.orderSummary.GST = 99999
    this.orderSummary.discount = 99999
    this.orderSummary.total = 99999
  }

  editAddress(event: any, index: number){
    this.popupActive = true;
    this.popupData = event
    console.log(event, index)
  }
  onEditSuccess(address){
    this.addressList[this.popupItemIndex] = address;
    this.popupActive = false;
    console.log('Edit Success')
  }
  onEditFail(){
    this.popupActive = false;
    console.log('Edit Fail')
  }
}
