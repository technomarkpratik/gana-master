import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-regrister',
  templateUrl: './regrister.component.html',
  styleUrls: ['./regrister.component.scss']
})
export class RegristerComponent {
  data : string = "";
  regristerform !: FormGroup;
  storeregdata : any = {};
  constructor(private formbuilder:FormBuilder, private service:AuthService,private router:Router,private http:HttpClient){}
  ngOnInit(): void {
  this.regristerform = this.formbuilder.group({
    first_name:new FormControl('',[Validators.required]),
    last_name:new FormControl('',[Validators.required]),
    phone_number:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]) ,   
    password_confirmation:new FormControl('',[Validators.required]),      
    subscription_type:new FormControl('',[Validators.required]),      
  });
}
  get first_name(){  return this.regristerform.get('first_name');}
  get last_name(){  return this.regristerform.get('last_name');}
  get phone_number(){  return this.regristerform.get('phone_number');}
  get email(){  return this.regristerform.get('email');}
  get password(){  return this.regristerform.get('password');}
  get password_confirmation(){  return this.regristerform.get('password_confirmation');} 
  get subscription_type(){  return this.regristerform.get('subscription_type');} 

  resutl:any;
  public error = {
    name: null,
    email: null,
    password: null
  };
  handleError(error:any) {
    this.error = error.error.errors;
  }
  regdata(regristerform:any){  
    this.service.registerdata(regristerform.value).subscribe(
      response =>  this.reg_response(response) ,
      // error => this.handleError(error),
      )
    }
    reg_response(response:any){
      window.localStorage.setItem('regrister_user_data',''+ JSON.stringify(response.data));
       localStorage.setItem('accesstoken_reg',''+ (response.access_token));
       let abcd = localStorage.getItem('regrister_user_data');
      //  window.location.reload();
    this.router.navigate(['']);
    alert("your regristration successfully")
     }
}
