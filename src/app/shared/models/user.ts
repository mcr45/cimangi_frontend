import { Post } from "./post";

Post
export class User {
  id!:number;
  first_name:string;
  last_name:string;
  email:string;
  username:string;
  posts:Post[];

constructor(user:any){
  this.id
  this.first_name=user.first_name,
  this.last_name=user.last_name,
  this.email=user.email,
  this.username=user.username
  this.posts=user.posts
}

}
