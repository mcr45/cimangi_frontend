import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../core/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../../shared/models/recipe';
@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent implements OnInit{
id!:number
recipe!:Recipe

constructor(private rec:RecipeService,private route:ActivatedRoute){}

ngOnInit(): void {
  this.route.params.subscribe((res:any)=>{this.id=res['id']})
    this.rec.getRecipe(this.id).subscribe(({
      next:(res)=>{
        console.log(res),
        this.recipe=res},
      error:(err)=>{console.log(err)}
    }))
}


}
