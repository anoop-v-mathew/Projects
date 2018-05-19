import { Component, OnInit } from '@angular/core';
import { FlashMessagesModule } from 'angular2-flash-messages';

import {CustomerService} from '../../services/customer.service';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // name: String;
  // email: String;
  // password: String;



  constructor(
    private _customer: CustomerService,
     private flashMessageSerive: FlashMessagesModule,
    private _AuthService: AuthService
    ) { }

  ngOnInit() {
  }

  onSubmit(formValue: any){
    const user = {
      userDisplayName: formValue.name,
      email: formValue.email,
      password: formValue.password
    }
    //required fields

    if(!this._customer.ValidateEmail(formValue.email)){
      console.log('Form Value = ' + JSON.stringify(formValue, null, 4));
      console.log('Please enter a valid Email');
      return false;
    }

    if(!this._customer.ValidateRegister(user)){
      console.log('Please enter all fields');
      return false;
    }

    //register
    this._AuthService.registerUser(user).subscribe(data => {
      if(data.success){
        console.log('your registred');
        console.log(data.msg);
      }
      else{
        console.log(data.msg)
      }
    });
  }
}

// newUser.userDisplayName = req.body.userDisplayName;
// newUser.email = req.body.email;
// newUser.userType.push("customer");
// newUser.password = req.body.password;