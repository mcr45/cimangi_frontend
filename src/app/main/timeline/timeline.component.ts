import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post';
import { PostService } from '../../core/services/post.service';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent implements OnInit {
  /* posts:Post[]=[
  new Post({id:1,title:'the great gasby',body:'era un nerdone',created_at:'2023-01-04',author:{first_name:'Peppe',last_name:'Roncino',username:'redeiratti',id:1,email:'redeiratti@tento.com'}}),new Post({id:2,title:'the small gasby',body:'era un nerdone',created_at:'2023-02-05',author:{first_name:'John',last_name:'Doe',username:'nonloso',id:2,email:'caniegattieratti@tento.com'}})
] */
  posts: Post[] = [];
  constructor(
    private ps: PostService,
    private routex: ActivatedRoute,
    private route: Router
  ) {}
  errMsg: String = '';
  head: string = '';
  ngOnInit(): void {
    /*  this.ps.getPosts().subscribe({next:(res)=>{this.posts=res},error:(err)=>{this.errMsg=err,console.log(err)}})
  this.route.queryParams.subscribe((res)=>console.log(res)) */
    this.route.events.subscribe((event: any) => {
      event instanceof NavigationEnd ? (this.head = event.url) : null;
    });
  }
}
