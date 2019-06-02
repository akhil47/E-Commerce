import { CanActivate, UrlTree } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DummyServer } from './dummy-server.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DummyGuard implements CanActivate{
    constructor(private server: DummyServer, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.server.isLoggedIn()){
            return true
        }
        else{
            this.router.navigate(['/login'])
            return false
        }
    }
}