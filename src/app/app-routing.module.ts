import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayproductsComponent } from './displayproducts/displayproducts.component';
import { ProductService } from './product.service';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [
  {path:"products-display",component:DisplayproductsComponent},
  {path:"products=add",component:AddProductComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
