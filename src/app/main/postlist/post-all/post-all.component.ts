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
  current_page: number = 1;
  total_pages: number = 0;
  constructor(private postserv: PostService) {}
  ngOnInit(): void {
    /*
    this.postserv.getPosts(this.current_page).subscribe({
      next: (res:any) => {console.log(res),
        (this.posts = res), this.current_page=res.current_page;this.total_pages=res.total_pages
      },
      error: (err) => {
        console.log(err);
        this.error = err.message;
      },
    }); */
    this.paginate(this.current_page);
  }

  paginate(page: number) {
    this.postserv.getPosts(this.current_page).subscribe({
      next: (res: any) => {
        console.log(res),
          (this.posts = res.posts),
          (this.current_page = res.current_page);
        this.total_pages = res.total_pages;
      },
      error: (err) => {
        console.log(err);
        this.error = err.message;
      },
    });
  }
  nextPage() {
    if (this.current_page < this.total_pages) {
      this.current_page = this.current_page + 1;
      this.paginate(this.current_page);
    }
  }
  previousPage() {
    if (this.current_page > 1) {
      this.current_page = this.current_page - 1;
      this.paginate(this.current_page);
    }
  }

  onLoad($event: any) {
    this.posts = $event;
    console.log(`dalle 45 ${$event}`);
  }
}
