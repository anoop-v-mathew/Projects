import { Injectable } from '@angular/core';
import { Init } from './initial-vendors';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class VendorService extends Init {
  private isUserLoggedIn;
  constructor(private _CookieServie: CookieService) {
    super();
    console.log('Initializing Vendors service ...');
    this.isUserLoggedIn = false;
    this.load();
  }


  getMenubyEmail(Email: any): any[] {
    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));
    let Menu: any = null;
    for (let i = 0; i < vendors.length; i++) {
      if (vendors[i].VendorEmail === Email) {
        Menu = vendors[i].categories;

        //console.log('Menu' + JSON.stringify(Menu));
        break;
      }

    }
    //console.log('ReturnMenu' + JSON.stringify(Menu));
    return Menu;
  }

  getChargebyEmail(Email: any): any[] {
    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));
    let charges: any = null;
    for (let i = 0; i < vendors.length; i++) {
      if (vendors[i].VendorEmail === Email) {
        charges = vendors[i].charges;

        console.log('Menu' + JSON.stringify(charges));
        break;
      }

    }
    //console.log('ReturnMenu' + JSON.stringify(Menu));
    return charges;
  }

  getVendorbyEmail(Email: any): any[] {
    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));
    //console.log('vendor : ' + JSON.stringify(vendors));
    let vendor: any = null;
    for (let i = 0; i < vendors.length; i++) {
      // console.log('ChargeName:'+ vendors[i].charges[i].name);
      console.log('ChargeName:' + vendors[i].charges.length);
      if (vendors[i].VendorEmail === Email) {
        vendor = vendors[i];
        break;
      }
    }
    console.log('vendor1 : ' + JSON.stringify(vendor));
    return vendor;
  }
  nextItemID(ID: any): number{
    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));
    let vendor: any = null;
    let nextID: any = null;
    let Email = this._CookieServie.get('username');
    for(let i = 0 ; i < vendors.length; i++){
      if(vendors[i].VendorEmail === Email){
        for(let j = 0 ; j < vendors[i].categories.length; j++){
          if(vendors[i].categories[j].ID == ID){

            
              nextID = vendors[i].categories[j].items.length + 1;
            
            
            
          }
        }
        
      }
    }
    return nextID;
  }
  AddItem(NewItemDetails: any, ID: any):void{

    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));
    const nextID : number = this.nextItemID(ID);
    let newItem = NewItemDetails;
    let Item: any;
    let Email = this._CookieServie.get('username');
    newItem = {
      ID: nextID,
      name: NewItemDetails.name,
      price: NewItemDetails.price,
      currency: NewItemDetails.currency,
      preparation_time: NewItemDetails.preparation_time
    }

    for(let i = 0 ; i < vendors.length; i++){
      if(vendors[i].VendorEmail === Email){
        for(let j = 0 ; j < vendors[i].categories.length; j++){
          if(vendors[i].categories[j].ID == ID){

            vendors[i].categories[j].items.push(newItem)
            console.log('WithItem:' + JSON.stringify(vendors));
          }
        }
        
      }
    }
    localStorage.setItem('FoodCourt.vendors', JSON.stringify(vendors));
  }

  nextCatID(): number{
    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));
    let vendor: any = null;
    let nextID: any = null;
    let Email = this._CookieServie.get('username');
    for(let i = 0 ; i < vendors.length; i++){
      if(vendors[i].VendorEmail === Email){
        nextID = vendors[i].categories.length + 1;
      }
    }
    return nextID;
  }

  AddICatg(NewItemDetails: any):void{

    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));
    const nextID : number = this.nextCatID()
    let newItem = NewItemDetails;
    let Item: any;
    let Email = this._CookieServie.get('username');
    newItem = {
      ID: nextID,
      name: NewItemDetails.name,
      items: []

    }

    for(let i = 0 ; i < vendors.length; i++){
      if(vendors[i].VendorEmail === Email){

        vendors[i].categories.push(newItem)
        console.log('WithItem:' + JSON.stringify(vendors));
      }
    }
    localStorage.setItem('FoodCourt.vendors', JSON.stringify(vendors));
  }

  nextCharge(){
    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));
    let vendor: any = null;
    let nextID: any = null;
    let Email = this._CookieServie.get('username');
    for(let i = 0 ; i < vendors.length; i++){
      if(vendors[i].VendorEmail === Email){
        nextID = vendors[i].charges.length + 1;
      }
    }
    return nextID;
  }

  AddCharge(NewItemDetails: any):void{

    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));
    const nextID : number = this.nextCharge()
    let newItem = NewItemDetails;
    let Item: any;
    let Email = this._CookieServie.get('username');
    newItem = {
      ID: nextID,
      name: NewItemDetails.name,
      type: NewItemDetails.type,
      value: NewItemDetails.value,
      order: NewItemDetails.order,
      applicable: NewItemDetails.applicable

    }

    for(let i = 0 ; i < vendors.length; i++){
      if(vendors[i].VendorEmail === Email){

        vendors[i].charges.push(newItem)
        console.log('WithItem:' + JSON.stringify(vendors));
      }
    }
    localStorage.setItem('FoodCourt.vendors', JSON.stringify(vendors));
  }
  updateChange(updateCharge: any): void {
    const vendors = JSON.parse(localStorage.getItem('FoodCourt.vendors'));
    const Email = this._CookieServie.get('username');

    for (let i = 0; i < vendors.length; i++) {
      if (vendors[i].VendorEmail == Email) {
        vendors[i] = updateCharge;
      }
    }
    localStorage.setItem('FoodCourt.vendors', JSON.stringify(vendors));
  }
}
