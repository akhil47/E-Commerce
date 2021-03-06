import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { HorizontalScrollComponent } from './horizontal-scroll/horizontal-scroll.component';
import { FeaturedContentComponent } from './featured-content/featured-content.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CheckboxFilterComponent } from './checkbox-filter/checkbox-filter.component';
import { FiltersSectionComponent } from './filters-section/filters-section.component';
import { RadioFilterComponent } from './radio-filter/radio-filter.component';
import { PopupComponent } from './popup/popup.component';
import { ListSelectionMenuComponent } from './list-selection-menu/list-selection-menu.component';
import { RouterModule } from '@angular/router';
import { CouponsComponent } from './coupons/coupons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { NotificationComponent } from './notification/notification.component';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { UserDropdownMenuComponent } from './user-dropdown/user-dropdown-menu/user-dropdown-menu.component';
import { SizesContainerComponent } from './sizes-container/sizes-container.component';
import { SizeComponent } from './sizes-container/size/size.component';
import { NotificationPageComponent } from './notification-page/notification-page.component';
import { BannersGridComponent } from './banners-grid/banners-grid.component';
import { LargeBannerComponent } from './large-banner/large-banner.component';
import { TrioBannersComponent } from './trio-banners/trio-banners.component';

@NgModule({
    declarations: [
        CheckboxFilterComponent,
        FiltersSectionComponent,
        RadioFilterComponent,
        ProductComponent,
        HorizontalScrollComponent,
        FeaturedContentComponent,
        DropdownComponent,
        PopupComponent,
        ListSelectionMenuComponent,
        CouponsComponent,
        AlertComponent,
        NotificationComponent,
        UserDropdownComponent,
        UserDropdownMenuComponent,
        SizesContainerComponent,
        SizeComponent,
        NotificationPageComponent,
        BannersGridComponent,
        LargeBannerComponent,
        TrioBannersComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ],
    exports: [
        ProductComponent,
        HorizontalScrollComponent,
        FeaturedContentComponent,
        DropdownComponent,
        CheckboxFilterComponent,
        FiltersSectionComponent,
        RadioFilterComponent,
        PopupComponent,
        ListSelectionMenuComponent,
        CouponsComponent,
        NotificationComponent,
        AlertComponent,
        UserDropdownComponent,
        UserDropdownMenuComponent,
        SizesContainerComponent,
        SizeComponent,
        NotificationPageComponent,
        BannersGridComponent,
        LargeBannerComponent,
        TrioBannersComponent
    ]
})
export class SharedModule { }