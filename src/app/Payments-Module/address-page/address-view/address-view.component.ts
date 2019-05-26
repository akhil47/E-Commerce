import { Component, OnInit, Input } from '@angular/core';
import { Address } from 'src/app/modals/address.modal';

@Component({
  selector: 'app-address-view',
  templateUrl: './address-view.component.html',
  styleUrls: ['./address-view.component.css']
})
export class AddressViewComponent implements OnInit {

  @Input() address: Address
  
  constructor() { }

  ngOnInit() {
  }

}