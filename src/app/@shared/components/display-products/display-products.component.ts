import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.scss']
})
export class DisplayProductsComponent implements OnInit,OnChanges {
  @Input() Products:any[]=[]
  displayedCards:any[]=[]
  constructor(private route:Router){}

  ngOnChanges(): void {
    this.proccessProduvt()
  }

  ngOnInit(): void {
   console.log(this.Products);
  }
  onPageChange(event: any): void {
    const firstItem = event.first;
    console.log(firstItem);
    
    const itemsPerPage = event.rows;
    this.displayedCards = this.Products.slice(firstItem, firstItem + itemsPerPage);
  }
  
  proccessProduvt(){
    this.Products.forEach((element:any) => {
      if(this.Products.indexOf(element) < 6){
        this.displayedCards.push(element)
      }
    });
  }

  routId(id:number){
  this.route.navigate([`user/Productdetails/${id}`])
  }
}
