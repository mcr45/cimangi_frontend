import { Component, Input } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe';
@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {
@Input()recipe!:Recipe




}
