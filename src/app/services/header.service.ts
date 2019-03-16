import { Subject } from 'rxjs';
import { Dropdown } from '../modals/dropdown.modal';
import { DropdownList } from '../modals/dropdown-list.modal';

export class HeaderService{
    sideBarStatus = new Subject<boolean>();
    dropdowns: Dropdown[] = []

    constructor(){
        let menDropDownList = new Dropdown('Men', [
            new DropdownList('CLOTHING', [
                'Polos & Tees',
                'Casual Shirts',
                'Jeans',
                'Casual Trousers',
                'Formal Shirts',
                'Formal Trousers',
                'Suits & Blazers',
                'Track Wear',
                'Shorts & 3/4ths',
                'Ethnic Wear',
                'Winter Wear'
            ]),
            new DropdownList('WATCHES', [
                'Analog',
                'Chronograph',
                'Digital',
                'Watch Cases'
            ]),
            new DropdownList('FOOTWEAR', [
                'Sports Shoes',
                'Sneakers',
                'Casual Shoes',
                'Loafers',
                'Formal Shoes',
                'Boots',
                'Outdoor & Hiking',
                'Floaters'
            ]),
            new DropdownList('BAGS', [
                'Backpacks',
                'Wallets',
                'Laptop Bags',
                'Travel Bags',
                'Messenger Bags'
            ]),
            new DropdownList('TOP PICKS', [
                'Winter Wonderland',
                'Work In Progress',
                'Party On',
                'Casual Affairs',
                'Sports Central'
            ])
            
        ])
        this.dropdowns.push(menDropDownList)
    }

    getDropDownList(dropDownName: string): DropdownList[]{
        for(let list of this.dropdowns){
            if( list.dropDownName == dropDownName){
                return list.dropDownList
            }
        }
    }
}