import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user2',
  templateUrl: './create-user2.component.html',
  styleUrls: ['./create-user2.component.css']
})
export class CreateUser2Component {

  public use2: FormGroup=new FormGroup({

    name:new FormControl(),
    age:new FormControl(),
    add:new FormGroup({
      city:new FormControl(),
      pin:new FormControl()
    }),
    type:new FormControl(),
    //busFee:new FormControl(),
    //hostelFee:new FormControl()
  })

  constructor(){
    this.use2.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='day'){
          this.use2.addControl('busFee',new FormControl());
          this.use2.removeControl('hostelFee');
        }
        else{
          this.use2.addControl('hostelFee',new FormControl());
          this.use2.removeControl('busFee');
        }
      }

    )
  }

  submit(){
    console.log(this.use2.value);
  }

}
