import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  /*  id!:number;
  first_name:string;
  last_name:string;
  email:string;
  username:string; */
  user!: User;
  usersubject!:BehaviorSubject<User>
  constructor(private http:HttpClient) {}

  setUser(userdata: User) {
    /* this.user = new User(userdata); */
    this.http.get<User>(`${environment.apiUrl}/loggeduser`).subscribe((res)=>{this.user=res})
  }
  getUser() {
    return this.user
  }
  loadUser(){
     /* this.http.get<User>(`${environment.apiUrl}/loggeduser`).subscribe((res)=>{this.usersubject.next(res)}) */
     this.http.get<User>(`${environment.apiUrl}/loggeduser`).subscribe((res)=>{this.user=res})
  }
}
