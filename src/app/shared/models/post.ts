import { User } from "./user";

export class Post {
  id!:number;
  title:String;
  body:String;
  likes:number;
  created_at:Date;
  author?:User;


  constructor(post:any){
    this.id
    this.title=post.title || ""
    this.body=post.body || ""
    this.likes=post.likes|| 0
    this.created_at=post.created_at || ""
    this.author=post.user || null

  }
}
