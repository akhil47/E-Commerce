import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserAuthenticationRoutingModule } from './user-authentication-routing.module';


@NgModule({
    declarations:[
        LoginPageComponent,
        RegisterPageComponent,
        ForgotPasswordComponent
    ],
    imports: [
        CommonModule,
        UserAuthenticationRoutingModule
    ],
    exports: [
    ]
})
export class UserAuthenticationModule{

}