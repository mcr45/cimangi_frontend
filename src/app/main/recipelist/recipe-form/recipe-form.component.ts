import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { RecipeService } from '../../../core/services/recipe.service';
import { Recipe } from '../../../shared/models/recipe';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.scss',
})
export class RecipeFormComponent {
  recipe!: Recipe;

  constructor(private rs: RecipeService, private route: Router) {}

  onCreateForm(form: NgForm) {
    console.log('ci sono');
    console.log(form);
    if (form.valid) {
      this.recipe = {
        title: form.value.title,
        category: form.value.category,
        body: form.value.cook,
      };
      this.rs.createRecipe(this.recipe).subscribe({
        next: (res) => {
          console.log(res), this.route.navigate(['home/']);
        },
        error: (err) => {
          console.log(err);
        },
      });
      form.reset();
    }
  }
}
