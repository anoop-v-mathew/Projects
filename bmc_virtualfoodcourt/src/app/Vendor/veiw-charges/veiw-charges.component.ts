import { Component, OnInit } from '@angular/core';
import{VendorService} from '../../DataAndService/vendor.service';
import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-veiw-charges',
  templateUrl: './veiw-charges.component.html',
  styleUrls: ['./veiw-charges.component.scss']
})
export class VeiwChargesComponent implements OnInit {

  Vendor: any[] = [];
  Charges: any[] = [];
  Email: any;
    
    constructor(private _VendorSerice: VendorService, private _CookieServie: CookieService) { }

    ngOnInit() {
      this.Email = this._CookieServie.get("username");
      this.Vendor = this._VendorSerice.getVendorbyEmail(this.Email);
      this.Charges = this._VendorSerice.getChargebyEmail(this.Email);
      console.log();
        
        
    }

}
