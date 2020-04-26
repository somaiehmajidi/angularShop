import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../data.model';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  loadedProduct: Product[] = [];
  index: number = 0;

  constructor(private apiService: ApiService,
              private cartService: CartService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(){
    this.apiService.fetchProducts()
    .subscribe(Products => {
      this.loadedProduct = Products;
    });
  }

  addToCart(product){
    this.index +=1 ;
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  
}
