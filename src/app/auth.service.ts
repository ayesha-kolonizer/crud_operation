import { Injectable } from '@angular/core';
import { Users } from './users';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getAuthStatus() {
    throw new Error('Method not implemented.');
  }
  signIn: any;

  constructor(private http:HttpClient ) { }
  public signin(_userData:Users){
    localStorage.setItem('ACCESS_TOKEN',"access_token");
  }
  public Loggedin(){
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}

