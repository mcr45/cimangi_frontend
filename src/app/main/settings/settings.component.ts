import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {

  user!:User

  constructor(private us:UserService){}

  ngOnInit(): void {
    this.us.profileUser().subscribe((res)=>{
      this.user=res
    })
  }

}
