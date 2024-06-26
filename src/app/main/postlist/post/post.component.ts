import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../../shared/models/post';
import { CommonModule, SlicePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../core/services/user.service';
import { EditComponent } from '../../../features/edit/edit.component';
import { AlertboxComponent } from '../../../features/alertbox/alertbox.component';
import { UpdateboxComponent } from '../../../features/updatebox/updatebox.component';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [SlicePipe, RouterLink,EditComponent,AlertboxComponent,UpdateboxComponent,CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  @Output () load:EventEmitter<Post[]>=new EventEmitter()
  user!:User
  posts!:Post[]
  post_author!:string

  constructor(private route: Router,private us:UserService,private ps:PostService) {}
  alert:boolean=false
  update:boolean=false
  liked:boolean=false

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
    this.update=false
  }
  reload($event:any){
    console.log($event)
    this.posts=$event
    this.load.emit(this.posts)
    this.alert=false
    this.update=false
  }

  showUpdate(){
    this.update=!this.update
  }

  Ilike(){
    this.ps.likePost(this.post.id!).subscribe({next:(res)=>{console.log(res),this.post=res},
    error:(err)=>{console.log(err,err.error),this.liked=true}})
  }

}
