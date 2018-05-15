import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Init } from './initial-vendors';
//import {CookieService} from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _adminAPI = 'http://localhost:3000/admin';
  private isUserLoggedIn;
  
  constructor(private _http: HttpClient) {
    console.log('Initializing Vendors service ...');
    this.isUserLoggedIn = false;
  }

  getNextID(): number {
    const n: number = Number(localStorage.getItem('FoodCourt.nextID'));
    localStorage.setItem('FoodCourt.nextID', (n + 1).toString());
    return n;
  }
 
  getVendors(): any {
    return this._http.get(this._adminAPI + '/getVendors');
  }

  getVendor(id: any): any[] {
    console.log('id : ' + id);
    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));
    //console.log('vendor : ' + JSON.stringify(vendors));
    let vendor: any = null;
    for (let i = 0; i < vendors.length; i++) {
      if (vendors[i].ID === id) {
        vendor = vendors[i];
        break;
      }
    }
    console.log('vendor1 : ' + JSON.stringify(vendor));
    return vendor;
  }

  addVendor(newVendorDetails: any): void {
    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));
    const nextID: number = this.getNextID();
    console.log('NextID: ' + nextID);
    let newVendor = newVendorDetails;
    // console.log('New Vendor Details: ' + newVendor);
    newVendor = {
      ID: nextID,
      VendorName: newVendorDetails.VendorName,
      VendorPhone: newVendorDetails.VendorPhone,
      VendorEmail: newVendorDetails.VendorEmail,
      VendorLocation: newVendorDetails.VendorLocation,
      VendorOwner: newVendorDetails.VendorOwner,
      VendorPassword: newVendorDetails.VendorPassword
    };
    vendors.push(newVendor);
    localStorage.setItem('FoodCourt.vendors', JSON.stringify(vendors));
  }
  updateVendor(updatedVendor: any): void {
    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));
    for (let i = 0; i < vendors.length; i++) {
      if (vendors[i].ID === updatedVendor.ID) {
        vendors[i] = updatedVendor;
      }
    }
    localStorage.setItem('FoodCourt.vendors', JSON.stringify(vendors));
  // registerUser(user){
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this._http.post('http://localhost:3000/users/RegisterCustomer', user,{headers: headers})
  //   .map(res => res.json());
  // }
    return this.isUserLoggedIn;
  }

}
