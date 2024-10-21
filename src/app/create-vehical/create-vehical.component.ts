import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicalService } from '../vehical.service';

@Component({
  selector: 'app-create-vehical',
  templateUrl: './create-vehical.component.html',
  styleUrls: ['./create-vehical.component.css']
})
export class CreateVehicalComponent {

  public vehicalForm: FormGroup =new FormGroup(
    {
      vehicle:new FormControl(),
      manufacturer:new FormControl(),
      model:new FormControl(),
      type:new FormControl(),
      fuel: new FormControl(),
      color:new FormControl(),
      image:new FormControl(),
      cost: new FormControl()
    }
  )
  constructor(private _vehicalService:VehicalService){}
  
  submit(){
    console.log(this.vehicalForm.value);
    this._vehicalService.createVehical(this.vehicalForm.value).subscribe(
      (data:any)=>{
        alert("created sucessfully");
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
}
