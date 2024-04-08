import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostService } from '../../core/services/post.service';
import { RecipeService } from '../../core/services/recipe.service';
import { Recipe } from '../../shared/models/recipe';
import { Post } from '../../shared/models/post';


@Component({
  selector: 'app-alertbox',
  standalone: true,
  imports: [],
  templateUrl: './alertbox.component.html',
  styleUrl: './alertbox.component.scss'
})
export class AlertboxComponent {

@Output() closeme:EventEmitter<boolean>=new EventEmitter()
@Output() done:EventEmitter<Post[]>=new EventEmitter()
@Input() type!:'post'|'recipe'
@Input() resource!:Post|Recipe
constructor(private ps:PostService,private rs:RecipeService){}
posts!:Post[]
onClose(){
  this.closeme.emit(true)
}

  deleteMe(){
    if(this.type==='post'){
      this.ps.deletePost(this.resource.id!).subscribe({next:(res:any)=>{console.log(res),
      this.done.emit(res)},
    error:(err)=>{console.log(err)}})
    }
  }


}
