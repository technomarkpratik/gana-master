import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mainsection',
  templateUrl: './mainsection.component.html',
  styleUrls: ['./mainsection.component.scss']
})
export class MainsectionComponent {
  userdata: any = {};
  close_menu:any = "";
  constructor(private service:AuthService){

    this.userdata = window.localStorage.getItem("userdata");

    if(this.userdata){
      this.close_menu = 'block' ;
    }
   
  } 
}
