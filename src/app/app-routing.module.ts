import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalsiComponent } from './calsi/calsi.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TasksComponent } from './tasks/tasks.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { HigherOrderComponent } from './higher-order/higher-order.component';
import { PraComponent } from './pra/pra.component';
import { VehicalComponent } from './vehical/vehical.component';
import { BankComponent } from './bank/bank.component';
import { EmpComponent } from './emp/emp.component';
import { CreateVehicalComponent } from './create-vehical/create-vehical.component';
import { Flipcart1Component } from './flipcart1/flipcart1.component';
import { AuthenticationGuard } from './authentication.guard';
import { MailComponent } from './mail/mail.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUser2Component } from './create-user2/create-user2.component';
import { VehicalDetailsComponent } from './vehical-details/vehical-details.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"dashboard",canActivate:[AuthenticationGuard], component:DashboardComponent,children:[
    {path:"home", component:HomeComponent},
    {path:"welcome",component:WelcomeComponent},
    {path:"data-binding", component:DataBindingComponent},
    {path:"calsi", component:CalsiComponent},
    {path:"rectangle",component:RectangleComponent},
    {path:"circle", component:CircleComponent},
    {path:"bmi",component:BmiComponent},
    {path:"dice",component:DiceComponent},
    {path:"directives",component:DirectivesComponent},
    {path:"pipes",component:PipesComponent},
    {path:"tasks",component:TasksComponent},
    {path:"flipkart",component:FlipkartComponent},
    {path:"higher-order",component:HigherOrderComponent},
    {path:"pra",component:PraComponent},
    {path:"vehical", component:VehicalComponent},
    {path:"bank",component:BankComponent},
    {path:"emp",component:EmpComponent},
    {path:"create-vehical",component:CreateVehicalComponent},
    {path:"flipcart1",component:Flipcart1Component},
    {path:"mail",component:MailComponent},
    {path:"create-bank",component:CreateBankComponent},
    {path:"student",component:StudentComponent},
    {path:"create-student",component:CreateStudentComponent},
    {path:"create-user",component:CreateUserComponent},
    {path:"create-user2",component:CreateUser2Component},
    {path:"vehical-details/:id",component:VehicalDetailsComponent}
  ]},
  {path:"",component:LoginComponent},
  {path:"**",component:PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
