import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../../postlist/post/post.component';
import { RecipeComponent } from '../../recipelist/recipe/recipe.component';
import { Recipe } from '../../../shared/models/recipe';
import { RecipeService } from '../../../core/services/recipe.service';
@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [RecipeComponent],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent implements OnInit{

recipes!:Recipe[]
recipe!:Recipe

constructor(private rs:RecipeService){}

ngOnInit(){
 /*  this.rs.getRecipes().subscribe(({next:(res:any)=>{this.recipes=res},
  error:(err)=>{console.log(err)}}))
  this.recipe=this.recipes[this.recipes.length-1]
  console.log(this.recipe) */
  this.rs.getRecipes().subscribe({
    next: (res: any) => {
      console.log(res), (this.recipes = res);
      this.recipe=this.recipes[0]
  console.log(this.recipe)
    },
    error: (err) => {
      console.log(err);
    },
  });


}


}
