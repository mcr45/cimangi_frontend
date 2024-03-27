import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { RecipeService } from '../../../core/services/recipe.service';
@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.scss'
})
export class RecipeFormComponent {

constructor(private rs:RecipeService){}

onCreateForm(form:NgForm){

  console.log(form)

}


}
