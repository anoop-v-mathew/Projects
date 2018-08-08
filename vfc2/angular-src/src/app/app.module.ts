// Angular Module Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Third-party Module Imports
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FlashMessagesModule } from 'angular2-flash-messages';


import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

//import { NumberPickerComponent } from 'angular2-number-picker';

// Application Component Imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { ViewVendorComponent } from './components/admin/view-vendor/view-vendor.component';
import { ViewVendorsComponent } from './components/admin/view-vendors/view-vendors.component';
import { EditVendorComponent } from './components/admin/edit-vendor/edit-vendor.component';
import { AddVendorComponent } from './components/admin/add-vendor/add-vendor.component';
import { VeiwMenuComponent } from './components/vendor/view-menu/veiw-menu.component';
import { VeiwChargesComponent } from './components/vendor/view-charges/view-charges.component';
import { EditMenuComponent } from './components/vendor/edit-menu/edit-menu.component';
import { EditChargesComponent } from './components/vendor/edit-charges/edit-charges.component';
import { AddMenuComponent } from './components/vendor/add-menu/add-menu.component';
import { AddChargesComponent } from './components/vendor/add-charges/add-charges.component';
import { DelMenuComponent } from './components/vendor/del-menu/del-menu.component';
import { DelChargesComponent } from './components/vendor/del-charges/del-charges.component';
import { AddItemComponent } from './components/vendor/add-item/add-item.component';
import { CustomerMenuComponent } from './components/customer/customer-menu/customer-menu.component';
import { CuVendorListComponent } from './components/customer/cu-vendor-list/cu-vendor-list.component';
import { AboutComponent } from './components/about/about.component';

// Application Service Imports
import { AdminService } from './services/admin.service';
import { VendorService } from './services/vendor.service';
import { CustomerService } from './services/customer.service';
import {AuthService} from './services/auth.service';

import { CookieService } from 'ngx-cookie-service';
import { SocialpluginComponent } from './components/login/socialplugin/socialplugin.component';
import { ShoppingCartComponent } from './components/customer/shopping-cart/shopping-cart.component';
import { PaymentComponent } from './components/customer/payment/payment.component';
import { CheckOutComponent } from './components/customer/check-out/check-out.component';
//import { CheckOutComponent } from './components/customer/check-out/check-out.component';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { OrderHistoryComponent } from './components/customer/order-history/order-history.component';
import { PlacedOrdersComponent } from './components/vendor/placed-orders/placed-orders.component';

let config = new AuthServiceConfig([
  // {
  //   id: GoogleLoginProvider.PROVIDER_ID,
  //   provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
  // },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("338882873311801")
  }
]);

export function provideConfig() {
  return config;
}

//Routing
const appRoutes: Routes = [
  { path: 'About', component: AboutComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'SLogin', component:  SocialpluginComponent},
  { path: 'Register', component: RegisterComponent },
  { path: 'admin', component:ViewVendorsComponent },
  { path: 'vendor/:email', component:ViewVendorComponent },
  { path: 'vendor', component:VeiwMenuComponent },
  { path: 'UpdateVendor/:email', component:EditVendorComponent },
  { path: 'AddVendor', component:AddVendorComponent },
  { path: 'Menu', component: VeiwMenuComponent },
  { path: 'charge', component: VeiwChargesComponent },
  { path: 'Updatecharge/:name', component: EditChargesComponent },
  { path: 'UpdateItem/:name/:name2', component: EditMenuComponent },
  { path: 'AddItem/:name', component:AddItemComponent },
  { path: 'AddCatog', component:AddMenuComponent },
  { path: 'AddCharge', component: AddChargesComponent },
  { path: 'cumenu/:email', component: CustomerMenuComponent },
  { path: 'customer', component: CuVendorListComponent },
  { path:'sCart', component:ShoppingCartComponent},
  { path:'Checkout/:sku', component:CheckOutComponent},
  { path:'Pay/:sku', component:PaymentComponent},
  { path:'Ohistory', component:OrderHistoryComponent}

];

export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    CustomerComponent,
    VendorComponent,
    ViewVendorComponent,
    ViewVendorsComponent,
    EditVendorComponent,
    AddVendorComponent,
    VeiwMenuComponent,
    VeiwChargesComponent,
    EditMenuComponent,
    EditChargesComponent,
    AddMenuComponent,
    AddChargesComponent,
    DelMenuComponent,
    DelChargesComponent,
    LoginComponent,
    AddItemComponent,
    CustomerMenuComponent,
    CuVendorListComponent,
    AboutComponent,
    SocialpluginComponent,
    ShoppingCartComponent,
    PaymentComponent,
    CheckOutComponent,
    FileSelectDirective,
    OrderHistoryComponent,
    PlacedOrdersComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    FlashMessagesModule.forRoot(),
    SocialLoginModule.initialize(config)
    
  ],
  providers: [
    AdminService, VendorService, AuthService, CookieService
  ],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }

// import { AboutComponent } from './components/about/about.component';
// import { DeleteVenodrComponent } from './components/admin/delete-venodr/delete-venodr.component';
// import { CookieService } from 'ngx-cookie-service';









