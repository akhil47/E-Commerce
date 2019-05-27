import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaymentsRoutingModule } from './payments-routing.module';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductCartViewComponent } from './cart-page/product-cart-view/product-cart-view.component';
import { AddressPageComponent } from './address-page/address-page.component';
import { AddressViewComponent } from './address-page/address-view/address-view.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from '../Shared-Module/shared.module';
import { AccountModule } from '../Account-Module/account.module';

@NgModule({
    declarations: [
        CartPageComponent,
        ProductCartViewComponent,
        AddressPageComponent,
        AddressViewComponent,
        OrderSummaryComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PaymentsRoutingModule,
        AccountModule,
        SharedModule
    ]
})
export class PaymentsModule{

}