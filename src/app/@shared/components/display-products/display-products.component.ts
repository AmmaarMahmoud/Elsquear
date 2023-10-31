import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.scss']
})
export class DisplayProductsComponent implements OnInit,OnChanges {
  @Input() Products:any[]=[]
  displayedCards:any[]=[]
  title:any;
  constructor(private route:Router,
    private activeroute:ActivatedRoute){}

  ngOnChanges(): void {
    this.proccessProduvt()
  }

  ngOnInit(): void {
    this.title = this.activeroute.snapshot.paramMap.get('title')
  }
  onPageChange(event: any): void {
    const firstItem = event.first;
    const itemsPerPage = event.rows;
    this.displayedCards = this.Products?.slice(firstItem, firstItem + itemsPerPage);
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
