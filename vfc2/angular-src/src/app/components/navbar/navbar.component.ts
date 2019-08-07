import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { CookieService } from 'ngx-cookie-service';
import { logging } from 'selenium-webdriver';

import { AuthService } from "angular4-social-login";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  User: any[];
  loginStatus = false;
  constructor(
    private _flashMessagesService: FlashMessagesService,
    private _AuthService: AuthService,
    private router: Router,
    private _cookieService: CookieService
  ) { }

  ngOnInit() {
    var Username = this._cookieService.get('username');

    var Loggedin = this._cookieService.get('LoginStatus');
    if (Loggedin == 'Logedin') {

      this.loginStatus = true;
      console.log('LoginStatus:' + this.loginStatus);
    }
  }

  Sighout() {
    console.log('loggingout');
    this._cookieService.deleteAll();
    this.loginStatus = false;
    this._AuthService.signOut();

  }

}
