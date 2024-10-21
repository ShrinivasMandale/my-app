import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  constructor (private _studentService:StudentService){}

  public studentForm:FormGroup=new FormGroup({

    name: new FormControl(),
    phone:new FormControl(),
    city:new FormControl(),
    dob:new FormControl(),
    profile_picture: new FormControl(),
    email:new FormControl(),
    school_logo:new FormControl(),
    school_name:new FormControl(),
    school_city:new FormControl(),
    school_pin:new FormControl()
  })
  submit(){
    console.log(this.studentForm.value);
    this._studentService.submitStudent(this.studentForm.value).subscribe(
      (data:any)=>{
        alert("creted sucesfully");
      },
      (err:any)=>{
        alert(err.error);
      }
    )
    
    
  }

}
