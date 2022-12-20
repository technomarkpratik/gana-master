import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  autoLgin(){
    let tokendata  = JSON.stringify(localStorage.getItem('loginstore'));
    let storeid  = JSON.stringify(localStorage.getItem('idstore'));
    if(!storeid){
      alert('sdsds');
    }else{
      alert("id pass " +storeid);
    }
    if(!tokendata){
      alert('adasdsd');
    }
  }
 

  ngOnInit(): void {
   
}

  loging_s : any;
  login_p : any;
}
