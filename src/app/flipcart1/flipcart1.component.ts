import { Component } from '@angular/core';
import { Flipcart1Service } from '../flipcart1.service';

@Component({
  selector: 'app-flipcart1',
  templateUrl: './flipcart1.component.html',
  styleUrls: ['./flipcart1.component.css']
})
export class Flipcart1Component {

  flipcartArrs:any=[];
  constructor(private _flipcartService1:Flipcart1Service){
    _flipcartService1.getFlipcart1().subscribe(
      (data:any)=>{
        this.flipcartArrs=data;
        alert("successfully");
      },
      (err:any)=>{
         alert("internal server error");
      }
    )
  }

}
