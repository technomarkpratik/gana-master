import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { PasswordStrengthValidator } from 'src/app/services/password-strength.validators';

@Component({
  selector: 'app-regrister',
  templateUrl: './regrister.component.html',
  styleUrls: ['./regrister.component.scss']
})
export class RegristerComponent {
  errors = [];
  data : string = "";
  regristerform !: FormGroup;
  storeregdata : any = {};
  constructor(private formbuilder:FormBuilder, 
    private service:AuthService,private router:Router,private http:HttpClient,private toster:NotificationService){
      this.regristerform = this.formbuilder.group({
        first_name:new FormControl('',[Validators.required,Validators.minLength(3)]),
        last_name:new FormControl('',[Validators.required,Validators.minLength(3)]),
        phone_number:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        email:new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',[Validators.required,PasswordStrengthValidator]) ,   
        password_confirmation:new FormControl('',[Validators.required,]) ,   
        subscription_type:new FormControl('',[Validators.required]),   
      }
      );
    }
  ngOnInit(): void {
 
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
    this.errors = error.error.errors;
  }
  showtoast(){
    this.toster.showError("somethong went to wrong please try again","this.error");
  }
  regdata(regristerform:any){ 
    if (regristerform.invalid) {
      this.showtoast();
      return;
  }
  
    this.service.registerdata(regristerform.value).subscribe(
      response =>  this.reg_response(response) ,
      // error => this.handleError(error),
      )
      if (regristerform.invalid) {
        this.showtoast();
        return;
    }
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

