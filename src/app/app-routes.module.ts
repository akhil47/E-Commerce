import { NgModule } from "@angular/core";
import { RouterModule, PreloadAllModules } from "@angular/router";

const appRoutes = [
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