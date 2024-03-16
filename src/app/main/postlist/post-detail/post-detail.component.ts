import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../core/services/post.service';
import { Post } from '../../../shared/models/post';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommentService } from '../../../core/services/comment.service';
@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent implements OnInit{
id!:number
post!:Post

constructor(private ps:PostService,private comment:CommentService,private route:ActivatedRoute){}

ngOnInit() {
  this.route.params.subscribe((res)=>{this.id=res['id']})
    this.ps.getPost(this.id).subscribe(
      (res)=>{console.log(res)
        this.post=res}
    )


}
onComment(form:NgForm){
  console.log(form)
  console.log(this.id)
  if(form.valid){

    this.comment.addComment('posts',this.id,form.value.commentext).subscribe(
      {next:(res:any)=>{console.log('comment added')
    console.log(res)
    this.ps.getPost(this.id).subscribe(
      (res)=>{
        this.post=res}
    )


  },
      error:(err)=>{console.log(err)}}
    )
  }


  form.reset()
}

}
