import { Component } from '@angular/core';
import { VehicalService } from '../vehical.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehical',
  templateUrl: './vehical.component.html',
  styleUrls: ['./vehical.component.css']
})
export class VehicalComponent {
  term:string="";
  vehical:any=[];
  column:string="";
  order:string="";
  page:number=1;

  constructor(private _vehicalService:VehicalService){
    _vehicalService.getVehical().subscribe(
      (data:any)=>{
        this.vehical=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
    // for search
    search1(){
      this._vehicalService.getFilteredVehicals(this.term).subscribe(
        (data:any)=>{
          this.vehical=data;
        },
        (err:any)=>{
          alert(err.error);
        }
      )
    }
    sort(){
      this._vehicalService.getSortedVehicales(this.column,this.order).subscribe(
        (data:any)=>{
          this.vehical=data;
        },
        (err:any)=>{
          alert(err.error);
        }
      )
    }
    pagenation(){
      this._vehicalService.getPagedVehicles(this.page).subscribe(
        (data:any)=>{
          this.vehical=data;
        },
        (err:any)=>{
          console.log(err.error);
        }
      )
    }
    delete(id:string){
      this._vehicalService.deleteVehical(id).subscribe(
        (data:any)=>{
          alert("deleted sucesfully");
          location.reload();
        },
        (err:any)=>{
          alert(err.error);
        }
        )
    }
}
