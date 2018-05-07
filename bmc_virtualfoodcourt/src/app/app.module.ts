import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViewVendorComponent } from './Admin/view-vendor/view-vendor.component';
import { ViewVendorsComponent } from './Admin/view-vendors/view-vendors.component';
import { EditVendorComponent } from './Admin/edit-vendor/edit-vendor.component';
import { AddVendorComponent } from './Admin/add-vendor/add-vendor.component';
import { DeleteVenodrComponent } from './Admin/delete-venodr/delete-venodr.component';
import { VeiwMenuComponent } from './Vendor/veiw-menu/veiw-menu.component';
import { VeiwChargesComponent } from './Vendor/veiw-charges/veiw-charges.component';
import { EditMenuComponent } from './Vendor/edit-menu/edit-menu.component';
import { EditChargesComponent } from './Vendor/edit-charges/edit-charges.component';
import { AddMenuComponent } from './Vendor/add-menu/add-menu.component';
import { AddChargesComponent } from './Vendor/add-charges/add-charges.component';
import { DelMenuComponent } from './Vendor/del-menu/del-menu.component';
import { DelChargesComponent } from './Vendor/del-charges/del-charges.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import{ AdminService } from './DataAndService/admin.service';
import{VendorService} from './DataAndService/vendor.service';
import{CustomerService} from './DataAndService/customer.service';

import { routing } from './app.routing';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AddItemComponent } from './Vendor/add-item/add-item.component';
import { CustomerMenuComponent } from './Customer/customer-menu/customer-menu.component';
import { CuVendorListComponent } from './Customer/cu-vendor-list/cu-vendor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewVendorComponent,
    ViewVendorsComponent,
    EditVendorComponent,
    AddVendorComponent,
    DeleteVenodrComponent,
    VeiwMenuComponent,
    VeiwChargesComponent,
    EditMenuComponent,
    EditChargesComponent,
    AddMenuComponent,
    AddChargesComponent,
    DelMenuComponent,
    DelChargesComponent,
    LoginComponent,
    AboutComponent,
    AddItemComponent,
    CustomerMenuComponent,
    CuVendorListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [AdminService, CookieService, VendorService, CustomerService],
  bootstrap: [AppComponent],

  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
