import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
//import {CookieService} from 'ngx-cookie-service';
//import { routing } from '../../app.routing';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent {

  constructor(private _AdminService: AdminService, private router: Router) { }

  onSubmit(formValue: any) {
    console.log('Form Value = ' + JSON.stringify(formValue, null, 4));
    const newLocation = {
      campus: formValue.campus,
      tower: formValue.tower,
      floor: formValue.floor,
    };
    const newVendor = {
        VendorName: formValue.VendorName,
        VendorPhone: formValue.VendorPhone,
        VendorEmail: formValue.VendorEmail,
        VendorLocation: newLocation,
        VendorOwner: formValue.VendorOwner,
        VendorPassword: formValue.VendorPassword
    };
    //this._AdminService.addVendor(newVendor);
    this.router.navigate(['admin']);
  }
}
