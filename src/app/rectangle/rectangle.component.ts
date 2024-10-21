import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {

  num1:number=0;
  num2:number=0;
  res:number=0;
  area(){
    this.res=this.num1*this.num2;
  }
  per(){
    this.res=(this.num1*2)+(this.num2*2);
  }

}
