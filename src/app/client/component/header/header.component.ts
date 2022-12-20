import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  autoLgin(){
    let logincheck  = JSON.stringify(localStorage.getItem('loginstore'));    
    if(!logincheck){
      alert('your session is expired');
    }

    let storeid  = JSON.stringify(localStorage.getItem('idstore'));
    if(!storeid){
      alert('adasdsd');
    }
  }
 

  ngOnInit(): void {
   
}

  loging_s : any;
  login_p : any;
}
