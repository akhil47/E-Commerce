import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sizes-container',
  templateUrl: './sizes-container.component.html',
  styleUrls: ['./sizes-container.component.css']
})
export class SizesContainerComponent implements OnInit {

  @Input() sizeList = []

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

}
