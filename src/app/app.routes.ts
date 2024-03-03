import { Routes } from '@angular/router';
import { TimelineComponent } from './main/timeline/timeline.component';
import { AuthenticationComponent } from './features/authentication/authentication.component';

export const routes: Routes = [
  {path:'',pathMatch:"full",
  loadComponent:()=>import('./features/authentication/authentication.component').then((a)=>a.AuthenticationComponent)
  },
  {path:'',
loadComponent:()=>import('./main/timeline/timeline.component').then((c)=>c.TimelineComponent)
}


];
