import { Component, OnInit, OnDestroy } from '@angular/core';
import { DummyServer } from 'src/app/services/dummy-server.service';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.css']
})
export class UserDropdownComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean = false

  title: string = 'Welcome to XYZ'
  description: string = 'To access account and manage orders'

  authServiceSubscription: any

  constructor(private server: DummyServer) {
    this.isLoggedIn = this.server.isLoggedIn()
    this.authServiceSubscription = this.server.authUpdates.subscribe(
      (loggedIn: boolean) => {
        this.isLoggedIn = loggedIn
        if(this.isLoggedIn){
          this.title = 'Akhilesh Lingala'
          this.description = 'akhil@gmail.com'
        }
        else{
          this.title = 'Welcome to XYZ'
          this.description = 'To access account and manage orders'
        }
      }
    )
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.authServiceSubscription.unsubscribe()
  }

}
