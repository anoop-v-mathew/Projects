import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import{CustomerService} from '../../../services/customer.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _CustomerService: CustomerService
  ) { }
  payment: any;
  sku: any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sku = params['sku'];
      console.log('sku:' + this.sku);
    });
  }

  UpdateStatus(){
    this.payment = true;
    if (this.payment == true){
      this._CustomerService.updateStatToSubmit(this.sku).subscribe(data => {
        if (data.success) {
          console.log(data.msg);
        }
        else {
          console.log(data.msg);
        }
      });
      //this._AdminService.updateVendor(this.Vendor);
      this.router.navigate(['']);
    }
    
    else{

    }
  }
}
