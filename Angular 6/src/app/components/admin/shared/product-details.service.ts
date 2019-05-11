import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable} from 'rxjs';

// import 'rxjs/add/operator/map';

// import 'rxjs/add/operator/toPromise';



import { ProductDetails } from './product-details.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  selectedProductDetails: ProductDetails;
  productDetails: ProductDetails[];

  constructor() { }
}
