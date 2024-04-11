import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostFormComponent } from '../../main/postlist/post-form/post-form.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Post } from '../../shared/models/post';
import { PostService } from '../../core/services/post.service';
import { RecipeService } from '../../core/services/recipe.service';
import { Recipe } from '../../shared/models/recipe';

@Component({
  selector: 'app-updatebox',
  standalone: true,
  imports: [PostFormComponent, FormsModule],
  templateUrl: './updatebox.component.html',
  styleUrl: './updatebox.component.scss',
})
export class UpdateboxComponent {
  @Input() type!: 'post' | 'recipe';
  @Input() post!: Post;
  @Input() recipe!:Recipe;
  @Output() updated: EventEmitter<Post|Recipe> = new EventEmitter();
  @Output() closeme:EventEmitter<boolean>=new EventEmitter()

  constructor(private ps: PostService, private rs: RecipeService) {}

  onUpdate(form: NgForm) {
    if (form.valid) {
      this.post = {
        id: this.post.id,
        title: form.value.title,
        body: form.value.body,
        likes: this.post.likes,
      };
      console.log(this.post);
      this.ps.updatePost(this.post).subscribe({
        next: (res: any) => {
          console.log(res), this.updated.emit(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  onUpdateRecipeForm(form: NgForm){

    if (form.valid) {
      this.recipe = {
        id:this.recipe.id,
        title: form.value.title||this.recipe.title,
        category: form.value.category||this.recipe.category,
        body: form.value.cook||this.recipe.body,
      };
      this.rs.updateRecipe(this.recipe.id!,this.recipe).subscribe({
        next: (res:any) => {
          console.log(res),
          this.updated.emit(res),
          form.reset();

        },
        error: (err) => {
          console.log(err);
        },
      });

    }


  }



  closeForm(){
    this.closeme.emit(true)
  }



}
