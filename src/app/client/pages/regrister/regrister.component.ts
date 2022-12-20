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
    first_name:new FormControl('pratik',[Validators.required]),
    last_name:new FormControl('sathawara',[Validators.required]),
    phone_number:new FormControl('9876541230',[Validators.required]),
    email:new FormControl('abcr@gmail.com',[Validators.required]),
    password:new FormControl('Prince@123',[Validators.required]) ,   
    password_confirmation:new FormControl('Prince@123',[Validators.required]),      
    // imgpath:new FormControl('',[Validators.required])   
  });
  // this.display();
}
  get first_name(){  return this.regristerform.get('first_name');}
  get last_name(){  return this.regristerform.get('last_name');}
  get phone_number(){  return this.regristerform.get('phone_number');}
  get email(){  return this.regristerform.get('email');}
  get password(){  return this.regristerform.get('password');}
  get password_confirmation(){  return this.regristerform.get('password_confirmation');} 
  // get imgpath(){  return this.regristerform.get('imgpath');}
  resutl:any;
  public error = {
    name: null,
    email: null,
    password: null
  };
  handleError(error:any) {
    this.error = error.error.errors;
  }
  regdata(data:any){
    this.service.registerdata(data).subscribe(
      data =>  console.log(data),
      error => this.handleError(error),)
    }
}
