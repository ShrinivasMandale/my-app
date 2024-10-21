import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent {

  constructor(private _bankServic:BankService){}

  public bankForm:FormGroup=new FormGroup({
    account_name:new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profie_picture:new FormControl()
  })

  sub(){
    console.log(this.bankForm.value);
    this._bankServic.createBankAcc(this.bankForm.value).subscribe(
      (data:any)=>{
        alert("creted sucesfully");
      },
      (err:any)=>{
        alert(err.error);
      }
    )
    
  }

}
