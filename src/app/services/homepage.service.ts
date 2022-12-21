import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
    serverurl = "http://localhost:3000/";
  httpOptions = {
    headers: new HttpHeaders({'Accept': 'application/json'})
  };
  constructor(private http:HttpClient) { }
  songlist(){    
    return this.http.get(this.serverurl + 'songsdetail');
  }
}
