import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // serverurl = "http://localhost:3000/";
  // serverurl = "http://wms_test/api/v1/";
  serverurl = "https://phplaravel-886096-3128455.cloudwaysapps.com/api";

  accesstoken = localStorage.getItem('accesstoken');
  httpOptions = {
    headers: new HttpHeaders({'Accept': 'application/json',"Authorization": "Bearer "+ this.accesstoken})
  };
  if(accesstoken: any){
    console.log(accesstoken);
  }
 
 
  constructor(private http:HttpClient) { }  
  registerdata(data:any){    
    return this.http.post(this.serverurl + '/v1/register' , data);
  }
  loginservice(data:any){
    return this.http.post(this.serverurl + '/v1/login',data);
  }
  logout_data(data=null){
    return this.http.post(this.serverurl + '/v1/logout',data,this.httpOptions);
  }
 getprofile(){
  return this.http.get(this.serverurl + '/v1/get-profile',this.httpOptions);
 }
  
 updateprofile(data:any){
  return this.http.post(this.serverurl + '/v1/update-profile',data, this.httpOptions);
 }
}
