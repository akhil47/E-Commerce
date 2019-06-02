import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { DummyServer } from 'src/app/services/dummy-server.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginTry: boolean = false
  isLoggedIn: boolean = false

  constructor(private server: DummyServer, private router: Router) {
    this.server.authUpdates.subscribe(
      (authenticated) =>{
        this.isLoggedIn = authenticated
        if(authenticated) this.router.navigate(['/'])
      }
    )
  }

  ngOnInit() {
  }
  onSubmit(f: NgForm){
    let details = f.form.value
    //Dummy Auth
    this.server.signIn(details.mail, details.password)
    this.loginTry = true
  }

}
