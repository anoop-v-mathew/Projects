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
    })

  }

  AddtoCart(menuname,itemsname , price, currency, preparation_time, quantity){
    console.log(' '+ 'MenuName' + menuname + ' '+ 'ItemsName:'+ itemsname + ' '+ Date.now());

    
    const order = {
      name: itemsname,
      //sku: randomstring.generate(7),
      price: price,
      currency: currency,
      quantity: quantity,
      itemPreparationTime: preparation_time
    };

    const Finalorder = {
      customerEmail: this.CustomerEmail,
      orderForVendor: this.Email,
      //orderPlacedAt: Date(),
      orderStatus: 'Open',
      OrderedList: order
        
    };
    this._CustomerService.AddOrder(Finalorder)
    .subscribe(data =>{
      if (data.success) {
        console.log(data.msg);
      }
      else {
        console.log(data.msg);
      }
    })

  }
}
