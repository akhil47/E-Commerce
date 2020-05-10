import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.css']
})
export class CheckboxFilterComponent implements OnInit {

  isExpanded: boolean = true;

  @Input() filterName: string = ''
  @Input() options: string[] = []
  
  filters: FormGroup

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    var controls = {}
    for(let option of this.options){
      controls[option] = new FormControl({value: null, disabled: false})
    }
    this.filters = new FormGroup(controls)

    this.sharedService.filterItemState.subscribe(
      (filter)=>{
        if(filter.filterName.localeCompare(this.filterName) == 0 && 
          (filter.isActive == false)){
            this.itemDeselected(filter.itemName)
          }
    })
  }

  onExpand(){
    if(this.isExpanded){
      this.isExpanded = false;
    }
    else{
      this.isExpanded = true;
    }
  }
  itemSelected(index, event){
    this.sharedService.filterItemState.next({
      'filterName': this.filterName,
      'isActive': event.target.checked,
      'itemName': event.target.value,
      'isRadio': false
    })
  }
  itemDeselected(filterOption: string){
    this.filters.get(filterOption).reset()
  }
}
