import { User } from "./user"
import { Comment } from "./comment";
export class Recipe {
id?:number;
title:string;
body:string;
category:string;
author?:User;
comments?:Comment[]

constructor(recipe:any){
this.id
this.title=recipe.title || ''
this.body=recipe.body || ''
this.category=recipe.category || ''
this.author=recipe.author || null
this.comments=recipe.comments || []
}

}
