import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HeaderService } from './services/header.service';
import { AccountService } from './services/account.service';

import { AccountModule } from './Account-Module/account.module';
import { CoreModule } from './Core-Module/core.module';
import { SharedModule } from './Shared-Module/shared.module';
import { AppRoutingModule } from './app-routes.module';
import { UserAuthenticationModule } from './User-Authentication-Module/user-authentication.module';

import { AppComponent } from './app.component';
import { PaymentsModule } from './Payments-Module/payments.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    UserAuthenticationModule,
    PaymentsModule,
    CoreModule,
    SharedModule
  ],
  providers: [HeaderService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
