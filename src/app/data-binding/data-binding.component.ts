import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  age:number=10;
  name:String="shri";
  submit(){
    alert("submit clicked");
  }
  typing(){
    alert("typing");
  }
  phone:string="+91 ";
  isInvalid:boolean=false;
}
