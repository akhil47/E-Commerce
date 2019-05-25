import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AddressPageComponent } from './address-page/address-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';


const appRoutes = [
    { path: 'cart', component: CartPageComponent},
    { path: 'address', component: AddressPageComponent},
]

@NgModule({
    imports : [
        RouterModule.forChild(appRoutes)
    ],
    exports : [
        RouterModule
    ]
})
export class PaymentsRoutingModule{

}