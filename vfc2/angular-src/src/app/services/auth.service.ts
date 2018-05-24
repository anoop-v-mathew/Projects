import { Injectable } from '@angular/core';
import { HttpModule, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }
  authToken: any
  user: any;
  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/RegisterCustomer', user,{headers: headers})
    .map(res => res.json());
  }

  login(user){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticateUser', user,{headers: headers})
    .map(res => res.json());

  }
}