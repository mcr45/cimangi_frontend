import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe';
import { RecipeService } from '../../core/services/recipe.service';
import { RecipeComponent } from './recipe/recipe.component';
@Component({
  selector: 'app-recipelist',
  standalone: true,
  imports: [RecipeComponent],
  templateUrl: './recipelist.component.html',
  styleUrl: './recipelist.component.scss',
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [];
  current_page:number=1;
  total_pages:number=0
  constructor(private rs: RecipeService) {}

  ngOnInit(): void {
   /*  this.rs.getRecipes().subscribe({
      next: (res: any) => {
        console.log(res), (this.recipes = res);
      },
      error: (err) => {
        console.log(err);
      },
    }); */
    this.paginate(this.current_page)
  }
  paginate(page:number){
    this.rs.getRecipes(page).subscribe({
      next: (res: any) => {
        console.log(res), this.recipes = res.recipes;this.current_page=res.current_page,this.total_pages=res.total_pages
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  nextPage(){
    if(this.current_page< this.total_pages){
      this.paginate(this.current_page + 1)
    }
  }

  previousPage(){
    if(this.current_page > 1){
      this.paginate(this.current_page - 1)
    }
  }

  onLoad(event:any){
    this.recipes=event
  }
}
