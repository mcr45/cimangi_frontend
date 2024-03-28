import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post';
import { NgIf } from '@angular/common';
import { PostService } from '../../core/services/post.service';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.scss',
})
export class PostlistComponent implements OnInit {
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
}
