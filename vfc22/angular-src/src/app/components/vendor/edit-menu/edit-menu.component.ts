import { Component, OnInit } from '@angular/core';
import{VendorService} from '../../../services/vendor.service';
//import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss']
})
export class EditMenuComponent implements OnInit {

  constructor(private _VendorSerice: VendorService, private route: ActivatedRoute, private router: Router) { }
  Vendor: any;
  MenuID: any;
  ItemID: any;
  email: any;
  Menus: any[] = [];
  Item: any;
  ngOnInit() : void {

    this.route.params.forEach((params: Params) => {
      this.MenuID = +params['id'];
      console.log('Fparam:' + this.MenuID);
      this.ItemID = +params['id2'];
      console.log('Sparam:' + this.ItemID)
  });
  //this.email = this._CookieServie.get('username');
  //this.Vendor = this._VendorSerice.getVendorbyEmail(this.email);
  //this.Menus = this._VendorSerice.getMenubyEmail(this.email);

  for(let i = 0; i < this.Menus.length; i ++){
    if(this.Menus[i].ID == this.MenuID){
      for(let j = 0; j < this.Menus[i].items.length; j ++){
        if(this.Menus[i].items[j].ID == this.ItemID){
          this.Item = this.Menus[i].items[j];
          console.log('Item:'+ JSON.stringify(this.Item));
        }
      }
    }
  }
  }

  onSubmit(formValue: any){
    for(let i = 0; i < this.Menus.length; i ++){
      if(this.Menus[i].ID == this.MenuID){
        for(let j = 0; j < this.Menus[i].items.length; j ++){
          if(this.Menus[i].items[j].ID == this.ItemID){
            this.Vendor.categories[i].items[j].name = formValue.name;
            this.Vendor.categories[i].items[j].price = formValue.price;
            this.Vendor.categories[i].items[j].currency = formValue.currency;
            this.Vendor.categories[i].items[j].preparation_time = formValue.preparation_time;


            //this._VendorSerice.updateChange(this.Vendor);
            this.router.navigate(['Menu']);
          }
        }
      }
    }
    }


}

// ID: 1,
// name: 'Bread Omlette',
// price: 18.00,
// currency: 'INR',
// preparation_time: '4'