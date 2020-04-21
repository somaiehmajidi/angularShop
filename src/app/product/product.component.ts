import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  product;
  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    
  }
  
}
