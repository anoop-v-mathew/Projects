import { Component, OnInit } from '@angular/core';
import{CustomerService} from '../../../services/customer.service';
import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';
import { Location, DatePipe } from "@angular/common";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-placed-orders',
  templateUrl: './placed-orders.component.html',
  styleUrls: ['./placed-orders.component.scss']
})
export class PlacedOrdersComponent implements OnInit {

  Orders: any[];
  CustomerEmail: any;
  Total: any;
  
  constructor(
    private _CustomerService: CustomerService,
    private _cookieService:CookieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.Total = 0;
    this.CustomerEmail = this._cookieService.get("username");
    this._CustomerService.getOrder(this.CustomerEmail)
    .subscribe(order => {
      this.Orders = order;
      console.log('Oders:' +JSON.stringify(this.Orders));
      
    });
    
  }


}
