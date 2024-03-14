import { Comment } from "./comment";
import { User } from "./user";

export class Post {
  id?:number;
  title:string;
  body:string;
  likes:number;
  /* comment:array of comment to be implemented */
  /* created_at:Date; */
  comments?:Comment[]
  author?:User;


  constructor(post:any){
    this.id
    this.title=post.title || ""
    this.body=post.body || ""
    this.likes=post.likes|| 0
    this.comments=post.comments
    /* this.created_at=post.created_at || "" */
    this.author=post.user || null

  }
}
