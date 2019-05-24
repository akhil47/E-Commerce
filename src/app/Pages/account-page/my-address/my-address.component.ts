import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.css']
})
export class MyAddressComponent implements OnInit {

  constructor(private addressService: AddressService, private router: Router,
      private route: ActivatedRoute)
      { }

  ngOnInit() {
    this.addressService.addressEditStatus.subscribe(
      (flag) => {
        if(flag){
          this.router.navigate(['address-edit'], {relativeTo: this.route })
        }
        else{
          this.router.navigate(['address-display'], {relativeTo: this.route })
        }
      }
    )
  }

}
