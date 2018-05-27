import { Injectable } from '@angular/core';
import { HttpModule, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _adminAPI = 'http://localhost:3000/admin';
  constructor(private _http: Http) { }

  ValidateRegister(user){
    if(user.userDisplayName == undefined || user.email == undefined|| user.password == undefined){
      return false;
      
    }
    else{
      return true;
    }
  }

  ValidateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  getVendors(): any {
    let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    return this._http.get(this._adminAPI + '/getVendors')
    .map(res => res.json());
  }

  getVendor(email): any {
    let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    return this._http.get('http://localhost:3000/admin/getVendor/' + email)
    .map(res => res.json());
  }

}
