import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularproj';
  constructor(private toster:NotificationService,private tost:ToastrService){

  }
  showtoast(){
    this.tost.success('hel','jsdsd');
  }
}
