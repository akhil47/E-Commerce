import { Subject } from 'rxjs';

export class AccountService{
    mobileMenuStateChanged = new Subject<boolean>();
    mobileMenuItemSelectedState = new Subject<boolean>();
}