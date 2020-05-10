import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Modals/Product/product.modal';
import { ProductService } from 'src/app/services/product.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  areFiltersActive: boolean = false;
  filtersApplied = {}
  
  productList : Product[]

  headerNav: string = 'MEN / Clothing / Shirts'
  headerTitle: string = 'Men Shirts'
  resultCount: string = '13845 items'
  
  constructor(private productService: ProductService, private sharedService: SharedService) {
    this.productList = productService.products
  }
  ngOnInit() {
    this.sharedService.filterItemState.subscribe((item)=>{
      if(item.isActive && item.isRadio){
        var checkIfAlreadyExist = false
        var existingFilter: any
        for(let filter of Object.keys(this.filtersApplied)){
          if(this.filtersApplied[filter]['isRadio'] && (this.filtersApplied[filter]['filterName'].localeCompare(item.filterName)) == 0){
            checkIfAlreadyExist = true
            existingFilter = filter
            break
          }
        }
        if(checkIfAlreadyExist){
          delete this.filtersApplied[existingFilter]
          this.filtersApplied[item.itemName] = item
        }
        else{
          this.filtersApplied[item.itemName] = item
        }
      }
      else if(item.isActive){
        this.filtersApplied[item.itemName] = item
      }
      else{
        delete this.filtersApplied[item.itemName]
      }
    })
  }

  openFilters(){
    if(this.areFiltersActive){
      this.areFiltersActive = false;
    }
    else{
      this.areFiltersActive = true;
    }
  }
  closeFilters(){
    this.areFiltersActive = false;
  }

  removeFilter(filter: string){
    this.filtersApplied[filter]['isActive'] = false
    this.sharedService.filterItemState.next(this.filtersApplied[filter])
    delete this.filtersApplied[filter]
  }
}
