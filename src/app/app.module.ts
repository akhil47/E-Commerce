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
import { LoginRegisterPageComponent } from './Pages/login-register-page/login-register-page.component';
import { WishlistPageComponent } from './Pages/wishlist-page/wishlist-page.component';
import { CartPageComponent } from './Pages/cart-page/cart-page.component';
import { AppRoutingModule } from './app-routes.module';
import { ProductCartViewComponent } from './product-cart-view/product-cart-view.component';
import { DropdownMenuFullscreenComponent } from './product-cart-view/dropdown-menu-fullscreen/dropdown-menu-fullscreen.component';
import { AddressViewComponent } from './address-view/address-view.component';
import { AddressPageComponent } from './Pages/address-page/address-page.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { ProfileEditComponent } from './Pages/profile-page/profile-edit/profile-edit.component';
import { MyAddressComponent } from './Pages/profile-page/my-address/my-address.component';
import { MyOrdersComponent } from './Pages/profile-page/my-orders/my-orders.component';

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
    LoginRegisterPageComponent,
    WishlistPageComponent,
    CartPageComponent,
    ProductCartViewComponent,
    DropdownMenuFullscreenComponent,
    AddressViewComponent,
    AddressPageComponent,
    ProfilePageComponent,
    ProfileEditComponent,
    MyAddressComponent,
    MyOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
