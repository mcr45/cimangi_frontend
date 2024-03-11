import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PostService } from '../../../core/services/post.service';
import { Post } from '../../../shared/models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent {
post!:Post
constructor(private ps:PostService,private route:Router){}
  onCreate(form:NgForm){
console.log(form.value.title,form.value.body)
if(form.valid){
/* this.post=new Post({title:form.value.title,body:form.value.body,likes:0}) */

this.post={title:form.value.title,body:form.value.body,likes:0}
console.log(this.post)
this.ps.createPost(this.post).subscribe({next:(res)=>{console.log(res)
form.reset()
this.route.navigate(['home/'])
},
error:(err)=>{console.log(err)}})

}
}



}
