import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  
  Myform!:FormGroup

  constructor(private build : FormBuilder){
    this.Myform=this.build.group({
      name:['',[Validators.required]]
    })
  }

  ngOnInit(): void {

  }
  get name(){
    return this.Myform.get('name')
  }
}
