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

@NgModule({
    declarations: [
        CheckboxFilterComponent,
        FiltersSectionComponent,
        RadioFilterComponent,
        ProductComponent,
        HorizontalScrollComponent,
        FeaturedContentComponent,
        BannersSectionComponent,
        DropdownComponent
    ],
    imports: [
        CommonModule,
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
    ]
})
export class SharedModule { }