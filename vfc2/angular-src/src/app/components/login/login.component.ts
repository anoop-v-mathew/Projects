import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Email: any;

  constructor(
    private _flashMessagesService: FlashMessagesService,
    private _AuthService: AuthService, 
    private router: Router,
    private _cookieService:CookieService ) { }

  ngOnInit() { }


  onSubmit(formValue: any){
    // put it inside of onSubmit() method
    let flashMsg = 'You are now logged in!';
    let cssCls = 'alert-success';
    let target = 'customer';
    const flashMessagesService = this._flashMessagesService;
    const rt = this.router;

    const user = {
      //userDisplayName: formValue.name,
      username: formValue.email,
      password: formValue.password
    }

    
    //required fields
    this._AuthService.login(user).subscribe(data => {
      if(data.success){
        this._cookieService.set('LoginStatus', 'Logedin');
        console.log('LoginStatus:' + this._cookieService.get('LoginStatus'));
        var user = data.user;
        this.Email = user.email;
        //console.log('user_email:' +this.Email);

        this._cookieService.set('username', this.Email );
        var Username = this._cookieService.get('username');

        console.log('Username:' + Username);
        for(var i = 0; i < data.usertype.length; i ++){
          console.log(data.usertype[i]);
          if(data.usertype[i] == 'admin'){
            target = 'admin';
            console.log('target:' + target);
            
          }
          if(data.usertype[i] == 'vendor'){
            target = 'vendor';            
            console.log('target:' + target);
            
          }
        }
      } else {
        flashMsg = 'Error: '+data.msg;
        cssCls = 'alert-danger';
        target = 'Login';;
      }
      console.log(flashMsg + " : " + target + " : " + this.Email);
      flashMessagesService.show(flashMsg, { cssClass: cssCls, timeout: 3000 });
      rt.navigate([target]);
    });
  }
}
