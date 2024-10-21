import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
   
  a:number=0;
  rand(){
    const b=Math.floor(Math.random()*6)+1;
    this.a=b;
    
  }
}
