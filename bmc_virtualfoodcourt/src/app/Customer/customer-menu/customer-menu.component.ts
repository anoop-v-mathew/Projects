import { Component, OnInit } from '@angular/core';
import{CustomerService} from '../../DataAndService/customer.service';
import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-customer-menu',
  templateUrl: './customer-menu.component.html',
  styleUrls: ['./customer-menu.component.scss']
})
export class CustomerMenuComponent implements OnInit {

  constructor(private _customer: CustomerService, private route: ActivatedRoute, private location: Location) { }
  id: any;
  Vendor: any[];
  Menus: any[];
  VendorName: any[];
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
      console.log('ID' + this.id);

    });
    //console.log('ServiceMenu:' +this._AdminService.getMenu(this.id))
    this.Vendor = this._customer.getVendor(this.id);
    //this.VendorName = this.Vendors[0].VendorName;
    //console.log('vendorName' + this.VendorName);
    this.Menus = this._customer.getMenu(this.id);
  }

}
