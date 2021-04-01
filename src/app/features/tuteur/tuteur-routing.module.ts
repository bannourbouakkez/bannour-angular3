import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSessionComponent } from './add-session/add-session.component';
import { DisponibiliteComponent } from './disponibilite/disponibilite.component';

const routes: Routes = [
  { path: 'disponibilite', component: DisponibiliteComponent },
  { path: 'addsession', component: AddSessionComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TuteurRoutingModule { }
