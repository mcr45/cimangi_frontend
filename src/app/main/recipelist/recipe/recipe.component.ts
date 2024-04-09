import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AlertboxComponent } from '../../../features/alertbox/alertbox.component';
import { EditComponent } from '../../../features/edit/edit.component';
import { UpdateboxComponent } from '../../../features/updatebox/updatebox.component';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [FormsModule,AlertboxComponent,EditComponent,UpdateboxComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent implements OnInit{
  @Input() recipe!: Recipe;
  user!:User
  update!:boolean
  delete!:boolean
  @Output() load:EventEmitter<Recipe[]>=new EventEmitter()
  constructor(private router: Router,private us:UserService) {}

  ngOnInit(): void {
      this.user=this.us.getUser()
  }

  onRecipe() {
    this.router.navigate([`home/recipes/${this.recipe.id}/info`]);
  }


  showUpdate(){
    this.update=!this.update
  }
  showDelete(){this.delete=!this.delete}

  reload($event:any){
    this.load.emit($event)
  }

  onClose(){
    this.delete=false

  }

}
