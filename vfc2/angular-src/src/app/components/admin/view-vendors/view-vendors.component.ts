import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
// import {CookieService} from 'ngx-cookie-service';
//import { routing } from '../../app.routing';
//import { RouterModule, Routes } from '@angular/router';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-view-vendors',
  templateUrl: './view-vendors.component.html',
  styleUrls: ['./view-vendors.component.scss']
})
export class ViewVendorsComponent implements OnInit {

  Vendors: any[];
    login: any;
    constructor(private _AdminService: AdminService) { }

    ngOnInit() {
        this.Vendors = this._AdminService.getVendors();
        console.log(this.Vendors);
        // this.login = this._CookieServie.get('login');
        console.log(this._AdminService.getLogin());
        // console.log('loginCookie' + this._CookieServie.get('login'))
    }

    deleteVendor(vendorID: any) {

      console.log('ID to delete: ', vendorID);
      this._AdminService.deleteVendor(vendorID);
      console.log('Vendors:', this.Vendors)
      this.Vendors = this._AdminService.getVendors();
    }


    ViewSingleVendor(vendorID: any){
      this._AdminService.getVendor(vendorID);
    }

}
