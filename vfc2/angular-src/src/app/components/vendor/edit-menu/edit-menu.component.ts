import { Component, OnInit } from '@angular/core';
import{VendorService} from '../../../services/vendor.service';
import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss']
})
export class EditMenuComponent implements OnInit {

  constructor(private _VendorService: VendorService, private route: ActivatedRoute, private router: Router, private _cookieService:CookieService) { }
  Vendor: any;
  Catname: any;
  name: any;
  Itemname: any;
  Email: any;
  Menus: any;
  Item: any;
  ngOnInit() : void {

  this.Email = this._cookieService.get('username');

  this.route.params.subscribe(params => {
    this.Catname = params['name'];
    this.Itemname = params['name2'];

  });

  this._VendorService.getVendor(this.Email)
    .subscribe( vendor => {
      this.Vendor = vendor;

      for(let i = 0; i < this.Vendor.categories.length; i ++) {
        if(this.Vendor.categories[i].name == this.Catname) {
          for(let j = 0; j < this.Vendor.categories[i].items.length; j ++) {
            if(this.Vendor.categories[i].items[j].name == this.Itemname) {
              this.Item = this.Vendor.categories[i].items[j];
            }
          }
        }
      }
    })
  }

  onSubmit(formValue: any){

    this.Email = this._cookieService.get("username");

    for(let i = 0; i < this.Vendor.categories.length; i ++){

      if(this.Vendor.categories[i].name == this.Catname){
        for(let j = 0; j < this.Vendor.categories[i].items.length; j ++){
          if(this.Vendor.categories[i].items[j].name == this.Itemname){

            this.Vendor.categories[i].items[j].name = formValue.name;
            this.Vendor.categories[i].items[j].price = formValue.price;
            this.Vendor.categories[i].items[j].currency = formValue.currency;
            this.Vendor.categories[i].items[j].preparation_time = formValue.preparation_time;
            this._VendorService.UpdateMenuItem(this.Email, this.Vendor)
            .subscribe(data =>{
              if(data.success){
                console.log(data.msg);
                this.router.navigate(['Menu'])
              }
              else{
                console.log(data.msg);
              }
            })


          }
        }
      }
    }


  }



}
