import { Component, Input } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {
@Input()recipe!:Recipe

constructor(private router:Router){}

onRecipe(){
this.router.navigate([`home/recipes/${this.recipe.id}/info`])
}


}
