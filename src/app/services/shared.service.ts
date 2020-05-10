import { Subject } from 'rxjs';

export class SharedService{
    constructor(){}
    filterItemState = new Subject<{filterName: string, itemName: string, isActive: boolean, isRadio: boolean}>()
}