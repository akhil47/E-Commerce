import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsRoutingModule } from './payments-routing.module';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductCartViewComponent } from './cart-page/product-cart-view/product-cart-view.component';
import { DropdownMenuFullscreenComponent } from './cart-page/product-cart-view/dropdown-menu-fullscreen/dropdown-menu-fullscreen.component';
import { AddressPageComponent } from './address-page/address-page.component';
import { AddressViewComponent } from './address-page/address-view/address-view.component';

@NgModule({
    declarations: [
        CartPageComponent,
        ProductCartViewComponent,
        DropdownMenuFullscreenComponent,
        AddressPageComponent,
        AddressViewComponent
    ],
    imports: [
        CommonModule,
        PaymentsRoutingModule
    ]
})
export class PaymentsModule{

}