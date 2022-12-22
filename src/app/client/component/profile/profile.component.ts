import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  data : string = "";
  regristerform !: FormGroup;
  storeregdata : any;
your_profile_data :any = {};
  constructor(private formbuilder:FormBuilder, private service:AuthService,private router:Router,private http:HttpClient){
  
  }
  ngOnInit(): void {
this.displayprofile();
//  this.App();
}

  // App() {
  //   this.yourregdata = window.localStorage.getItem('regrister_user_data');
  //   this.yourregdata = JSON.parse(this.yourregdata)
  // }
  displayprofile(){
    this.service.getprofile().subscribe(data => this.receivedata(data));
    // console.log(this.yourregdata)
  }
  receivedata(data:any){
    this.your_profile_data = (data.data);
    console.log(this.your_profile_data)
  }
}