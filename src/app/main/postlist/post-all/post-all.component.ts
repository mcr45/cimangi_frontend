import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { Post } from '../../../shared/models/post';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-post-all',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './post-all.component.html',
  styleUrl: './post-all.component.scss',
})
export class PostAllComponent implements OnInit {
  posts: Post[] = [];
  error: string = '';

  constructor(private postserv: PostService) {}
  ngOnInit(): void {
    this.postserv.getPosts().subscribe({
      next: (res) => {
        (this.posts = res), console.log(this.posts);
      },
      error: (err) => {
        console.log(err);
        this.error = err.message;
      },
    });
  }


  onLoad($event:any){
    this.posts=$event
    console.log(`dalle 45 ${$event}`)
    }


}
