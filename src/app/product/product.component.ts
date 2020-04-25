import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../data.model';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  loadedProduct: Product[] = [];

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(){
    this.apiService.fetchProducts()
    .subscribe(Products => {
      this.loadedProduct = Products;
    });
  }
  
}
