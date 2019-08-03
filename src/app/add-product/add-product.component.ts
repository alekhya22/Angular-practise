import { Component, OnInit } from '@angular/core';
import { ProductService, Products } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
service:ProductService;
createdProduct:Products;

  constructor(service:ProductService) { 
    this.service=service;
  }

  ngOnInit() {
  }
add(data:Products){
  this.createdProduct=new Products(data.id,data.name,data.price,data.category);
  this.service.add(this.createdProduct);

}
}
