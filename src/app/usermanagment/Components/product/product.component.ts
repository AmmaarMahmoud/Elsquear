import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ProductService } from 'src/app/@core/services/product.service';
import { Prod } from 'src/app/@models/prod';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  Allproduct:Prod[]=[]
  constructor(private product:ProductService){

    this.getAllProduct()
  }
  ngOnInit(): void {
  }

  getAllProduct(){
    this.product.getAllproduct().pipe(
      map((values:any)=>{
        const items = values.results.map((item:any)=>{
          return {
            id:item.id,
            title:item.title,
            overview:item.overview
          }
        })
        return items
      })
    ).subscribe((data:any)=>{
      this.Allproduct=data
      console.log(data);
    })
  }
}
