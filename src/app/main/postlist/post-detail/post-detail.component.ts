import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../core/services/post.service';
import { Post } from '../../../shared/models/post';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent implements OnInit{
id!:number
post!:Post
constructor(private ps:PostService,private route:ActivatedRoute){}

ngOnInit() {
  this.route.params.subscribe((res)=>{this.id=res['id']})
    this.ps.getPost(this.id).subscribe(
      (res)=>{console.log(res)
        this.post=res}
    )


}


}
