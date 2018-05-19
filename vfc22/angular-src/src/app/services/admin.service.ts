import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
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
    return this._http.get(this._adminAPI + '/getVendors')
    .map(res => res.json());
  }
 
}
