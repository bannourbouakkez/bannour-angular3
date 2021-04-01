import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient,  private _router: Router ) { }
 
  loginUser(user:any) {
    return this.http.post<any>(environment.apiUrl+'/auth/login', user);
  }

  logoutUser() {
    console.log('logout function detected');
    localStorage.removeItem('token');
    this._router.navigate(['/auth/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }


}
