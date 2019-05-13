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
  readonly baseURL = 'http://localhost:3000/productDetails';

  constructor(private http:HttpClient) { }
  postProductDetail(product:ProductDetails)
  {
 return this.http.post(this.baseURL, product );
  }
}
