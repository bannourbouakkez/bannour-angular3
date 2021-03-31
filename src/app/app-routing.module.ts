import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 // {path: 'auth', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  {path: 'tuteur', loadChildren: () => import('./features/tuteur/tuteur.module').then(m => m.TuteurModule) },
  {path: 'client', loadChildren: () => import('./features/client/client.module').then(m => m.ClientModule) },
  //{path: 'home', component: HomeComponent},
  //{ path: '', component:HomeComponent}
 //,{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
