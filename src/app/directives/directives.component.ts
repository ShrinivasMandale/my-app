import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
   age:number=20;
   ages:number[]=[10,20,30,40,50];
   states:string[]=["mah","tel","kel","goa"];

   users:any=[
       {name:"abc",age:10},
       {name:"bcd",age:20},
       {name:"cde",age:30}
   ]

   products:any=[
      {name:"pen",price:10,rating:3.5},
      {name:"laptop",price:50000,rating:4.3},
      {name:"mobile",price:25000,rating:4.7}
   ]

   isValid:boolean=true;
}
