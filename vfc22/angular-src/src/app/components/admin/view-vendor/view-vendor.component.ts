import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.scss']
})
export class ViewVendorComponent implements OnInit {

  id: any;
  Vendor: any[];
  //Menus: any[];
  constructor(private _AdminService: AdminService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
      console.log('ID' + this.id);

    });
    //console.log('ServiceMenu:' +this._AdminService.getMenu(this.id))
    //this.Vendor = this._AdminService.getVendor(this.id);
    console.log('Catolog:' +JSON.stringify(this.Vendor) );
  }

}
