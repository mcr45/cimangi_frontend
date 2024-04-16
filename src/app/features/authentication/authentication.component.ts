import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss',
})
export class AuthenticationComponent {
  toLog: boolean = false;
  errorMsg: string = '';
  createUser: {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
    password_confirmation: string;
  } = {
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
  };
  constructor(
    private authServ: AuthenticationService,
    private router: Router,
    private us: UserService
  ) {}

  OnFormSubmit(form: NgForm) {


    if (form.valid && this.toLog) {
      this.authServ.logIn(form.value.username, form.value.password).subscribe({
        next: (res: any) => {
          console.log(res);
          this.us.setUser(res.user);
          this.authServ.setToken(res.token), this.router.navigate(['/home']);
        },
        error: (error: any) => {
          this.errorMsg = error.error.error;
          console.log(error.error.error)
        },
      });
    }
    if (form.valid && !this.toLog) {
      /*  console.log(form) */
      this.createUser.first_name = form.value.name;
      this.createUser.last_name = form.value.lastname;
      this.createUser.email = form.value.email;
      this.createUser.username = form.value.username;
      this.createUser.password = form.value.password;
      this.createUser.password_confirmation = form.value.password;

      console.log(this.createUser);
      this.authServ.signup(this.createUser).subscribe({
        next: (res: any) => {
          console.log(res);
          this.us.setUser(res.user);
          this.authServ.setToken(res.token), this.router.navigate(['/home']);
        },
        error: (err) => {
          console.log(err.error);
          this.errorMsg=err.error;
        },
      });
    }
  }
  onClick() {
    this.toLog = !this.toLog;
  }
}
