import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {

  emailArr:any=[];

  constructor(private _mailService:MailService){
    _mailService.getEmails().subscribe(
      (data:any)=>{
        this.emailArr=data;
      },
      (err:any)=>{
        alert("internal server");
      }
    )
  }
 
  
  

}
