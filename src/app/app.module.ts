import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderService } from './services/header.service';
import { AccountService } from './services/account.service';
import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';

import { AccountModule } from './Account-Module/account.module';
import { CoreModule } from './Core-Module/core.module';
import { SharedModule } from './Shared-Module/shared.module';
import { AppRoutingModule } from './app-routes.module';
import { PaymentsModule } from './Payments-Module/payments.module';
import { UserAuthenticationModule } from './User-Authentication-Module/user-authentication.module';
import { DummyServer } from './services/dummy-server.service';
import { DummyGuard } from './services/dummy-guard.service';
import { DummyDataService } from './services/dummy-data.service';


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
    SharedModule,
    FormsModule
  ],
  providers: [HeaderService, AccountService, ProductService, OrderService, DummyGuard, DummyServer, DummyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
