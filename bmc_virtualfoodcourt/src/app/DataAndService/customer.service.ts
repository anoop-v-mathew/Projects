import { Injectable } from '@angular/core';
import { Init } from './initial-vendors';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CustomerService extends Init{

  constructor(private _CookieServie: CookieService) {
    super();
    console.log('Initializing Vendors service ...');
    //this.isUserLoggedIn = false;
    this.load();
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

  getMenu(id: any) : any[]  {

    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));
    let Menu: any = null;
    for (let i = 0; i < vendors.length; i++) {
      if (vendors[i].ID === id) {
        Menu = vendors[i].categories;
        
        //console.log('Menu' + JSON.stringify(Menu));
        break;
      }
     
    }
    //console.log('ReturnMenu' + JSON.stringify(Menu));
    return Menu;
  }

  getVendors(): any[] {
    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));
    return vendors;
  }

}
