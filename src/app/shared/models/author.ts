export class Author {
  id?:number
  username:string


  constructor(author:any){
    this.id=author.id
    this.username=author.username
  }
}
