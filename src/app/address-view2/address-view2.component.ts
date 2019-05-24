import { Component, OnInit } from '@angular/core';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-address-view2',
  templateUrl: './address-view2.component.html',
  styleUrls: ['./address-view2.component.css']
})
export class AddressView2Component implements OnInit {

  constructor(private addressService: AddressService) { }

  ngOnInit() {
  }

  onEdit(){
    this.addressService.addressEditStatus.next(true)
  }

}
