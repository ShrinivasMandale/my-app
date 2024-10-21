import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {
  bankArr:any=[];
  str:string="";
  order:string="";
  column:string="";
  page:number=1;

  constructor(private _bankService:BankService){
    _bankService.getBank().subscribe(
      (data:any)=>{
        this.bankArr=data;
      },
      (err:any)=>{
        alert("enter server error");
      }
    )
  }
 
  search(){
    this._bankService.getFilterAcc(this.str).subscribe(
      (data:any)=>{
        this.bankArr=data;
      },
      (data:any)=>{
        alert("internal serval error");
      }
    )
  }
  sort(){
    this._bankService.getSortedacc(this.column,this.order).subscribe(
      (data:any)=>{
        this.bankArr=data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
  pagenation(){
    this._bankService.getPagedAcc(this.page).subscribe(
      (data:any)=>{
        this.bankArr=data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
  del(id:string){
    this._bankService.deleteBankAcc(id).subscribe(
      (data:any)=>{
        alert("deleted sucesfully")
        location.reload();

      },
      (err:any)=>{
        alert(err.error);
      }
    )

  }

 

}
