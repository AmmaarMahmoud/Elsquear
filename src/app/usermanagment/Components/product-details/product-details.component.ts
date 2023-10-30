import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProductService } from 'src/app/@core/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  oneProduct:any;
  CurrentId?:number
  constructor(private protect :ProductService , private activeRoue:ActivatedRoute){
    this.activeRoue.paramMap.subscribe((param:any)=>{
      this.CurrentId=Number(param.get('id'))
      console.log(this.CurrentId);
      
    })
  }
  ngOnInit(): void {
    this.getOmeProduct()
  }
  getOmeProduct(){
    this.protect.getAllproduct().pipe(
      map((values:any)=>{
        return values.results.filter((value:any)=>value.id===this.CurrentId)
      })
    ).subscribe((data)=>{
      this.oneProduct=data[0]
      console.log(this.oneProduct);
    })
  }
}
