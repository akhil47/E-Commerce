import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RouterModule } from '@angular/router';


const appRoutes = [
    { path: '', component: HomePageComponent},
    { path: 'search', component: SearchPageComponent},
    { path: 'product', component: ProductPageComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CoreRoutingModule{

}