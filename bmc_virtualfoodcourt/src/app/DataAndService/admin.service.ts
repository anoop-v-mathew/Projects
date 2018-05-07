import { Injectable } from '@angular/core';
import { Init } from './initial-vendors';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';


@Injectable()
export class AdminService extends Init{

  private isUserLoggedIn;
  constructor(private _CookieServie: CookieService) {
    super();
    console.log('Initializing Vendors service ...');
    this.isUserLoggedIn = false;
    this.load();
  }

  getNextID(): number {
    const n: number = Number(localStorage.getItem('FoodCourt.nextID'));
    localStorage.setItem('FoodCourt.nextID', (n + 1).toString());
    return n;
  }
 
  getVendors(): any[] {
    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));
    return vendors;
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
  }

  deleteVendor(id: any) {

    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));

    for (let i = 0; i < vendors.length; i++) {
      if (vendors[i].ID == id) {
        vendors.splice(i, 1);
      }
    }
    localStorage.setItem('FoodCourt.vendors', JSON.stringify(vendors));
  }

  CheckVendor(UserName: string, password: string): boolean{

    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));
    let Menu: any = null;
    for(let i = 0; i< vendors.length; i++){
      
      //console.log('vendors : ' + JSON.stringify(vendors));
      if((vendors[i].VendorEmail === UserName) && (vendors[i].VendorPassword  === password)){
        
        console.log('UserName:'+ vendors[i].VendorEmail);

        this.isUserLoggedIn = true;
        console.log('Login' + this.isUserLoggedIn);
      }
    }
    return this.isUserLoggedIn;
  }

  setLogin(){
    this.isUserLoggedIn = true;
  }
  getLogin(){
    // let login: any = this.isUserLoggedIn;
    // this._CookieServie.set('login', login );
    return this.isUserLoggedIn;
  }

}
