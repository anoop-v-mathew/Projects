import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
//import { userInfo } from 'os';
// import { Init } from './initial-vendors';
//import {CookieService} from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _adminAPI = 'http://localhost:3000/admin';
  //private isUserLoggedIn;
  
  constructor(private _http: Http) {
    console.log('Initializing Vendors service ...');
    //this.isUserLoggedIn = false;
  }
  
  getVendors(): any {
    let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    return this._http.get(this._adminAPI + '/getVendors')
    .map(res => res.json());
  }

  AddVendor(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:3000/admin/addVendor', user,{headers: headers})
    .map(res => res.json());
  }

  UpdateVendor(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:3000/admin/UpdateVendor', user,{headers: headers})
    .map(res => res.json());
  }

  getVendor(email): any {
    let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    return this._http.get('http://localhost:3000/admin/getVendor/' + email)
    .map(res => res.json());
  }
}


// getVendor/:email