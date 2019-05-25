import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { FeaturedContentComponent } from './featured-content/featured-content.component';
import { BannersSectionComponent } from './banners-section/banners-section.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './header/side-bar/side-bar.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { HeaderService } from './services/header.service';
import { HorizontalScrollComponent } from './horizontal-scroll/horizontal-scroll.component';
import { ProductComponent } from './product/product.component';
import { TitleComponent } from './title/title.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { SearchPageComponent } from './Pages/search-page/search-page.component';
import { CheckboxFilterComponent } from './checkbox-filter/checkbox-filter.component';
import { RadioFilterComponent } from './radio-filter/radio-filter.component';
import { FiltersSectionComponent } from './filters-section/filters-section.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { WishlistPageComponent } from './Pages/wishlist-page/wishlist-page.component';
import { CartPageComponent } from './Pages/cart-page/cart-page.component';
import { AppRoutingModule } from './app-routes.module';
import { ProductCartViewComponent } from './product-cart-view/product-cart-view.component';
import { DropdownMenuFullscreenComponent } from './product-cart-view/dropdown-menu-fullscreen/dropdown-menu-fullscreen.component';
import { AddressViewComponent } from './address-view/address-view.component';
import { AddressPageComponent } from './Pages/address-page/address-page.component';
import { AccountPageComponent } from './Pages/account-page/account-page.component';
import { MyOrdersComponent } from './Pages/account-page/my-orders/my-orders.component';
import { ProfileEditComponent } from './Pages/account-page/profile-edit/profile-edit.component';
import { MyAddressComponent } from './Pages/account-page/my-address/my-address.component';
import { AddressView2Component } from './address-view2/address-view2.component';
import { AddressEditComponent } from './Pages/address-edit/address-edit.component';
import { AddressDisplayComponent } from './address-display/address-display.component';
import { AddressService } from './services/address.service';
import { ProfileComponent } from './Pages/account-page/profile/profile.component';
import { ProfileDisplayComponent } from './Pages/profile-display/profile-display.component';
import { MenuComponent } from './Pages/account-page/menu/menu.component';
import { AccountService } from './services/account.service';
import { OrderComponent } from './order/order.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    MainHeaderComponent,
    FeaturedContentComponent,
    BannersSectionComponent,
    FooterComponent,
    SideBarComponent,
    TopHeaderComponent,
    HorizontalScrollComponent,
    ProductComponent,
    TitleComponent,
    DropdownComponent,
    HomePageComponent,
    SearchPageComponent,
    CheckboxFilterComponent,
    RadioFilterComponent,
    FiltersSectionComponent,
    ProductPageComponent,
    ImageDisplayComponent,
    WishlistPageComponent,
    CartPageComponent,
    ProductCartViewComponent,
    DropdownMenuFullscreenComponent,
    AddressViewComponent,
    AddressPageComponent,
    ProfileEditComponent,
    MyAddressComponent,
    MyOrdersComponent,
    AccountPageComponent,
    AddressView2Component,
    AddressEditComponent,
    AddressDisplayComponent,
    ProfileComponent,
    ProfileDisplayComponent,
    MenuComponent,
    OrderComponent,
    OrderItemComponent,
    OrderDetailsComponent,
    OrdersListComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    RegisterPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeaderService, AddressService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
