import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 /*  id!:number;
  first_name:string;
  last_name:string;
  email:string;
  username:string; */
  user!:User
  constructor() { }

  setUser(userdata:User){
    this.user=new User(userdata)
  }
getUser(){
  return this.user
}
}
