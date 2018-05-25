import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.scss']
})
export class EditVendorComponent implements OnInit {

  constructor(private _AdminService: AdminService, private route: ActivatedRoute, private router: Router) { }
  Vendor: any;
  email: any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.email = params['email'];
      console.log('email:' + this.email);
    });
    console.log(this.email);

    
    
    this._AdminService.getVendor(this.email)
      .subscribe(vendor => {
          this.Vendor = vendor;
          //console.log('Vendor: ' +JSON.stringify( vendor));
        }
      );
  }

  onSubmit(formValue: any) {

    // this.Vendor = this._AdminService.getVendor(this.id);
    // this.Vendor.ID = this.id;
    const newLocation = {
      campus: formValue.campus,
      tower: formValue.tower,
      floor: formValue.floor,
    };

    const Vendor = {
      VendorName: formValue.VendorName,
      VendorPhone: formValue.VendorPhone,
      VendorEmail: formValue.VendorEmail,
      VendorLocation: newLocation,
      // floor: formValue.floor,
      // tower: formValue.tower,
      // campus: formValue.campus,
      VendorOwner: formValue.VendorOwner,
      VendorPassword: formValue.VendorPassword
    }


    this._AdminService.UpdateVendor(Vendor).subscribe(data => {
      if (data.success) {
        console.log(data.msg);
      }
      else {
        console.log(data.msg);
      }
    });
    //this._AdminService.updateVendor(this.Vendor);
    this.router.navigate(['admin']);
  }

}
