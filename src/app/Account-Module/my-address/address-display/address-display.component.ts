import { Component, OnInit, OnDestroy } from '@angular/core';
import { Address } from 'src/app/Modals/Customer/address.modal';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-address-display',
  templateUrl: './address-display.component.html',
  styleUrls: ['./address-display.component.css']
})
export class AddressDisplayComponent implements OnInit, OnDestroy {

  addressList: Address[]

  alertPopupActive: boolean = false
  alertText: string = ''
  alertAddressIndex: number

  addressUpdatesSubscription: any

  constructor(private accountService: AccountService) {
    this.addressList = this.accountService.getAddresses()
  }

  ngOnInit() {
    this.addressUpdatesSubscription = this.accountService.addressUpdates.subscribe(
      (addresses: Address[]) => {
        this.addressList = addresses
      }
    )
  }
  ngOnDestroy(){
    this.addressUpdatesSubscription.unsubscribe()
  }



  //Alert methods
  
  openAlert(index: number){
    this.alertAddressIndex = index
    this.alertText = 'Do you want to delete this address ?'
    this.alertPopupActive = true
  }
  closeAlert(choice: boolean){
    this.alertPopupActive = false
    this.alertText = ''
    if(choice) this.accountService.removeAddress(this.alertAddressIndex)
    this.alertAddressIndex = undefined
  }
}
