import { Component } from '@angular/core';
import { Post } from '../../shared/models/post';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

posts:Post[]=[
  new Post({id:1,title:'the great gasby',body:'era un nerdone',created_at:'2023-01-04',author:{first_name:'Peppe',last_name:'Roncino',username:'redeiratti',id:1,email:'redeiratti@tento.com'}}),new Post({id:2,title:'the small gasby',body:'era un nerdone',created_at:'2023-02-05',author:{first_name:'John',last_name:'Doe',username:'nonloso',id:2,email:'caniegattieratti@tento.com'}})
]



}
