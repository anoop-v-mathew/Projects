import { Component, OnInit } from '@angular/core';
import{VendorService} from '../../../services/vendor.service';
//import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-veiw-charges',
  templateUrl: './view-charges.component.html',
  styleUrls: ['./view-charges.component.scss']
})
export class VeiwChargesComponent implements OnInit {

  Vendor: any[] = [];
  Charges: any[] = [];
  Email: any;
    
    constructor(private _VendorSerice: VendorService) { }

    ngOnInit() {
      //this.Email = this._CookieServie.get("username");
      //this.Vendor = this._VendorSerice.getVendorbyEmail(this.Email);
      //this.Charges = this._VendorSerice.getChargebyEmail(this.Email);
      console.log();
        
        
    }

}
