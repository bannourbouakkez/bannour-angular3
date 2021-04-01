import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';

import { ClientRoutingModule } from './client-routing.module';
import { ReservationComponent } from './reservation/reservation.component';


@NgModule({
  declarations: [ReservationComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule

  ]
})
export class ClientModule { }
