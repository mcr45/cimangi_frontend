import { Routes } from '@angular/router';
import { TimelineComponent } from './main/timeline/timeline.component';

export const routes: Routes = [
{path:'',pathMatch:"full",
loadComponent:()=>import('./main/timeline/timeline.component').then((c)=>c.TimelineComponent)
}


];
