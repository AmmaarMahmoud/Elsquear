import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { PaginatorModule } from 'primeng/paginator';



@NgModule({
  declarations: [
    DisplayProductsComponent,
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    RouterModule,
    FormsModule,
    PaginatorModule,
  ],
  providers: [],
  exports: [
    DisplayProductsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
