import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reservation';
  constructor(private _authService:AuthService){}
  logoutUser(){
  this._authService.logoutUser();
  }
}
