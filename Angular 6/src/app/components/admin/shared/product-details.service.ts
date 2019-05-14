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
  postProductDetail(products:ProductDetails)
  {
 return this.http.post(this.baseURL, products );
  }

  //Function for Fetch all products from mongodb
  getAllProducts()
  {
    return this.http.get(this.baseURL);
  }
  putProducts(products: ProductDetails)
  {
    return this.http.put(this.baseURL + `/${products._id}`,products);
  }
  deleteProduct(_id:string)
  {
     return this.http.delete(this.baseURL + `/${_id}`);
  }
}
