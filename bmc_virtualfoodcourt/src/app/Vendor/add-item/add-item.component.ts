import { Component, OnInit } from '@angular/core';
import{VendorService} from '../../DataAndService/vendor.service';
import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor(private _VendorSerice: VendorService, private _CookieServie: CookieService, private route: ActivatedRoute, private router: Router) { }
 MenuID: any;
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.MenuID = +params['id'];
      this._VendorSerice.nextItemID(this.MenuID);
    });
  }

  onSubmit(formValue: any){
    const newItem = {
     // ID: nextID,
    name: formValue.name,
    price: formValue.price,
    currency: formValue.currency,
    preparation_time: formValue.preparationtime
    };
     //this._AdminService.Additem(newItem, this.Email);
     this._VendorSerice.AddItem(newItem, this.MenuID);
     this.router.navigate(['Menu'])
  }
}
