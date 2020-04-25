import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from "../../data.model";
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {
  
  products: Product[] = [];
  product: Product;
  id: number;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute) { }

  ngOnInit(){

    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        //this.product = this.apiService.fetchProduct(this.id);
        console.log(this.id);
        this.apiService.fetchProducts()
        .subscribe(Products => {
          this.products = Products;
          this.product = this.products[this.id];
        })
    }
    ); 
  }
}
