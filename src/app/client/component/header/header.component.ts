import { Component, ElementRef, HostListener } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { HomepageService } from '../../../services/homepage.service';

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

  accesstoken = window.localStorage.getItem("accesstoken");

  constructor(private homeservice:HomepageService,private service:AuthService, private elem: ElementRef){
    this.userdata = window.localStorage.getItem("userdata");
    console.log(this.userdata);
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
      this.service.logout_data(this.userdata).subscribe(data => console.log(data));
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
  @HostListener('window:click', ['$event'])
  DocumentClick(event: Event) {
    if (this.elem.nativeElement.contains(event.target))
      this.open_search= true;
    else
      this.open_search = false;
  }

  search_filter: any;
  songdetail = [
    {
      img :'../assets/image/user.jpg',
      title: 'rate gfdgfdg',
      artist : 'arjit sing'
    },
    {
      img :'../assets/image/user.jpg',
      title: 'fdggdg lambiya',
      artist : 'arjit sing'
    },
    {
      img :'../assets/image/user.jpg',
      title: 'fdgvfdv lambiya',
      artist : 'arjit sing'
    },
    {
      img :'../assets/image/user.jpg',
      title: 'rate dvfdv',
      artist : 'ramesh sing'
    },
    {
      img :'../assets/image/user.jpg',
      title: 'rate lambiya',
      artist : 'arjit sing'
    },
    {
      img :'../assets/image/user.jpg',
      title: 'fdvfdv lambiya',
      artist : 'ramesh sing'
    },
    {
      img :'../assets/image/user.jpg',
      title: 'rate fdvdv',
      artist : 'bharat patel'
    },    
  ]
  displaysongs(){
    this.homeservice.songlist().subscribe(data => this.songs = data);
  }
}
