import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Address } from 'src/app/modals/address.modal';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {

  @Input() address: Address
  @Output() editCancelled = new EventEmitter<boolean>()
  @Output() editCompleted = new EventEmitter<Address>()
  
  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  onSave(){
    this.accountService.addressEditStatus.next(false)
    this.editCompleted.emit(this.address)
  }
  onCancel(){
    this.accountService.addressEditStatus.next(false)
    this.editCancelled.emit(false)
  }

}
