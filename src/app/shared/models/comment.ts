import { User } from "./user"

export class Comment {

body:string
user:{id:number,
username:string}
constructor(comment:any){
  this.body=comment.body
  this.user=comment.user
}


}
