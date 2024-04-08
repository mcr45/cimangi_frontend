import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../../shared/models/post';
import { SlicePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../core/services/user.service';
import { EditComponent } from '../../../features/edit/edit.component';
import { AlertboxComponent } from '../../../features/alertbox/alertbox.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [SlicePipe, RouterLink,EditComponent,AlertboxComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  @Output () load:EventEmitter<Post[]>=new EventEmitter()
  user!:User
  posts!:Post[]


  constructor(private route: Router,private us:UserService) {}
  alert:boolean=false
  ngOnInit(): void {
      this.user=this.us.getUser()
  }

  onPostInfo() {
    this.route.navigate([`home/posts/${this.post.id}/info`]);

    console.log('you call me');
  }

  showMe(){
    this.alert=!this.alert
    console.log('ci sonononono')
  }
  closeMe(){
    this.alert=false
  }
  reload($event:any){
    console.log($event)
    this.posts=$event
    this.load.emit(this.posts)
    this.alert=false
    /* this.route.navigate(['home/posts']) */

  }

}
