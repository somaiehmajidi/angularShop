import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  index: number = 0;

  constructor() { }

  addToCart(product) {
    this.items.push(product);
    this.index += 1;
    console.log(this.index);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
