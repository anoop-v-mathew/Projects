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

  SubmittedOrders: any[];
  AcceptedOrders: any[];
  PreparingOrders: any[];
  ReadyOrders: any[];
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
    
    this._CustomerService.getOrderWithStatus(this.CustomerEmail, 'Submitted')
    .subscribe(order => {
      this.SubmittedOrders = order;
      //console.log('Oders:' +JSON.stringify(this.SubmittedOrders));
      
    });

    //this.CustomerEmail = this._cookieService.get("username");
    
    this._CustomerService.getOrderWithStatus(this.CustomerEmail,  'Accepted')
    .subscribe(order => {
      this.AcceptedOrders = order;
      //console.log('Oders:' +JSON.stringify(this.SubmittedOrders));
      
    });

    

    
    this._CustomerService.getOrderWithStatus(this.CustomerEmail, 'Preparing')
    .subscribe(order => {
      this.PreparingOrders = order;
      //console.log('Oders:' +JSON.stringify(this.SubmittedOrders));
      
    });

    
    
    this._CustomerService.getOrderWithStatus(this.CustomerEmail, 'Ready')
    .subscribe(order => {
      this.ReadyOrders = order;
      //console.log('Oders:' +JSON.stringify(this.SubmittedOrders));
      
    });

  }


}
