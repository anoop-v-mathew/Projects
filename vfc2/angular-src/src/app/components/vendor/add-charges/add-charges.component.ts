import { Component, OnInit } from '@angular/core';
import{VendorService} from '../../../services/vendor.service';
import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-charges',
  templateUrl: './add-charges.component.html',
  styleUrls: ['./add-charges.component.scss']
})
export class AddChargesComponent implements OnInit {

  Email: any;
  Vendor:any;
  constructor(private _VendorSerice: VendorService, private route: ActivatedRoute, private router: Router, private _cookieService:CookieService ) { }

  ngOnInit() {
  }

  onSubmit(formValue: any){
    this.Email = this._cookieService.get("username");
    const newItem = {
     // ID: nextID,
    name: formValue.name,
    type: formValue.type,
    value: formValue.value,
    order: formValue.order,
    applicable: formValue.applicable

    };
    this.Vendor = {

      charges : newItem
    }

    this._VendorSerice.addCharge(this.Email, this.Vendor)
    .subscribe(data =>{
      if (data.success) {
        console.log(data.msg);
      }
      else {
        console.log(data.msg);
      }
    })

     
     this.router.navigate(['charge'])


  }

}


// ID: 1,
//                 name: 'GST',
//                 type: 'Variable',
//                 value: 0.05,
//                 order: 99,
//                 applicable: ['all']