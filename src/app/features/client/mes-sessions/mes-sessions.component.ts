import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-mes-sessions',
  templateUrl: './mes-sessions.component.html',
  styleUrls: ['./mes-sessions.component.scss']
})
export class MesSessionsComponent implements OnInit {

  sessions=[];
  constructor(private _clientService:ClientService) { }

  ngOnInit(): void {
    this.getMesSessionsReserve();
  }

  getMesSessionsReserve(){
    this._clientService.getMesSessionsReserve().then(
      res => {
       console.log(res);
       this.sessions=res.sessions;
      });
  }

  
  reserver(i:number,SessionID:number){
    this._clientService.reserver(SessionID).then(res => {
      if(res.success){
        this.sessions[i].isReserved=1;
      }
    });
  }

  annulerReservation(i:number,SessionID:number){
    this._clientService.annulerReservation(SessionID).then(res => {
      
      if(res.success){
        this.sessions[i].isReserved=0;
      }
    });
  }
  

}
