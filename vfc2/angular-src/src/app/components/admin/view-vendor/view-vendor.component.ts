import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { AdminService } from '../../../services/admin.service';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.scss']
})
export class ViewVendorComponent implements OnInit {

  email: any;
  Vendor: any[];
  //Menus: any[];
  constructor(private _AdminService: AdminService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.email = params['email'];
      console.log('email:' + this.email);
    });

    this._AdminService.getVendor(this.email)
      .subscribe(vendor => {
        this.Vendor = vendor;
        console.log('Vendor: ' + JSON.stringify(vendor));
      }
      );
  }

}
