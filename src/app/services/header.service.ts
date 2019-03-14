import { Subject } from 'rxjs';

export class HeaderService{
    sideBarStatus = new Subject<boolean>();
}