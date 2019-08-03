import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { format } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: HttpClient;
  products: Products[] = [];

  constructor(http: HttpClient) {
    this.url = http;
    this.fetchProduct();
  }
  fetched: boolean = false;
  fetchProduct() {
    this.url.get('./assets/products.json').subscribe(
      data => {
        if (!this.fetched) {
          this.convert(data);
          this.fetched = true;
        }
      }
    );
  }
  convert(data: any) {
    for (let index of data) {
      let productObj = new Products(index.id, index.name, index.price, index.category);
      this.products.push(productObj);

    }
  }
  getProducts(): Products[] {
    return this.products;
  }
  // delete(productId: number) {
  //   let foundIndex: number = -1;
  //   for (let i = 0; i < this.products.length; i++) {
  //     let proIndex = this.products[i];
  //     if (productId == proIndex.id) {
  //       foundIndex = i;
  //       break;
  //     }
  //   }
  //   this.products.splice(foundIndex,1);
  // }
  delete(index:Products){
    let indexx=this.products.indexOf(index);
    this.products.splice(indexx,1);
  }
  add(newProduct:Products){
    this.products.push(newProduct);
  }
}
export class Products {
  id: number;
  name: string;
  price: number;
  category: string;
  constructor(id: number, name: string, price: number, category: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }
}