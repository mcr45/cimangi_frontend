import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostFormComponent } from '../../main/postlist/post-form/post-form.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Post } from '../../shared/models/post';
import { PostService } from '../../core/services/post.service';
import { RecipeService } from '../../core/services/recipe.service';


@Component({
  selector: 'app-updatebox',
  standalone: true,
  imports: [PostFormComponent,FormsModule],
  templateUrl: './updatebox.component.html',
  styleUrl: './updatebox.component.scss'
})
export class UpdateboxComponent {
@Input() type!:'post'|'recipe'
@Input() post!:Post
@Output() updated:EventEmitter<Post>=new EventEmitter()

constructor(private ps:PostService,private rs:RecipeService){}


onUpdate(form:NgForm){

  if (form.valid) {
    /* this.post=new Post({title:form.value.title,body:form.value.body,likes:0}) */

    this.post = {id:this.post.id ,title: form.value.title, body: form.value.body, likes: this.post.likes };
    console.log(this.post);
    this.ps.updatePost(this.post).subscribe({next:(res:any)=>{
      console.log(res),
      this.updated.emit(res)
    },
  error:(err)=>{console.log(err)}})

  }

}


}
