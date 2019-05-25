import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  onSave(){
    this.accountService.addressEditStatus.next(false)
  }
  onCancel(){
    this.accountService.addressEditStatus.next(false)
  }

}
