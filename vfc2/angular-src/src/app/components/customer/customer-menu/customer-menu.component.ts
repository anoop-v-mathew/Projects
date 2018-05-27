import { Component, OnInit } from '@angular/core';
import{CustomerService} from '../../../services/customer.service';
import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';
//import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-customer-menu',
  templateUrl: './customer-menu.component.html',
  styleUrls: ['./customer-menu.component.scss']
})
export class CustomerMenuComponent implements OnInit {

  Menus: any[] = [];
  Vendor: any[] = [];
  Email: any;
  constructor(private _CustomerService: CustomerService,private _cookieService:CookieService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.Email = params['email'];
      console.log('email:' + this.Email);
    });

    //this.Email = this._cookieService.get("username");

    this._CustomerService.getVendor(this.Email)
    .subscribe(vendor => {
      this.Vendor = vendor;
      console.log('Vendor:' +JSON.stringify(this.Vendor));
    })

  }

}
