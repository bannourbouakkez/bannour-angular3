import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { TuteurService } from '../services/tuteur.service';

@Component({
  selector: 'app-tuteur-mes-sessions',
  templateUrl: './tuteur-mes-sessions.component.html',
  styleUrls: ['./tuteur-mes-sessions.component.scss']
})
export class TuteurMesSessionsComponent implements OnInit {

  sessions=[];
  constructor(private _tuteurService:TuteurService) { }

  ngOnInit(): void {
    this.getTuteurMesSessionsReserve();
  }

  getTuteurMesSessionsReserve(){
    this._tuteurService.getTuteurMesSessionsReserve().then(
      res => {
       console.log(res);
       this.sessions=res.sessions;
      });
  }

  deleteSession(SessionID:number,i:number) {
    this._tuteurService.deleteSession(SessionID).then(res => {
      if(res.success){
        this.sessions.splice(i, 1);
        //his.toastr.success(res.msg,'Success : ');
      }
    });
  }

  
  CalculerNbMinBetweenTwoDate2(date1: Date, date2: Date) {


    date1 = new Date(moment(date1).format("YYYY-MM-DDTHH:mm:00"));
    date2 = new Date(moment(date2).format("YYYY-MM-DDTHH:mm:00"));
    
    
    return (((date2.getTime() - date1.getTime()) / 1000) / 60);
    
    }
  

}
