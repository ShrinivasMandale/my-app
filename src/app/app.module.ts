import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import{ HttpClientModule } from '@angular/common/http';
import { BankComponent } from './bank/bank.component';
import { EmpComponent } from './emp/emp.component';
import { CreateVehicalComponent } from './create-vehical/create-vehical.component';
import { Flipcart1Component } from './flipcart1/flipcart1.component';
import { MailComponent } from './mail/mail.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUser2Component } from './create-user2/create-user2.component';
import { VehicalDetailsComponent } from './vehical-details/vehical-details.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    HomeComponent,
    DataBindingComponent,
    CalsiComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DiceComponent,
    DirectivesComponent,
    PipesComponent,
    TasksComponent,
    FlipkartComponent,
    HigherOrderComponent,
    PraComponent,
    VehicalComponent,
    BankComponent,
    EmpComponent,
    CreateVehicalComponent,
    Flipcart1Component,
    MailComponent,
    CreateBankComponent,
    StudentComponent,
    CreateStudentComponent,
    CreateUserComponent,
    CreateUser2Component,
    VehicalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
