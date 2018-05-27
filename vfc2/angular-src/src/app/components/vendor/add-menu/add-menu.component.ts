import { Component, OnInit } from '@angular/core';
import{VendorService} from '../../../services/vendor.service';
//import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit {

  Menus: any[] = [];
  Vendor: any;
  Email: any;
  constructor(private _VendorSerice: VendorService,  private route: ActivatedRoute, private router: Router,
     private _cookieService:CookieService) { }

  ngOnInit() {
    
  }

  onSubmit(formValue: any){
    const categor = {
     
    name: formValue.name,
    items: []
    };
     
    this.Email = this._cookieService.get("username");

    this.Vendor = {

      categories : categor
    }

    this._VendorSerice.addcategories(this.Email, this.Vendor)
    .subscribe(data =>{
      if (data.success) {
        console.log(data.msg);
      }
      else {
        console.log(data.msg);
      }
    })

     this.router.navigate(['Menu'])
  }
  
}
