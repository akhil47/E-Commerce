import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from 'src/app/Modals/Customer/address.modal';

@Component({
  selector: 'app-address-view',
  templateUrl: './address-view.component.html',
  styleUrls: ['./address-view.component.css']
})
export class AddressViewComponent implements OnInit {

  @Input() address: Address
  @Output() onEditAddress = new EventEmitter<Address>()
  
  constructor() { }

  ngOnInit() {
  }
  onEdit(){
    this.onEditAddress.emit(this.address)
  }
}
