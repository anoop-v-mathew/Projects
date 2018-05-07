import { Component, OnInit } from '@angular/core';
import{VendorService} from '../../DataAndService/vendor.service';
import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-charges',
  templateUrl: './add-charges.component.html',
  styleUrls: ['./add-charges.component.scss']
})
export class AddChargesComponent implements OnInit {

  constructor(private _VendorSerice: VendorService, private _CookieServie: CookieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formValue: any){
    const newItem = {
     // ID: nextID,
    name: formValue.name,
    type: formValue.type,
    value: formValue.value,
    order: formValue.order,
    applicable: formValue.applicable

    };
     //this._AdminService.Additem(newItem, this.Email);
     this._VendorSerice.AddCharge(newItem);
     this.router.navigate(['charge'])
  }

}


// ID: 1,
//                 name: 'GST',
//                 type: 'Variable',
//                 value: 0.05,
//                 order: 99,
//                 applicable: ['all']