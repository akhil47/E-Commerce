import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {

  constructor(private addressService: AddressService) { }

  ngOnInit() {
  }

  onSave(){
    this.addressService.addressEditStatus.next(false)
  }
  onCancel(){
    this.addressService.addressEditStatus.next(false)
  }

}
