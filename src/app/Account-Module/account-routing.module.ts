import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AccountPageComponent } from './account-page/account-page.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrdersListComponent } from './my-orders/orders-list/orders-list.component';
import { OrderDetailsComponent } from './my-orders/order-details/order-details.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileDisplayComponent } from './profile/profile-display/profile-display.component';
import { MyAddressComponent } from './my-address/my-address.component';
import { AddressEditComponent } from './my-address/address-edit/address-edit.component';
import { AddressDisplayComponent } from './my-address/address-display/address-display.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';



const appRoutes = [
    { path: 'wishlist', component: WishlistPageComponent},
    { path: 'account', component: AccountPageComponent, children:[
        { path: 'my-orders', component: MyOrdersComponent, children: [
            { path: 'orders-list', component: OrdersListComponent},
            { path: 'order-details', component: OrderDetailsComponent}
        ]},
        { path: 'profile', component: ProfileComponent, children:[
            { path: 'profile-edit', component: ProfileEditComponent},
            { path: 'profile-display', component: ProfileDisplayComponent},
        ]},
        { path: 'my-addresses', component: MyAddressComponent, children:[
            { path: 'address-edit', component: AddressEditComponent},
            { path: 'address-display', component: AddressDisplayComponent}
        ]},
        { path: 'change-password', component: ChangePasswordComponent}
    ]}
]

@NgModule({
    imports : [
        RouterModule.forChild(appRoutes)
    ],
    exports : [
        RouterModule
    ]
})
export class AccountRoutingModule{

}