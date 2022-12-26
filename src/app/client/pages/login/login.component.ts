import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/services/notification.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginform !:FormGroup;

  constructor(private formbuilder:FormBuilder, private service:AuthService,
    private router:Router,private http:HttpClient,private toster:NotificationService,private toast:ToastrService){}
 
  ngOnInit(): void {
    this.loginform = this.formbuilder.group({
      email:new FormControl('pratik.sathawara@technomark.io',[Validators.required,Validators.email]),
      password:new FormControl('Dubond@123',[Validators.required])
    })
  }



  get email(){  return this.loginform.get('email');}
  get password(){  return this.loginform.get('password');}
  
  public error = null;
  handleError(error:any) {
    this.error = error.error.errors;
    this.showerror();
  }
  showerror(){
    this.toster.showError("somethong went to wrong please try again","");
  }

  loginsuccessdata: object = {};
  logindata(loginform:any){  
 
 this.service.loginservice(loginform.value).subscribe(
  (response) => this.das(response), 
  error => this.handleError(error),
   )
  
 }
 das(respons:any){
  localStorage.clear();

  localStorage.setItem('userdata',''+ JSON.stringify(respons.data));
  localStorage.setItem('accesstoken',''+ (respons.data.access_token));

  window.location.reload();
  this.router.navigate(['']);

 }
} 
