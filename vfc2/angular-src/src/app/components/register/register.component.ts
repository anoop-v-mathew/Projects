import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {AuthService} from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _customer: CustomerService,
    private _flashMessagesService: FlashMessagesService,
    private _AuthService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit(formValue: any){
    let flashMsg = '';
    let cssCls = '';
    let target = '';
    const flashMessagesService = this._flashMessagesService;
    const rt = this.router;

    const user = {
      userDisplayName: formValue.name,
      email: formValue.email,
      password: formValue.password
    }
    //required fields

    if(!this._customer.ValidateRegister(user)){
      flashMsg = 'Please enter all fields';
      cssCls = 'alert-danger';
      flashMessagesService.show(flashMsg, { cssClass: cssCls, timeout: 3000 });
      return false;
    }

    if(!this._customer.ValidateEmail(formValue.email)){
      flashMsg = 'Please enter a valid Email';
      cssCls = 'alert-danger';
      flashMessagesService.show(flashMsg, { cssClass: cssCls, timeout: 3000 });
      return false;
    }

    //register
    this._AuthService.registerUser(user).subscribe(data => {
      if(data.success){
        flashMsg = 'Congratulations! You are now registered!';
        cssCls = 'alert-success';
        target = 'Login';
        
      } else {
        flashMsg = 'Error: ' + data.msg;
        cssCls = 'alert-danger';
        target = 'Register';
      }

      flashMessagesService.show(flashMsg, { cssClass: cssCls, timeout: 3000 });
      rt.navigate([target]);
    });
  }
}

// newUser.userDisplayName = req.body.userDisplayName;
// newUser.email = req.body.email;
// newUser.userType.push("customer");
// newUser.password = req.body.password;