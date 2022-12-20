import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginform !:FormGroup;

  constructor(private formbuilder:FormBuilder, private service:AuthService,private router:Router,private http:HttpClient){}
 
  ngOnInit(): void {
    this.loginform = this.formbuilder.group({
      email:new FormControl('nikunj301@gmail.com',[Validators.required,Validators.email]),
      password:new FormControl('Nikunj@12345',[Validators.required])
    })
  }



  get email(){  return this.loginform.get('email');}
  get password(){  return this.loginform.get('password');}
  
  public error = null;
  handleError(error:any) {
    this.error = error.error.errors;
  }
 

  regss: any = {};
  logindata(loginform:any){  
 console.log(this.loginform.value);
 
 this.service.loginservice(loginform.value).subscribe(
  (response) => this.regss.access_token = response,
  (error) => console.log(error),   
   )
   localStorage.setItem('loginstore', this.regss);
   console.log(this.regss)
   this.router.navigate(['/home']);
 }
} 
