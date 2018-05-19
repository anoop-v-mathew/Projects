import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private _AuthService: AuthService, private router: Router) { }

  ngOnInit() {


  }

  onSubmit(formValue: any){
    const user = {
      //userDisplayName: formValue.name,
      username: formValue.email,
      password: formValue.password
    }
    //required fields
    this._AuthService.login(user).subscribe(data => {
      if(data.success){
        console.log(JSON.stringify(user));
        //console.log('your registred');
        console.log(data);

        for(var i = 0; i < data.usertype.length; i ++){
          console.log(data.usertype[i]);
          if(data.usertype[i] == 'admin'){
            this.router.navigate(['admin']);
          }
          if(data.usertype[i] == 'vendors'){
            this.router.navigate(['vendor']);
          }
  
          else{
            this.router.navigate(['customer']);
          }
        }

        
        
      }
      else{
        console.log(JSON.stringify(user));
        console.log(data.msg)
      }
      //console.log(data.msg);
    });

  }

}
