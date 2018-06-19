import { Component, OnInit } from '@angular/core';
import{VendorService} from '../../../services/vendor.service';
import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-veiw-menu',
  templateUrl: './veiw-menu.component.html',
  styleUrls: ['./veiw-menu.component.scss']
})
export class VeiwMenuComponent implements OnInit {
  Menus: any[] = [];
  Vendor: any[] = [];
  Email: any;
  constructor(private _VendorSerice: VendorService,private _cookieService:CookieService) { }

  ngOnInit() {

    this.Email = this._cookieService.get("username");

    this._VendorSerice.getVendor(this.Email)
    .subscribe(vendor => {
      this.Vendor = vendor;
    })



  }

//   $(function() {
//     $('div.flipcard').on('click', function(evt) {
//        $(this).toggleClass("flip");
//     });
// });



}
