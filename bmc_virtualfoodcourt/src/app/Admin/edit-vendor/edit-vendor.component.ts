import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {AdminService} from '../../DataAndService/admin.service';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.scss']
})
export class EditVendorComponent implements OnInit {

  constructor(private _AdminService: AdminService, private route: ActivatedRoute, private router: Router) { }
  Vendor: any;
  ID: any;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
        this.ID = +params['id'];
    });
    console.log(this.ID);
    this.Vendor = this._AdminService.getVendor(this.ID);
  }

  onSubmit(formValue: any) {

    // this.Vendor = this._AdminService.getVendor(this.id);
    // this.Vendor.ID = this.id;
    const newLocation = {
      campus: formValue.campus,
      tower: formValue.tower,
      floor: formValue.floor,
    };
    this.Vendor.VendorName = formValue.VendorName;
    this.Vendor.VendorPhone = formValue.VendorPhone;
    this.Vendor.VendorEmail = formValue.VendorEmail;
    this.Vendor.VendorLocation = newLocation;
    this.Vendor.VendorOwner = formValue.VendorOwner;
    this.Vendor.VendorPassword = formValue.VendorPassword;

    this._AdminService.updateVendor(this.Vendor);
    this.router.navigate(['admin']);
  }

}
