import { Subject } from 'rxjs';

export class AddressService{
    addressEditStatus = new Subject<boolean>();
}