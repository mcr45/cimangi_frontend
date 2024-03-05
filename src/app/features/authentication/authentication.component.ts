import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})

export class AuthenticationComponent {
toLog:boolean=false
errorMsg:string=''
createUser:{first_name:string;
last_name:string;
email:string;
username:string;
password:string}={first_name:'',
  last_name:'',
  email:'',
  username:'',
  password:''}
constructor(private authServ:AuthenticationService,private router:Router){}

  OnFormSubmit(form:NgForm){
    console.log(form.value.username)

    if(form.valid && this.toLog){this.authServ.logIn(form.value.username,form.value.password).subscribe({
      next:(res:any)=>{
        console.log(res.token)
        this.authServ.setToken(res.token),
      this.router.navigate(["home"])},
      error:(error:any)=>{this.errorMsg=error}
    })}
    if (form.valid && !this.toLog){
     /*  console.log(form) */
      this.createUser.first_name=form.value.name
      this.createUser.last_name=form.value.lastname
      this.createUser.email=form.value.email
      this.createUser.username=form.value.username
      this.createUser.password=form.value.password
      console.log(this.createUser)
      this.authServ.signup(this.createUser).subscribe({next:()=>{},error:(err)=>{}})
    }
  }
  onClick(){
    this.toLog=!this.toLog
  }
}
