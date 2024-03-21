import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../core/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../../shared/models/recipe';
import { FormsModule, NgForm } from '@angular/forms';
import { CommentService } from '../../../core/services/comment.service';
@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent implements OnInit {
  id!: number;
  recipe!: Recipe;

  constructor(
    private rec: RecipeService,
    private route: ActivatedRoute,
    private comment: CommentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.id = res['id'];
    });
    this.rec.getRecipe(this.id).subscribe({
      next: (res) => {
        console.log(res), (this.recipe = res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onComment(form: NgForm) {
    console.log(form);
    console.log(this.id);
    if (form.valid) {
      this.comment
        .addComment('recipes', this.id, form.value.commentext)
        .subscribe({
          next: (res: any) => {
            console.log('comment added');
            console.log(res);
            this.rec.getRecipe(this.id).subscribe((res) => {
              this.recipe = res;
            });
          },
          error: (err) => {
            console.log(err);
          },
        });
    }

    form.reset();
  }
}
