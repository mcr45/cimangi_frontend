import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../../postlist/post/post.component';
import { RecipeComponent } from '../../recipelist/recipe/recipe.component';
import { Recipe } from '../../../shared/models/recipe';
import { RecipeService } from '../../../core/services/recipe.service';
import { PostService } from '../../../core/services/post.service';
import { Post } from '../../../shared/models/post';
@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [RecipeComponent,PostComponent],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent implements OnInit{

recipes!:Recipe[]
recipe!:Recipe
post!:Post
constructor(private rs:RecipeService,private ps:PostService){}

ngOnInit(){
 /*  this.rs.getRecipes().subscribe(({next:(res:any)=>{this.recipes=res},
  error:(err)=>{console.log(err)}}))
  this.recipe=this.recipes[this.recipes.length-1]
  console.log(this.recipe) */
  /* this.rs.getRecipes().subscribe({
    next: (res: any) => {
      console.log(res), (this.recipes = res);
      this.recipe=this.recipes[0]
  console.log(this.recipe)
    },
    error: (err) => {
      console.log(err);
    },
  }); */

  this.ps.getBestPost().subscribe({
    next:(res)=>{this.post=res},
    error:(err)=>{console.log(err)}
  })



}


}
