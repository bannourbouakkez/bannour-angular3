import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisponibiliteComponent } from './disponibilite/disponibilite.component';

const routes: Routes = [
  { path: 'disponibilite', component: DisponibiliteComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TuteurRoutingModule { }
