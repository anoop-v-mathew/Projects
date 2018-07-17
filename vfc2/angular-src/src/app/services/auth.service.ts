import { Injectable } from '@angular/core';
import { HttpModule, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class AuthService {

  constructor(private http: Http, private _cookieService:CookieService) { }
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

  getVendor(email): any {
    let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/user/getUser' + email)
    .map(res => res.json());
  }
}
