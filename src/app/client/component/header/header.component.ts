import { Component, ElementRef, HostListener } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { HomepageService } from '../../../services/homepage.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  loging_s:any = "";
  login_p:any = "";
  songs:any = {};
  userdata: any = {};
  search_filter: any;
  accesstoken = window.localStorage.getItem("accesstoken");

  constructor(private homeservice:HomepageService,private service:AuthService, private elem: ElementRef){
    this.userdata = window.localStorage.getItem("userdata");
    if(this.userdata){
      this.loging_s = 'inline-block' ;
      this.login_p = 'none'; 
    }  

  } 
  ngOnInit(){
    this.displaysongs();
  } 
   id:number | undefined;
  logout(){
    console.log(this.userdata);
    if(window.confirm("are you sure want to logout")){
      this.service.logout_data().subscribe(data => console.log(data));
      localStorage.clear();
      // window.location.reload();
      this.loging_s = 'none' ;
      this.login_p = 'inline-block'; 

    } 
  }
  public open_search = false;
  opensearch(){
    this.open_search = !this.open_search;
  }


  displaysongs(){
    this.homeservice.songlist().subscribe((data) => this.receivesongs(data) );


   
  }
  receivesongs(data:any){
     this.songs =  (data.data.data);

  }
}
