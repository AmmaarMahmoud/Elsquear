import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ProductService } from 'src/app/@core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  Allproduct:any
  constructor(private product:ProductService){

    this.getAllProduct()
  }
  ngOnInit(): void {
  }

  getAllProduct(){
    this.product.getAllproduct().pipe(
      map((values:any)=>{
        return values.results
      })
    ).subscribe((data:any)=>{
      this.Allproduct=data
      console.log(this.Allproduct);
    })
  }
}
