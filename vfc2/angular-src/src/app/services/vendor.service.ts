import { Injectable } from '@angular/core';
import { HttpModule, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private _http: Http) { }

  getVendor(email): any {
    let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    return this._http.get('http://localhost:3000/admin/getVendor/' + email)
    .map(res => res.json());
  }

  addcategories(email, Menu){
    let headers = new Headers();
    return this._http.put('http://localhost:3000/admin/Addcategories/' + email, Menu, {headers: headers})
    .map(res => res.json());
  }

  addMenuItem(email, category) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put(
      'http://localhost:3000/admin/AddMenuItem/' + email, category, { headers: headers }
    ).map(res => res.json());
  }

  addCharge(email, Menu){
    let headers = new Headers();
    return this._http.put('http://localhost:3000/admin/Addcharge/' + email, Menu, {headers: headers})
    .map(res => res.json());
  }

  UpdateMenuItem(email, Menu){
    let headers = new Headers();
    console.log('inside service')
    return this._http.put('http://localhost:3000/admin/UpdateItem/' + email, Menu, {headers: headers})
    .map(res => res.json());
  }

  UpdateCharge(email, Menu){
    let headers = new Headers();
    return this._http.put('http://localhost:3000/admin/Updatecharge/' + email, Menu, {headers: headers})
    .map(res => res.json());
  }

}

