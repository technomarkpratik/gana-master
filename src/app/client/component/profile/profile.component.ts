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
  updateprofile !: FormGroup;
  storeregdata : any;
your_profile_data :any = {};
  constructor(private formbuilder:FormBuilder, private service:AuthService,private router:Router,private http:HttpClient){
  
  }
  ngOnInit(): void {
this.displayprofile();
this.updateprofile = this.formbuilder.group({
  first_name:new FormControl('',[Validators.required]),
  last_name:new FormControl('',[Validators.required]),
  phone_number:new FormControl('',[Validators.required]),
  // email:new FormControl('',[Validators.required]),     
  // subscription_type:new FormControl('',[Validators.required]),      
});
}
get first_name(){  return this.updateprofile.get('first_name');}
get last_name(){  return this.updateprofile.get('last_name');}
get phone_number(){  return this.updateprofile.get('phone_number');}
// get email(){  return this.updateprofile.get('email');}
// get subscription_type(){  return this.updateprofile.get('subscription_type');} 
resutl:any;
public error = {
  name: null,
  email: null,
  password: null
};
handleError(error:any) {
  this.error = error.error.errors;
}
   
  displayprofile(){
    this.service.getprofile().subscribe(data => this.receivedata(data));
  }
  receivedata(data:any){
    this.your_profile_data = (data.data);
    console.log(this.your_profile_data);
  }
  updateprof(updateprofile:any){
    this.service.updateprofile(updateprofile.value).subscribe(data => this.updatedata(data));
  }
  updatedata(data:any){
    this.your_profile_data = (data.data);
    console.log(this.your_profile_data);
    window.localStorage.setItem('regrister_user_data',''+ JSON.stringify(data.data));
     localStorage.setItem('accesstoken_reg',''+ (data.access_token));
     this.displayprofile();
     this.router.navigate(['']);
    
  }
}