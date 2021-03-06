import { Component, OnInit } from '@angular/core';
import{CustomerService} from '../../../services/customer.service';
import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';
import { Location, DatePipe } from "@angular/common";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  Orders: any[];
  CustomerEmail: any;
  Total: any;
  sku: any;
  checkoutorder: any[];
  cost: any;
  constructor(
    private _CustomerService: CustomerService,
    private _cookieService:CookieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.sku = params['sku'];
      console.log('sku:' + this.sku);
    });

    this.Total = 0;
    this.CustomerEmail = this._cookieService.get("username");
    this._CustomerService.getCheckoutOrder(this.sku)
    .subscribe(order => {
      this.Orders = order;
      console.log('CheckoutOrder:' +JSON.stringify(this.Orders));

      var len = order.length;
      console.log('Length:' + len);
      for(var i = 0; i < len; i++){
        const OrderLen = order[i].orderedItems.length;
        for(var j=0; j< OrderLen; j++){
          this.cost = order[i].orderedItems[j].itemPrice * order[i].orderedItems[j].quantity;
          this.Total = this.Total + this.cost;
        }
        this.cost = 0;
        //this.Total = this.Total + order[i].OrderedList.itemValue;
      }

      console.log('Total:'+ this.Total);
    });

   

  }

}
