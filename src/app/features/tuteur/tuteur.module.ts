import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';

import { TuteurRoutingModule } from './tuteur-routing.module';
import { DisponibiliteComponent } from './disponibilite/disponibilite.component';
import { PickDatesComponent } from './pick-dates/pick-dates.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { SessionsComponent } from './sessions/sessions.component';
//import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DisponibiliteComponent, PickDatesComponent, AddSessionComponent, SessionsComponent],
  imports: [
    CommonModule,
    SharedModule,
    TuteurRoutingModule,
    //HttpClientModule,
    //HttpClient
  ]
})
export class TuteurModule { }
