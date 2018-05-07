import { Component, OnInit } from '@angular/core';
import {AdminService} from '../DataAndService/admin.service';
import {CookieService} from 'ngx-cookie-service';
import { routing } from '../app.routing';
//import { RouterModule, Routes } from '@angular/router';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  Vendors: any[];
  isAuthorised: boolean;
  cookie : any[];
  constructor(private _AdminService: AdminService,private _CookieServie: CookieService, private router: Router) { }

  ngOnInit() {
  }
  loginUser(login) {
    login.preventDefault();
    console.log(login);

    var username = login.target.elements[0].value;
    var password = login.target.elements[1].value;

    //console.log(username, password);
    this.Vendors = this._AdminService.getVendors();

    for (let i = 0; i < this.Vendors.length; i++) {

      //console.log('vendors : ' + JSON.stringify(vendors));
     
      //this.isAuthorised= this._AdminService.CheckVendor(username, password);
      if(username != 'admin'){
        if(this._AdminService.CheckVendor(username, password) == true){
          console.log("Vender")
          this._CookieServie.set('username', username );
         
          console.log('cookie' + this._CookieServie.get('username'));
          this._AdminService.setLogin();
          this._CookieServie.set('login', this._AdminService.getLogin());
          this.router.navigate(['vendor']);
          
        }
        else{

          this.router.navigate(['Login']);
          
        }
      }
      else if(username == 'admin' && password == 'admin'){
        this._AdminService.setLogin();
        this._CookieServie.set('username', username );
        console.log('cookie' + this._CookieServie.get('username'));
        this.router.navigate(['admin'])
      }
    }
  }

}
