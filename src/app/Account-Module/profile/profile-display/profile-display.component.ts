import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent implements OnInit {

  userDetails: Object
  objectkeys = Object.keys //Used in template

  constructor(private router: Router, private route: ActivatedRoute,
    private accountService: AccountService) {
      this.userDetails = {
        'Name': this.accountService.customer.getName(),
        'Gender': this.accountService.customer.getGender(),
        'Mobile No': this.accountService.customer.getMobileNo(),
        'Mail': this.accountService.customer.getMail()
      }
  }

  ngOnInit() {
  }
  onEdit(){
    this.accountService.pushProfileEditData(this.userDetails)
    this.router.navigate(['profile-edit'], { relativeTo: this.route.parent} )
  }
  onDelete(){
    
  }
}
