import { Component, OnInit } from '@angular/core';
import{VendorService} from '../../../services/vendor.service';
import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor(private _VendorSerice: VendorService, private route: ActivatedRoute, private router: Router, private _cookieService:CookieService) { }
 MenuID: any;
 Vendor: any;
 Email: any;
 name: any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      console.log('name:' + this.name);
    });
  }

  onSubmit(formValue: any){

    this.Email = this._cookieService.get("username");

    const newItem = {
    name: formValue.Name,
    price: formValue.price,
    currency: formValue.currency,
    preparation_time: formValue.preparationtime
    };
    const categor = {
     
      name: this.name,
      items: newItem
      };

      this.Vendor = {

        categories : categor
      }

      this._VendorSerice.addMenuItem(this.Email, this.Vendor)
    .subscribe(data =>{
      if (data.success) {
        console.log(data.msg);
      }
      else {
        console.log(data.msg);
      }
    })

     this.router.navigate(['Menu'])

      
     //this._AdminService.Additem(newItem, this.Email);
     //this._VendorSerice.AddItem(newItem, this.MenuID);
     this.router.navigate(['Menu'])
  }
}
// addMenuItem