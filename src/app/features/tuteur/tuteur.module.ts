import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuteurRoutingModule } from './tuteur-routing.module';
import { DisponibiliteComponent } from './disponibilite/disponibilite.component';


@NgModule({
  declarations: [DisponibiliteComponent],
  imports: [
    CommonModule,
    TuteurRoutingModule
  ]
})
export class TuteurModule { }
