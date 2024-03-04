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
errorMsg:string=''
constructor(private authServ:AuthenticationService,private router:Router){}

  OnFormSubmit(form:NgForm){
    console.log(form.value.username)

    if(form.valid){this.authServ.logIn(form.value.username,form.value.password).subscribe({
      next:(res:any)=>{
        console.log(res.token)
        this.authServ.setToken(res.token),
      this.router.navigate(["home"])},
      error:(error:any)=>{this.errorMsg=error}
    })}
  }
}
