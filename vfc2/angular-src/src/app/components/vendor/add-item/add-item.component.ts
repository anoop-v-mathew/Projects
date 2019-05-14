import { Component, OnInit } from '@angular/core';
import{VendorService} from '../../../services/vendor.service';
import{FileUploadService}from '../../../services/file-upload.service';
import {CookieService} from 'ngx-cookie-service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor(private _VendorService: VendorService,
     private route: ActivatedRoute,
      private router: Router,
       private _cookieService:CookieService,
      private _FileServie: FileUploadService
      ) { }
    MenuID: any;
    Email: any;
    name: any;

  //   private files = [];
  // private url = 'http://localhost:3000/FileStorage/upload';
  // private uploader: FileUploader;
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.name = params['name'];
        console.log('name:' + this.name);
      });
    }

  onSubmit( formValue: any ) {
    //this.uploader = new FileUploader({url: this.url});
    this.Email = this._cookieService.get("username");
    const newItem = {
      name: formValue.Name,
      price: formValue.price,
      currency: formValue.currency,
      preparation_time: formValue.preparationtime
    };
    let category = {
      name: this.name,
      items: []
    };
    category.items.push(newItem);

    console.log('Category: ' + category);
    this._VendorService.addMenuItem(this.Email, category)
    .subscribe(data =>{
      if (data.success) {
        console.log(data.msg);
      }
      else {
        console.log(data.msg);
      }
    })

     this.router.navigate(['Menu']);

     this._FileServie.UploadFile(formValue.file)
     .subscribe(data =>{
       if(data.success){
         console.log("Success");
       }
       else{
         //console.log(fail);
       }
     })
     //this.router.navigate(['Menu'])
     //this._AdminService.Additem(newItem, this.Email);
     //this._VendorService.AddItem(newItem, this.MenuID);
     
  }
}
// addMenuItem