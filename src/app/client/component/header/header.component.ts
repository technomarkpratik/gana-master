import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  tokendata :any = localStorage.getItem('loginstore');

  ngOnInit(): void {
 
}

  loging_s : any;
  login_p : any;
}
