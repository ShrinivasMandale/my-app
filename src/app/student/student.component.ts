import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  studentArr:any=[];
  str1:string="";
  column:string="";
  order:string="";

  constructor(private _studentService:StudentService){
    _studentService.getStudent().subscribe(
      (data:any)=>{
        this.studentArr=data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
  del(id:string){
    this._studentService.delStudent(id).subscribe(
      (data:any)=>{
        alert("deleted sucesfully");
        location.reload();
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
  search(){
    this._studentService.getFilterStu(this.str1).subscribe(
      (data:any)=>{
       this.studentArr=data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
  sort(){
    this._studentService.getSortedStu(this.column,this.order).subscribe(
      (data:any)=>{
        this.studentArr=data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }

  

}
