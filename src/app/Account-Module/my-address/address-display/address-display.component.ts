import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/Modals/Customer/address.modal';

@Component({
  selector: 'app-address-display',
  templateUrl: './address-display.component.html',
  styleUrls: ['./address-display.component.css']
})
export class AddressDisplayComponent implements OnInit {

  addressList: Address[] = []

  constructor() {
    for(let i = 0; i < 4; i++){
      this.addressList.push(new Address())
    }
  }

  ngOnInit() {
    for(let i = 0; i < 4; i++){
      this.addressList[i].name = "Akhilesh Lingala"
      this.addressList[i].mobile = '91XXXXXXXX'
      this.addressList[i].doorNo = '12/Z, Sector - 10'
      this.addressList[i].area = 'Ukkunagaram'
      this.addressList[i].city = 'Visakhapatnam'
      this.addressList[i].state = 'Andhra Pradesh'
      this.addressList[i].pincode = '530036'
    }
  }

}
