import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { SideBarComponent } from './header/side-bar/side-bar.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../Shared-Module/shared.module';
import { ImageDisplayComponent } from './product-page/image-display/image-display.component';

@NgModule({
    declarations: [
        HomePageComponent,
        BodyComponent,
        HeaderComponent,
        MainHeaderComponent,
        TopHeaderComponent,
        SideBarComponent,
        FooterComponent,
        ProductPageComponent,
        SearchPageComponent,
        ImageDisplayComponent
    ],
    imports: [
        CommonModule,
        CoreRoutingModule,
        SharedModule
    ],
    exports: [
        BodyComponent,
        HeaderComponent,
        FooterComponent,
    ]
})
export class CoreModule { }