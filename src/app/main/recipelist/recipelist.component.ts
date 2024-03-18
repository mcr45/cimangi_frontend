import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe';
import { RecipeService } from '../../core/services/recipe.service';
import { RecipeComponent } from './recipe/recipe.component';
@Component({
  selector: 'app-recipelist',
  standalone: true,
  imports: [RecipeComponent],
  templateUrl: './recipelist.component.html',
  styleUrl: './recipelist.component.scss'
})
export class RecipelistComponent implements OnInit{
recipes:Recipe[]=[]
  constructor(private rs:RecipeService){}

  ngOnInit(): void {
      this.rs.getRecipes().subscribe({
        next:(res:any)=>{console.log(res),
          this.recipes=res
        },
        error:(err)=>{console.log(err)}
      })
  }

}
