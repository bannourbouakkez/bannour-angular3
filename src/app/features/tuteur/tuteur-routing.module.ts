import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSessionComponent } from './add-session/add-session.component';
import { AddPeriodeComponent } from './gerer-periode/add-periode/add-periode.component';
import { ListePeriodesComponent } from './gerer-periode/liste-periodes/liste-periodes.component';
import { TuteurMesSessionsComponent } from './tuteur-mes-sessions/tuteur-mes-sessions.component';

const routes: Routes = [
  { path: 'addsession', component: AddSessionComponent },
  //{ path: 'addperiode/:id', component: AddPeriodeComponent },
  { path: 'periodes', component: ListePeriodesComponent },
  { path: 'reserve', component: TuteurMesSessionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TuteurRoutingModule { }
