import { Component, Input } from '@angular/core';
import { Post } from '../../../shared/models/post';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

@Input()post!:Post

}
