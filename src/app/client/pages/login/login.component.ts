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
 

  loginsuccessdata: object = {};
  logindata(loginform:any){  
 console.log(this.loginform.value);
 
 this.service.loginservice(loginform.value).subscribe(
  (response) => this.das(response),
  // (error) => console.log(error),   
   )
  
   console.log(this.loginsuccessdata)
   this.router.navigate(['/home']);
 }
 das(respons:any){
  // console.log(respons);
  localStorage.setItem('loginstore', JSON.stringify(respons));
  localStorage.setItem('idstore', JSON.stringify(respons.data.email));
  let sabcd = localStorage.getItem('idstore')
 alert(sabcd);
 }
} 
