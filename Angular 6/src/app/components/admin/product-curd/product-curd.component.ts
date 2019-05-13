import { Component, OnInit } from '@angular/core';
import { NgForm,} from '@angular/forms';

import { ProductDetailsService} from '../shared/product-details.service';
import { from } from 'rxjs';

declare var M:any;

@Component({
  selector: 'app-product-curd',
  templateUrl: './product-curd.component.html',
  styleUrls: ['./product-curd.component.css'],
  providers: [ProductDetailsService]
})
export class ProductCURDComponent implements OnInit {

  constructor(private _productDetailsService : ProductDetailsService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm)
  {
    if(from)
    form.reset();
    this._productDetailsService.selectedProductDetails = {
      _id: "",
      MinTHRange:null,
      MaxTHRange:null,
      MinpHRange:null,
      MaxpHRange:null,
      ProductName:" ",
      Dosage:null
    }
  }

  onSubmit(form : NgForm)
  {
    this._productDetailsService.postProductDetail(form.value).subscribe((res)=>
    {
      this.resetForm(form);
      M.toast({html:'Saved Successfully', classes : 'rounded'});
    });
  }
}
