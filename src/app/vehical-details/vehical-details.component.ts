import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicalService } from '../vehical.service';

@Component({
  selector: 'app-vehical-details',
  templateUrl: './vehical-details.component.html',
  styleUrls: ['./vehical-details.component.css']
})
export class VehicalDetailsComponent {
  public vehic:any={};

  constructor(private _activatedRoute:ActivatedRoute,private _vechicalService:VehicalService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        _vechicalService.getVehical1(data.id).subscribe(
          (data:any)=>{
            this.vehic=data;
          }
        )
      }
    )
  }
}
