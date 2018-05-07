import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

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
import { AddItemComponent } from './Vendor/add-item/add-item.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

import { CustomerMenuComponent } from './Customer/customer-menu/customer-menu.component';
import { CuVendorListComponent } from './Customer/cu-vendor-list/cu-vendor-list.component';




const appRoutes: Routes = [

    {path:'Login', component: LoginComponent },
    {path:'', component:AboutComponent},
    {path:'admin', component:ViewVendorsComponent},
    {path:'Vendor/:id', component:ViewVendorComponent},
    {path:'vendor', component:VeiwMenuComponent},
    { path: 'UpdateVendor/:id', component:EditVendorComponent},
    {path: 'AddVendor', component:AddVendorComponent},
    { path: 'Menu', component: VeiwMenuComponent},
    { path: 'charge', component: VeiwChargesComponent },
    {path: 'Updatecharge/:id', component: EditChargesComponent},
    {path: 'UpdateItem/:id/:id2', component: EditMenuComponent},
    {path: 'AddItem/:id', component:AddItemComponent},
    {path: 'AddCatog', component:AddMenuComponent},
    {path: 'AddCharge', component: AddChargesComponent},
    { path: 'cumenu/:id', component: CustomerMenuComponent },
    { path: 'customer', component: CuVendorListComponent }
];

export const routing = RouterModule.forRoot(appRoutes);