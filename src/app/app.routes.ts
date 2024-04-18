import { Routes } from '@angular/router';
import { TimelineComponent } from './main/timeline/timeline.component';
import { AuthenticationComponent } from './features/authentication/authentication.component';
import { PostlistComponent } from './main/postlist/postlist.component';
import { PostFormComponent } from './main/postlist/post-form/post-form.component';
import { PostAllComponent } from './main/postlist/post-all/post-all.component';
import { PostDetailComponent } from './main/postlist/post-detail/post-detail.component';
import { RecipelistComponent } from './main/recipelist/recipelist.component';
import { RecipeDetailComponent } from './main/recipelist/recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from './main/recipelist/recipe-form/recipe-form.component';
import { ForumComponent } from './main/timeline/forum/forum.component';
import { SettingsComponent } from './main/settings/settings.component';
import { authGuard } from './auth.guard';
import { nonAuthGuard } from './non-auth.guard';
import { gohomeGuard } from './gohome.guard';

export const routes: Routes = [

  {path:'',pathMatch:"full",
  loadComponent:()=>import('./features/authentication/authentication.component').then((a)=>a.AuthenticationComponent),canActivate:[nonAuthGuard]
  },{path:'login',redirectTo:''},
  {path:'settings',component:SettingsComponent/* loadComponent:()=>import('./main/settings/settings.component').then((c)=>c.SettingsComponent) */,canActivate:[authGuard]}
  ,
  {path:'home',component:TimelineComponent
/* loadComponent:()=>import('./main/timeline/timeline.component').then((c)=>c.TimelineComponent) */,canActivate:[authGuard],children:[
  {path:'',component:ForumComponent/* loadComponent:()=>import('./main/timeline/forum/forum.component').then((ff)=>ff.ForumComponent) */},
 /* { path:'',loadComponent:()=>import('./main/postlist/postlist.component').then((d)=>d.PostlistComponent)
}, */{path:'post',component:PostFormComponent/* loadComponent:()=>import('./main/postlist/post-form/post-form.component').then((e=>e.PostFormComponent)) */},
{path:'posts',component:PostAllComponent/* loadComponent:()=>import('./main/postlist/post-all/post-all.component').then((l)=>l.PostAllComponent) */},
{path:'posts/:id/info',component:PostDetailComponent/* loadComponent:()=>import('./main/postlist/post-detail/post-detail.component').then((dimmi)=>dimmi.PostDetailComponent )*/
  ,pathMatch:'full'}, {path:'recipes',component:RecipelistComponent},
  {path:'recipe',component:RecipeFormComponent/* loadComponent:()=>import('./main/recipelist/recipe-form/recipe-form.component').then((pappa)=>pappa.RecipeFormComponent) */},
  /* {path:'recipes',loadComponent:()=>import('./main/recipelist/recipelist.component').then((r)=>r.RecipelistComponent)}, */

  {path:'recipes/:id/info',component:RecipeDetailComponent/* loadComponent:()=>import('./main/recipelist/recipe-detail/recipe-detail.component').then((cook)=>cook.RecipeDetailComponent) */}
]
}


];
