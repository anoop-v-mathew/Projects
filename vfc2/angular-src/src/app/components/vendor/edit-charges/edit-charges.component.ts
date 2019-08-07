import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../../services/vendor.service';
import { CookieService } from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-charges',
  templateUrl: './edit-charges.component.html',
  styleUrls: ['./edit-charges.component.scss']
})
export class EditChargesComponent implements OnInit {

  constructor(private _VendorSerice: VendorService,
    private route: ActivatedRoute,
    private router: Router,
    private _cookieService: CookieService) {
  }

  Vendor: any;
  paramname: any;
  email: any;
  Charges: any[] = [];
  charge: any;
  Email: any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.paramname = params['name'];
      console.log('name:' + this.paramname);
    });
    this.Email = this._cookieService.get('username');
    this._VendorSerice.getVendor(this.Email)
      .subscribe(vendor => {
        this.Vendor = vendor;
        console.log('Vendor:' + JSON.stringify(this.Vendor));

        const len = this.Vendor.charges.length;
        for (let i = 0; i < len; i++) {
          if (this.paramname === this.Vendor.charges[i].name) {
            this.charge = this.Vendor.charges[i];
          }
        }
      })
  }
  onSubmit(formValue: any) {
    for (let i = 0; i < this.Vendor.charges.length; i++) {
      if (this.paramname === this.Vendor.charges[i].name) {
        this.Vendor.charges[i].name = formValue.name;
        this.Vendor.charges[i].type = formValue.type;
        this.Vendor.charges[i].value = formValue.value;
        this.Vendor.charges[i].applicable = formValue.applicable;
        this._VendorSerice.UpdateCharge + (this.Email, this.Vendor)
          .subscribe(data => {
            if (data.success) {
              console.log(data.msg);
            }
            else {
              console.log(data.msg);
            }
          })

        this.router.navigate(['charge']);
      }
    }
  }


}
