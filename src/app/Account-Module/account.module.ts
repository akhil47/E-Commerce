import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountPageComponent } from './account-page/account-page.component';
import { MenuComponent } from './account-page/menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDisplayComponent } from './profile/profile-display/profile-display.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderComponent } from './my-orders/order/order.component';
import { OrdersListComponent } from './my-orders/orders-list/orders-list.component';
import { OrderItemComponent } from './my-orders/order-item/order-item.component';
import { OrderDetailsComponent } from './my-orders/order-details/order-details.component';
import { MyAddressComponent } from './my-address/my-address.component';
import { AddressDisplayComponent } from './my-address/address-display/address-display.component';
import { AddressEditComponent } from './my-address/address-edit/address-edit.component';
import { AddressView2Component } from './my-address/address-view2/address-view2.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AccountRoutingModule } from './account-routing.module';

import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';
import { SharedModule } from '../Shared-Module/shared.module';
import { MenuHeaderComponent } from './menu-header/menu-header.component';



@NgModule({
    declarations: [
        AccountPageComponent,
        MenuComponent,
        ProfileComponent,
        ProfileDisplayComponent,
        ProfileEditComponent,
        MyOrdersComponent,
        OrdersListComponent,
        OrderComponent,
        OrderItemComponent,
        OrderDetailsComponent,
        MyAddressComponent,
        AddressDisplayComponent,
        AddressEditComponent,
        AddressView2Component,
        ChangePasswordComponent,
        WishlistPageComponent,
        MenuHeaderComponent
    ],
    imports: [
        AccountRoutingModule,
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        AddressEditComponent
    ]
})
export class AccountModule{

}