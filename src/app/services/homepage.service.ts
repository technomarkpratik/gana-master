import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
    serverurl = "https://phplaravel-886096-3128455.cloudwaysapps.com/api";
    accesstoken = localStorage.getItem('accesstoken');
    httpOptions = {
      headers: new HttpHeaders({'Accept': 'application/json',"Authorization": "Bearer "+ this.accesstoken})
    };
  constructor(private http:HttpClient) { }
  songlist(){    
    return this.http.get(this.serverurl + '/v1/music',this.httpOptions);
  }

}
