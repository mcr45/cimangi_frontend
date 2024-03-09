import { Routes } from '@angular/router';
import { TimelineComponent } from './main/timeline/timeline.component';
import { AuthenticationComponent } from './features/authentication/authentication.component';
import { PostlistComponent } from './main/postlist/postlist.component';

export const routes: Routes = [
  {path:'',pathMatch:"full",
  loadComponent:()=>import('./features/authentication/authentication.component').then((a)=>a.AuthenticationComponent)
  },
  {path:'home',
loadComponent:()=>import('./main/timeline/timeline.component').then((c)=>c.TimelineComponent),children:[
 { path:'',loadComponent:()=>import('./main/postlist/postlist.component').then((d)=>d.PostlistComponent)
}]
}


];
