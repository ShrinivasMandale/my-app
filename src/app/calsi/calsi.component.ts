import { Component } from '@angular/core';

@Component({
  selector: 'app-calsi',
  templateUrl: './calsi.component.html',
  styleUrls: ['./calsi.component.css']
})
export class CalsiComponent {
  num1:number=0;
  num2:number=0;
  res1:number=0;

   sum() {
    this.res1=this.num1+this.num2;
  }
  div(){
    this.res1=this.num1/this.num2;
  }
  mul(){
    this.res1=this.num1*this.num2;
  }
 sub(){
  this.res1=this.num1-this.num2;
 }


}
