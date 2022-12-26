import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomepageService {
    serverurl = "https://phplaravel-886096-3128455.cloudwaysapps.com/api";
    accesstoken = localStorage.getItem('accesstoken');
    httpOptions = {
      headers: new HttpHeaders({'Accept': 'application/json',"Authorization": "Bearer "+ this.accesstoken})
    };

    private content = new BehaviorSubject<string>('1');
    public share = this.content.asObservable();
    updatedata(text: string){
      this.content.next(text);
 
    }

  constructor(private http:HttpClient) {
    
   }
  songlist(){    
    return this.http.get(this.serverurl + '/v1/music',this.httpOptions);
  }
  songlis(id:any){    
    return this.http.get(this.serverurl + '/v1/music/'+ id,this.httpOptions);
  }
  artistlist(){    
    return this.http.get(this.serverurl + '/v1/artists',this.httpOptions);
  }
  
}
