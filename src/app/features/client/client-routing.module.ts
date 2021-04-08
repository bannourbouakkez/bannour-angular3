import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesSessionsComponent } from './mes-sessions/mes-sessions.component';
import { ReserverSessionComponent } from './reserver-session/reserver-session.component';

const routes: Routes = [
  { path: 'reservation', component: ReserverSessionComponent },
  { path: 'messessions', component: MesSessionsComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
