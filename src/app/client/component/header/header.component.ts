import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { HomepageService } from '../../../services/homepage.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

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
  isfeatching = false;
  accesstoken = window.localStorage.getItem("accesstoken");
abcd !: number;
  constructor(private homeservice:HomepageService,private service:AuthService, private elem: ElementRef, private router:Router){
    this.userdata = window.localStorage.getItem("userdata");
    if(this.userdata){
      this.loging_s = 'inline-block' ;
      this.login_p = 'none'; 
    } 
    
  } 
  ngOnInit(){
    this.displaysongs();
  } 
  saveid(id:string){
  
    localStorage.setItem('idkeys', id)
    console.log(localStorage.getItem('idkeys'));
  }
  logout(){
    console.log(this.userdata);
    if(window.confirm("are you sure want to logout")){
      this.service.logout_data().subscribe(data => console.log(data));
      localStorage.clear();
      this.loging_s = 'none' ;
      this.login_p = 'inline-block'; 
      this.router.navigate(['']);
    } 
  }
  public open_search = false;
  opensearch(){
    this.open_search = !this.open_search;
   
  }


  displaysongs(){
    this.isfeatching = true ;
    this.homeservice.songlist().subscribe((data) => {
      this.isfeatching = false ;
      this.receivesongs(data)} );
     
  }
  receivesongs(data:any){
     this.songs =  (data.data.data);
     
  }
}
