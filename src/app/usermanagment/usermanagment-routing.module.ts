import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { LayautComponent } from './layaut/layaut.component';

const routes: Routes = [
  {path:'',component: LayautComponent,children:[
      {path:'' , redirectTo:'AllProducts',pathMatch:'full'},
      {path:'AllProducts' , component:ProductComponent},
      {path:'Productdetails/:id' , component:ProductDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermanagmentRoutingModule { }
