import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from '../../shared/models/user';
import { PostService } from '../../core/services/post.service';
import { Post } from '../../shared/models/post';
import { PostComponent } from '../postlist/post/post.component';
import { RecipeService } from '../../core/services/recipe.service';
import { Recipe } from '../../shared/models/recipe';
import { RecipeComponent } from '../recipelist/recipe/recipe.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [PostComponent, RecipeComponent,RouterLink],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit {
  user!: User;
  post!: Post;
  recipe!: Recipe;

  constructor(
    private us: UserService,
    private ps: PostService,
    private rs: RecipeService
  ) {}

  ngOnInit(): void {
    this.us.profileUser().subscribe((res) => {
      this.user = res;
    });
    this.ps.my_most_viewed().subscribe((res) => {
      (this.post = res), console.log(this.post.body, this.post.title);
    });
    this.rs.my_most_viewed().subscribe((res) => {
      this.recipe = res;
    });
  }
  reloadPost(){
    this.ps.my_most_viewed().subscribe((res) => {
      (this.post = res), console.log(this.post.body, this.post.title);
    });
  }

  reloadRecipe(){
    this.rs.my_most_viewed().subscribe((res) => {
      this.recipe = res;
    });
  }
}
