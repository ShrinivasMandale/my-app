import { Component } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {
  employees= [
    { name: 'sandeep', experience: 4, package: 1200000, role: 'UIDeveloper' },
    { name: 'amar', experience: 5, package: 1500000, role: 'UIDeveloper' },
    {name:"shri", experience:2, package:1100000, role:"java"}
]
ename="";
eex=0;
epak=0;
erol="";

add(){
 let emp={
  name:this.ename,
  experience:this.eex,
  package:this.epak,
  role:this.erol
 }
 this.employees.push(emp);
}

del(i:number){
  this.employees.splice(i,1);
}
hike(){
  this.employees=this.employees.map(emp=>{
    emp.package=emp.package*(120/100);
    return emp;
  })
}
bonas(){
  this.employees=this.employees.map(emp=>{
    emp.package=emp.package+30000;
    return emp;
  })
}
pacLH(){
  this.employees=this.employees.sort((a,b)=>a.package-b.package);
}
pacHL(){
  this.employees=this.employees.sort((a,b)=>b.package-a.package);
}
totalC(){
  var tot=this.employees.reduce((sum,a)=>sum+a.package,0)
  alert("total cost of emp "+tot);
}
totE(){
  alert("total employess is "+this.employees.length);
}
 str1:string="";

 search(){
  this.employees=this.employees.filter(emp=>emp.name.includes(this.str1))
 }

}
  
  




