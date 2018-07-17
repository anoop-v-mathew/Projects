import { Component, OnInit } from '@angular/core';

import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";

import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-socialplugin',
  templateUrl: './socialplugin.component.html',
  styleUrls: ['./socialplugin.component.scss']
})
export class SocialpluginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;
  

  constructor(
    private authService: AuthService,
    private _flashMessagesService: FlashMessagesService,
    private router: Router,
    private _cookieService:CookieService
  ) { }

  
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this._cookieService.set('username', this.user.email );
      this.router.navigate(['customer']);

    });
  }
 
  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    // });
  }

}
