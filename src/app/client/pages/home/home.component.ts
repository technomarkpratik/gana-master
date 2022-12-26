import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = "home";
  ids = 1;
}
