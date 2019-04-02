import { NgModule } from "@angular/core";
import {RouterModule } from "@angular/router";
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { SearchPageComponent } from './Pages/search-page/search-page.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { LoginRegisterPageComponent } from './Pages/login-register-page/login-register-page.component';

const appRoutes = [
    { path: '', component: HomePageComponent},
    { path: 'search', component: SearchPageComponent},
    { path: 'product', component: ProductPageComponent},
    { path: 'register', component: LoginRegisterPageComponent}
]

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)
    ],
    exports : [
        RouterModule
    ]
})
export class AppRoutingModule{

}