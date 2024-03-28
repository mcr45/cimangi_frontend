import { Component, Input } from '@angular/core';
import { Post } from '../../../shared/models/post';
import { SlicePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [SlicePipe, RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() post!: Post;

  constructor(private route: Router) {}

  onPostInfo() {
    this.route.navigate([`home/posts/${this.post.id}/info`]);

    console.log('you call me');
  }
}
