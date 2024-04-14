import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from '../../shared/models/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user!: User;
  constructor(private us: UserService) {}

  ngOnInit(): void {
    /* this.user = this.us.getUser(); */
   this.us.profileUser().subscribe((res)=>{this.user=res})
  }
}
