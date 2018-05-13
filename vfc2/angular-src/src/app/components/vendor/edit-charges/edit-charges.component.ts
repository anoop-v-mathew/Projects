import { Component, OnInit } from '@angular/core';
import{VendorService} from '../../../services/vendor.service';
import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit-charges',
  templateUrl: './edit-charges.component.html',
  styleUrls: ['./edit-charges.component.scss']
})
export class EditChargesComponent implements OnInit {

  constructor(private _VendorSerice: VendorService, private _CookieServie: CookieService, private route: ActivatedRoute, private router: Router) {

   }

   Vendor: any;
  ID: any;
  email: any;
  Charges: any[] = [];
  charge: any;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
        this.ID = +params['id'];
    });
    this.email = this._CookieServie.get('username')
    console.log(this.ID);
    this.Vendor = this._VendorSerice.getVendorbyEmail(this.email);
    this.Charges = this._VendorSerice.getChargebyEmail(this.email);
    console.log('test:' + this.Charges.length);

    for(let i = 0 ; i < this.Charges.length; i ++){
      console.log('test:' + this.Charges.length);
      if(this.ID === this.Vendor.charges[i].ID){
        console.log('testing:' + this.Vendor.charges[i].name);
        this.charge = this.Charges[i];
        console.log('charge'+JSON.stringify(this.charge));
      }
    }

  }
  onSubmit(formValue: any) {
    for(let i = 0 ; i < this.Charges.length; i ++){
      console.log('test:' + this.Charges.length);
      if(this.ID === this.Vendor.charges[i].ID){
        this.Vendor.charges[i].name = formValue.name;
        this.Vendor.charges[i].type = formValue.type;
        this.Vendor.charges[i].value = formValue.value;
        this.Vendor.charges[i].order = formValue.order;
        this.Vendor.charges[i].applicable = formValue.applicable;

        this._VendorSerice.updateChange(this.Vendor);
        this.router.navigate(['charge']);
      }
    }
  }


}
