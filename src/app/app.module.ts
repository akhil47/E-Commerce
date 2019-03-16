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
    TitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
