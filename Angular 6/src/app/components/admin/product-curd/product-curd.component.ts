import { Component, OnInit } from '@angular/core';
import { NgForm,} from '@angular/forms';

import { ProductDetailsService} from '../shared/product-details.service';

@Component({
  selector: 'app-product-curd',
  templateUrl: './product-curd.component.html',
  styleUrls: ['./product-curd.component.css'],
  providers: [ProductDetailsService]
})
export class ProductCURDComponent implements OnInit {

  constructor(private _productDetailsService : ProductDetailsService) { }

  ngOnInit() {
  }

}
