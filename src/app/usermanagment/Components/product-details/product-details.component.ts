import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { ProductService } from 'src/app/@core/services/product.service';
import { Prod } from 'src/app/@models/prod';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  oneProduct?:Prod;
  CurrentId?:number
  constructor(private protect :ProductService , private activeRoue:ActivatedRoute, private route: Router){
    this.activeRoue.paramMap.subscribe((param:any)=>{
      this.CurrentId=Number(param.get('id'))
      console.log(this.CurrentId);
    })
  }

  ngOnInit(): void {
    this.getOneProduct()
  }

  getOneProduct() {
    this.protect.getAllproduct().pipe(
      map((values: any) => {
        return values.results.find((value: any) => {
          return value.id === this.CurrentId;
        });
      })
    ).subscribe((data: any) => {
      this.oneProduct = data; 
      console.log(this.oneProduct);
    });
  }
  acativeCard(){
    this.route.navigate(['user/AllProducts',{title:this.oneProduct?.title}])
  }
}
