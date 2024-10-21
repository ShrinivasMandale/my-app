import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
a:number=0;
res:number=0;
  area(){
    this.res=3.14*this.a*this.a;
  }
  per(){
    this.res=2*3.14*this.a;
  }

}
