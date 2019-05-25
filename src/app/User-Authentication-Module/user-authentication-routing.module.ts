import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const appRoutes = [
    { path: 'login', component: LoginPageComponent},
    { path: 'register', component: RegisterPageComponent},
    { path: 'forgot-password', component: ForgotPasswordComponent},
]

@NgModule({
    imports : [
        RouterModule.forChild(appRoutes)
    ],
    exports : [
        RouterModule
    ]
})
export class UserAuthenticationRoutingModule{

}