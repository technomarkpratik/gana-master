import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // serverurl = "http://localhost:3000/";
  serverurl = "http://wms_test/api/v1/";

  httpOptions = {
    headers: new HttpHeaders({'Accept': 'application/json'})
  };
  constructor(private http:HttpClient) { }  
  registerdata(data:any){    
    return this.http.post(this.serverurl + 'register' , data);
  }
  loginservice(data:any){
    return this.http.post(this.serverurl + 'login',data);
  }
  logout_data(data:any){
    return this.http.post(this.serverurl + 'logout', data);
  }
}
