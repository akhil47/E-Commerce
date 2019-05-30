import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { HorizontalScrollComponent } from './horizontal-scroll/horizontal-scroll.component';
import { FeaturedContentComponent } from './featured-content/featured-content.component';
import { BannersSectionComponent } from './banners-section/banners-section.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CheckboxFilterComponent } from './checkbox-filter/checkbox-filter.component';
import { FiltersSectionComponent } from './filters-section/filters-section.component';
import { RadioFilterComponent } from './radio-filter/radio-filter.component';
import { PopupComponent } from './popup/popup.component';
import { ListSelectionMenuComponent } from './list-selection-menu/list-selection-menu.component';
import { RouterModule } from '@angular/router';
import { CouponsComponent } from './coupons/coupons.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
    declarations: [
        CheckboxFilterComponent,
        FiltersSectionComponent,
        RadioFilterComponent,
        ProductComponent,
        HorizontalScrollComponent,
        FeaturedContentComponent,
        BannersSectionComponent,
        DropdownComponent,
        PopupComponent,
        ListSelectionMenuComponent,
        CouponsComponent,
        AlertComponent,
        NotificationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        ProductComponent,
        HorizontalScrollComponent,
        FeaturedContentComponent,
        BannersSectionComponent,
        DropdownComponent,
        CheckboxFilterComponent,
        FiltersSectionComponent,
        RadioFilterComponent,
        PopupComponent,
        ListSelectionMenuComponent,
        CouponsComponent,
        NotificationComponent,
        AlertComponent
    ]
})
export class SharedModule { }