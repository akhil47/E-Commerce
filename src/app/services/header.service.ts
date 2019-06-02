import { Subject } from 'rxjs';
import { Dropdown } from '../modals/dropdown.modal';
import { Injectable } from '@angular/core';
import { Category } from '../Modals/Product/category.modal';
import { DummyDataService } from './dummy-data.service';

@Injectable()
export class HeaderService{
    sideBarStatus = new Subject<boolean>();

    dropdowns: Dropdown[] = []

    constructor(private dataService: DummyDataService){
        let menDropDownList = new Dropdown('Men', this.dataService.getCategories())
        this.dropdowns.push(menDropDownList)
    }

    getDropDownList(dropDownName: string): Category[]{
        for(let list of this.dropdowns){
            if( list.dropDownName == dropDownName){
                return list.categories
            }
        }
    }
}