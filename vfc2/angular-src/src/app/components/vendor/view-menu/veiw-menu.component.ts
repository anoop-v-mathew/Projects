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
  constructor(private _VendorSerice: VendorService, private _CookieServie: CookieService ) { }

  ngOnInit() {

    this.Email = this._CookieServie.get("username");
    this.Vendor = this._VendorSerice.getVendorbyEmail(this.Email);
    this.Menus = this._VendorSerice.getMenubyEmail(this.Email);

  }

//   $(function() {
//     $('div.flipcard').on('click', function(evt) {
//        $(this).toggleClass("flip");
//     });
// });



}
