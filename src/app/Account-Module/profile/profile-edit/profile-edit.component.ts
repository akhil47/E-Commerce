import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit, OnDestroy {

  userInfo = {
    name: '',
    gender: '',
    mobileNo: '',
    mail: ''
  }

  profileEditSubscription: any

  constructor(private router: Router, private route: ActivatedRoute,
    private accountService: AccountService) {
      this.profileEditSubscription = this.accountService.profileEdit.subscribe(
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
  ngOnDestroy(){
    this.profileEditSubscription.unsubscribe()
  }


  
  onSubmit(form: NgForm){
    this.accountService.updateProfile(this.userInfo)
    this.router.navigate(['profile-display'], { relativeTo: this.route.parent })
  }
  onCancel(){
    this.router.navigate(['profile-display'], { relativeTo: this.route.parent })
  }
}
