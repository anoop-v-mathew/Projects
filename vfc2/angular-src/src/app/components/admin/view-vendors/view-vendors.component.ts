import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
// import {CookieService} from 'ngx-cookie-service';
//import { routing } from '../../app.routing';
import { RouterModule, Routes } from '@angular/router';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-view-vendors',
  templateUrl: './view-vendors.component.html',
  styleUrls: ['./view-vendors.component.scss']
})
export class ViewVendorsComponent implements OnInit {

  vendors: any[];
    // login: any;
    constructor(private _AdminService: AdminService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
      this._AdminService.getVendors()
      .subscribe(vendors => {
          this.vendors = vendors;
        
        }
      );
      
      
    }
}
