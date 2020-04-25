import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../data.model';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  loadedProduct: Product[] = [];
  selectedProduct: Product[];
 
  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit(){
    this.apiService.fetchProducts()
    .subscribe(Products => {
      this.loadedProduct = Products;
    })
  }

  public selectProduct(product){
    this.selectedProduct = product;
  }
  
}
