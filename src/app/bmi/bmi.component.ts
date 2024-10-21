import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  h:number=0;
  w:number=0;
  res:number=0;
  bmi(){
    this.res=(this.w/((this.h/100)*(this.h/100)));
  }

}
