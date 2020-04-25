import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';

import { Product } from './data.model';
import { map } from 'rxjs/operators'; 

@Injectable({  
	providedIn: 'root'  
})  
export class ApiService {

  products: Product[] = [];

	private SERVER_URL = "http://localhost:3000/products";
	
	constructor(private httpClient: HttpClient) { }

	public get(){  
		return this.httpClient.get(this.SERVER_URL);  
	}

	fetchProducts(){
        return this.httpClient.get(
            'http://localhost:3000/products'
          )
          .pipe(
            map( (responseData: {[key: number]: Product}) => { 
            const productArray: Product[] = [];
            for(const key in responseData){
              if (responseData.hasOwnProperty(key)){
                productArray.push({ ...responseData[key], id: +key});
                this.products = productArray;
              }
            }
            return productArray;
          }))
    }

  fetchProduct(id: number): Product{
    return this.products[id];
  }
  
}
