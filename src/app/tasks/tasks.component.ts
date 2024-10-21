import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
a:string="";
names:string[]=[];
  submit(){
    this.names.push(this.a);
  }
  del(){
    this.names.pop();
  }
  // Student Registration form

  studentName:string="";
  studentAge:number=0;
  students:any=[];
  create(){
    let student={
      name:this.studentName,
      age:this.studentAge
    }
    this.students.push(student);
  }

}
