import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsermanagmentRoutingModule } from './usermanagment-routing.module';
import { ProductComponent } from './Components/product/product.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { LayautComponent } from './layaut/layaut.component';
import { SharedModule } from '../@shared/shared.module';
import { SearchComponent } from './Components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    LayautComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    UsermanagmentRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UsermanagmentModule { }
