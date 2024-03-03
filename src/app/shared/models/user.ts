export class User {
  id!:number;
  first_name:String;
  last_name:String;
  email:String;
  username:String;

constructor(user:any){
  this.id
  this.first_name=user.first_name,
  this.last_name=user.last_name,
  this.email=user.email,
  this.username=user.username
}

}
