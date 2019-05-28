import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  userInfo = {
    name: '',
    gender: '',
    mobileNo: '',
    mail: ''
  }

  constructor(private router: Router, private route: ActivatedRoute,
    private accountService: AccountService) {
      this.accountService.profileEdit.subscribe(
        (userDetails)=>{
          this.userInfo = {
            name: userDetails['Name'],
            gender: userDetails['Gender'],
            mobileNo: userDetails['Mobile No'],
            mail: userDetails['Mail']
          }
      })
      
  }
  ngOnInit() {
    
  }
  onSave(){
    this.accountService.updateProfile(this.userInfo)
    this.router.navigate(['profile-display'], { relativeTo: this.route.parent })
  }
  onCancel(){
    this.router.navigate(['profile-display'], { relativeTo: this.route.parent })
  }
}
