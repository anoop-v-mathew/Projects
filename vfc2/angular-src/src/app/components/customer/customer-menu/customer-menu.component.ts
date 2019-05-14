import { Component, OnInit } from '@angular/core';
import{CustomerService} from '../../../services/customer.service';


import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';
//import { ActivatedRoute, Params } from "@angular/router";
import { Location, DatePipe } from "@angular/common";
import { Router, ActivatedRoute, Params } from '@angular/router';

//var randomize = require("randomatic");

@Component({
  selector: 'app-customer-menu',
  templateUrl: './customer-menu.component.html',
  styleUrls: ['./customer-menu.component.scss']
})
export class CustomerMenuComponent implements OnInit {

  Menus: any[] = [];
  Vendor: any[] = [];
  Orders: any[];
  Email: any;
  VendorName: any;

  OrderedItems: any[] = [];

  CustomerEmail: any;
  constructor(private _CustomerService: CustomerService,private _cookieService:CookieService,
    private route: ActivatedRoute,
    private router: Router) { }
    
  ngOnInit() {

    this.route.params.subscribe(params => {
      this.Email = params['email'];
      console.log('email:' + this.Email);
    });

    this.CustomerEmail = this._cookieService.get("username");

    this._CustomerService.getVendor(this.Email)
    .subscribe(vendor => {
      this.Vendor = vendor;
      console.log('Vendor:' +JSON.stringify(this.Vendor));
    });

    //console.log('VendorName:' + this.Vendor.VendorName)
  }

  AddtoOrder(menuname,itemsname , price, currency, preparation_time, quantity){
    console.log(' '+ 'MenuName' + menuname + ' '+ 'ItemsName:'+ itemsname + ' '+ Date.now());

    
    const order = {
      itemName: itemsname,
      itemPrice: price,
      quantity: quantity,
      currency: currency,
      itemPrepTime: preparation_time
    };


    this.OrderedItems.push(order);

    console.log('OderedItem'+ JSON.stringify(this.OrderedItems));
    

  }

  AddtoCart(VendorName){
    const Finalorder = {
      customerEmail: this.CustomerEmail,
      orderForVendor: this.Email,
      vendorName: VendorName,
  //orderPlacedAt: Date(),
  orderStatus: 'Open',
  OrderedList: this.OrderedItems
    };

    this._CustomerService.AddOrder(Finalorder)
    .subscribe(data =>{
      if (data.success) {
            console.log(data.msg);
            this.router.navigate(['sCart']);
          }
          else {
            console.log(data.msg);
          }
    });
  }

}
