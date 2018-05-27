import { Component, OnInit } from '@angular/core';
import{VendorService} from '../../../services/vendor.service';
import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-veiw-charges',
  templateUrl: './view-charges.component.html',
  styleUrls: ['./view-charges.component.scss']
})
export class VeiwChargesComponent implements OnInit {

  Menus: any[] = [];
  Vendor: any[] = [];
  Email: any;
  constructor(private _VendorSerice: VendorService,private _cookieService:CookieService) { }


    ngOnInit() {
      this.Email = this._cookieService.get("username");

    this._VendorSerice.getVendor(this.Email)
    .subscribe(vendor => {
      this.Vendor = vendor;
      console.log('Vendor:' +JSON.stringify(this.Vendor));
    })
    }

}
