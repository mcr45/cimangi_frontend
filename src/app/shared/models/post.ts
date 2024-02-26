import { User } from "./user";

export class Post {
  id:number;
  title:String;
  body:String;
  created_at:Date;
  author?:User;


  constructor(post:any){
    this.id=post.id || 0
    this.title=post.title || ""
    this.body=post.body || ""
    this.created_at=post.created_at || ""
    this.author=post.user || null

  }
}
