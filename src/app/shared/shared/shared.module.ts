import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
//import { MatInputModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[MatStepperModule,MatDatepickerModule,MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule, MatMomentDateModule,MatIconModule,MatChipsModule,
    
    //,MatInputModule,
    FormsModule,ReactiveFormsModule]
})
export class SharedModule { }
