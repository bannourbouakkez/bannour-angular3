import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { DialogDateService } from '../dialog-date.service';
import { TuteurService } from '../../services/tuteur.service';
import { isMoment } from 'moment';


@Component({
  selector: 'app-dialog-date-session',
  templateUrl: './dialog-date-session.component.html',
  styleUrls: ['./dialog-date-session.component.scss']
})
export class DialogDateSessionComponent  implements OnInit {

  formData;
  itemList=<any>[];
  isValid: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DialogDateSessionComponent>,
    private _sessionService: TuteurService,
    private _dateService: DialogDateService) { }

  ngOnInit() {
    this._sessionService.getSessionsByDateID(this.data.DateID).then(res => this.itemList = res);
    if (this.data.dateSessionIndex == null)
      this.formData = {
        SessionID: 0,
        date_id: this.data.DateID,
        timeStart:null,
        timeEnd:null
      }
    else
      this.formData = Object.assign({}, this._dateService.datesessions[this.data.dateSessionIndex]);
  }

  onSubmit(form: NgForm) {

    //console.log(this.validateForm(form.value));
    
    if (this.validateForm(form.value)) {
      if (this.data.dateSessionIndex == null){
        this._dateService.addSession(this.data.DateID,form.value).then(res => {
          console.log(res);
          if(res.success){
          this._dateService.datesessions.push(res.session);
          }else{
            console.log('');
          }
        }); 
      }
      else{        
        this._dateService.editSession(this.formData.SessionID,form.value).then(res => {
          if(res.success){
          this._dateService.datesessions[this.data.dateSessionIndex] = res.session;
          }else{
            console.log('');
          }
        }); 
      }

      this.dialogRef.close();
    }
    
  }

  validateForm(formData) {
    /*
    this.isValid = true;
    console.log(formData);
    if (formData.SessionID == 0)
      this.isValid = false;
    return this.isValid;
    */
   return true;
  }

  reglageTemps(datetime:any){
    return datetime.getTime();
  }


}