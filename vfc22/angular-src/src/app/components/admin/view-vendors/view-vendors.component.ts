import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
// import {CookieService} from 'ngx-cookie-service';
//import { routing } from '../../app.routing';
//import { RouterModule, Routes } from '@angular/router';
//import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-view-vendors',
  templateUrl: './view-vendors.component.html',
  styleUrls: ['./view-vendors.component.scss']
})
export class ViewVendorsComponent implements OnInit {

  vendors: any[];
    // login: any;
    constructor(private _AdminService: AdminService) { }

    ngOnInit() {
      this._AdminService.getVendors()
      .subscribe(vendors => {
          this.vendors = vendors
        
        }
      );
      
        this.vendors = this._AdminService.getVendors();
        console.log('VendorList:' + JSON.stringify(this.vendors));
        //console.log(this._AdminService.getLogin());
    }
/*
    deleteVendor(vendorID: any) {

      console.log('ID to delete: ', vendorID);
      this._AdminService.deleteVendor(vendorID);
      console.log('Vendors:', this.vendors)
      this.vendors = this._AdminService.getVendors();
    }


    ViewSingleVendor(vendorID: any){
      this._AdminService.getVendor(vendorID);
    }
*/
}
