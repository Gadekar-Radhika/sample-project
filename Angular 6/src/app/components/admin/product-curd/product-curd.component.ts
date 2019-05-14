import { Component, OnInit } from '@angular/core';
import { NgForm,} from '@angular/forms';

import { ProductDetailsService} from '../shared/product-details.service';
import { ProductDetails } from '../shared/product-details.model';
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
    this.refreshProductList();
  }

  resetForm(form?:NgForm)
  {
    if(form)
    form.reset();
    this._productDetailsService.selectedProductDetails = {
      _id: " ",
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
    // if(form.value._id == "")
    // {
    this._productDetailsService.postProductDetail(form.value).subscribe((res)=>
    {
      this.resetForm(form);
      this.refreshProductList();
      M.toast({html:'Saved Successfully', classes : 'rounded'});
    });
  // }
  // else{
  //   this._productDetailsService.putProducts(form.value).subscribe((res)=>
  //   {
  //     this.resetForm(form);
  //     this.refreshProductList();
  //     M.toast({html:'Updated Successfully', classes : 'rounded'});
  //   });
  // }
  }

  refreshProductList()
  {
    this._productDetailsService.getAllProducts().subscribe((res)=>
    {
      this._productDetailsService.productDetails = res as ProductDetails[];
    });
  }
  onEdit(products : ProductDetails, form:NgForm)
  {
    
   this._productDetailsService.selectedProductDetails = products;
//    if(form.value._id == "")
//    {
//    this._productDetailsService.postProductDetail(form.value).subscribe((res)=>
//    {
//      this.resetForm(form);
//      this.onSubmit(form);
//      this.refreshProductList();
//      M.toast({html:'Saved Successfully', classes : 'rounded'});
//    });
//  }
//  else{
//    this._productDetailsService.putProducts(form.value).subscribe((res)=>
//    {
//      this.resetForm(form);
//      this.refreshProductList();
//      M.toast({html:'Updated Successfully', classes : 'rounded'});
//    });
//  }
  }

  onDelete(_id:string, form:NgForm)
  {
    if(confirm('Are you sure to delete this record ?')==true)
    {
      this._productDetailsService.deleteProduct(_id).subscribe((res)=>
      {
        this.refreshProductList();
        this.refreshProductList();
        M.toast({html : 'Deleted Successfully', classes: 'rounded'});
      });
    }
  }
}
