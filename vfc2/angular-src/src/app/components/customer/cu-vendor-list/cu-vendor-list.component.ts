import { Component, OnInit } from '@angular/core';
import{CustomerService} from '../../../services/customer.service';
//import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-cu-vendor-list',
  templateUrl: './cu-vendor-list.component.html',
  styleUrls: ['./cu-vendor-list.component.scss']
})
export class CuVendorListComponent implements OnInit {

  constructor(private _customer: CustomerService) { }
  Vendors: any[] = [];
  ngOnInit() {
    //this.Vendors = this._customer.getVendors();
    
  }

}
