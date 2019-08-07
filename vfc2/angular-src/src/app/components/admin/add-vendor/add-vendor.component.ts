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
      floor: formValue.floor,
      tower: formValue.tower,
      campus: formValue.campus,
    };
    const newVendor = {
      VendorName: formValue.VendorName,
      VendorPhone: formValue.VendorPhone,
      VendorEmail: formValue.VendorEmail,
      //VendorLocation: newLocation,
      floor: formValue.floor,
      tower: formValue.tower,
      campus: formValue.campus,
      VendorOwner: formValue.VendorOwner,
      VendorPassword: formValue.VendorPassword
    };

    this._AdminService.AddVendor(newVendor).subscribe(data => {
      if (data.success) {
        console.log(data.msg);
      }
      else {
        console.log(data.msg);
      }
    });
    this.router.navigate(['admin']);
  }
}