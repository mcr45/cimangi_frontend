import { Routes } from '@angular/router';
import { TimelineComponent } from './main/timeline/timeline.component';
import { AuthenticationComponent } from './features/authentication/authentication.component';
import { PostlistComponent } from './main/postlist/postlist.component';
import { PostFormComponent } from './main/postlist/post-form/post-form.component';
import { PostAllComponent } from './main/postlist/post-all/post-all.component';
import { PostDetailComponent } from './main/postlist/post-detail/post-detail.component';
import { RecipelistComponent } from './main/recipelist/recipelist.component';
import { RecipeDetailComponent } from './main/recipelist/recipe-detail/recipe-detail.component';
export const routes: Routes = [
  {path:'',pathMatch:"full",
  loadComponent:()=>import('./features/authentication/authentication.component').then((a)=>a.AuthenticationComponent)
  },
  {path:'home',
loadComponent:()=>import('./main/timeline/timeline.component').then((c)=>c.TimelineComponent),children:[
 { path:'',loadComponent:()=>import('./main/postlist/postlist.component').then((d)=>d.PostlistComponent)
},{path:'post',loadComponent:()=>import('./main/postlist/post-form/post-form.component').then((e=>e.PostFormComponent))},
{path:'posts',loadComponent:()=>import('./main/postlist/post-all/post-all.component').then((l)=>l.PostAllComponent)},
{path:'posts/:id/info',loadComponent:()=>import('./main/postlist/post-detail/post-detail.component').then((dimmi)=>dimmi.PostDetailComponent)
  ,pathMatch:'full'},
  {path:'recipes',loadComponent:()=>import('./main/recipelist/recipelist.component').then((r)=>r.RecipelistComponent)},
  {path:'recipes/:id/info',loadComponent:()=>import('./main/recipelist/recipe-detail/recipe-detail.component').then((cook)=>cook.RecipeDetailComponent)}
]
}


];
