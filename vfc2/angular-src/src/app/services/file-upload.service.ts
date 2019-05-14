import { Injectable } from '@angular/core';
import { HttpModule, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private _http: Http) { }

  UploadFile(file){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //console.log('Order:' +JSON.stringify(file));
    return this._http.post('http://localhost:3000/FileStorage/upload', file,{headers: headers})
    .map(res => res.json());

  }
}
