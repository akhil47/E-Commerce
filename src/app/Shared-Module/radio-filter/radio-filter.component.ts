import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio-filter',
  templateUrl: './radio-filter.component.html',
  styleUrls: ['./radio-filter.component.css']
})
export class RadioFilterComponent implements OnInit {

  isExpanded: boolean = true;
  
  @Input() filterName: string ='' 
  @Input() options: string[] = []

  filters: FormGroup

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    var controls = {}
    controls[this.filterName] = new FormControl(null)
    this.filters = new FormGroup(controls)
    this.sharedService.filterItemState.subscribe(
      (filter)=>{
        if(filter.filterName.localeCompare(this.filterName) == 0 && !filter.isActive){
            this.itemDeselected()
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
      filterName: this.filterName,
      isActive: event.target.checked,
      itemName: this.filters.get(this.filterName).value,
      isRadio: true
    })
  }
  itemDeselected(){
    this.filters.get(this.filterName).reset()
  }

}
