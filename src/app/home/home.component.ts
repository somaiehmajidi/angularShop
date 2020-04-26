import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [];
  // selectedProduct;

  constructor(
    private apiService: ApiService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(){
    this.apiService.get().subscribe((data: any[])=>{  
			console.log(data);  
      this.products = data.slice(0,3);  
      console.log(this.products);
		})  
  }

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  openProducts(){
    this.router.navigate(['./products']);
  }
  // public selectProduct(product){
  //   this.selectedProduct = product;
  // }
}
