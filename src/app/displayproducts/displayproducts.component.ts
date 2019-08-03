import { Component, OnInit } from '@angular/core';
import { ProductService, Products } from '../product.service';

@Component({
  selector: 'app-displayproducts',
  templateUrl: './displayproducts.component.html',
  styleUrls: ['./displayproducts.component.css']
})
export class DisplayproductsComponent implements OnInit {
  service: ProductService;
  productDetails: Products[]=[];
  constructor(service: ProductService) {
    this.service = service;
  }
  delete(index:Products){
    this.service.delete(index);
   // this.productDetails=this.service.getProducts();
  }

  ngOnInit() {
    this.service.fetchProduct();
    this.productDetails=this.service.getProducts();
  }
 

}
