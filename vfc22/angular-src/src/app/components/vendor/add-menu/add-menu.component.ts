import { Component, OnInit } from '@angular/core';
import{VendorService} from '../../../services/vendor.service';
//import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit {

  constructor(private _VendorSerice: VendorService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
  }

  onSubmit(formValue: any){
    const newItem = {
     // ID: nextID,
    name: formValue.name
    };
     //this._AdminService.Additem(newItem, this.Email);
     //this._VendorSerice.AddICatg(newItem);
     this.router.navigate(['Menu'])
  }
  
}
