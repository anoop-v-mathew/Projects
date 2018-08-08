import { Component, OnInit } from '@angular/core';
import{CustomerService} from '../../../services/customer.service';
import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';
import { Location, DatePipe } from "@angular/common";
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
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
      console.log('Vendor:' +JSON.stringify(this.Orders));

      var len = order.length;
      console.log('Length:' + len);
      for(var i = 0; i < len; i++){
        this.Total = this.Total + order[i].OrderedList.itemValue;
      }
      console.log('Total:'+ this.Total);
    });

    
  }

}
