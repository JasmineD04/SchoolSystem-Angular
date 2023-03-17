import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
// import { CookieService } from 'ngx-cookie-service/public-api';
import { ToastsService } from 'src/app/shared/component/show-error/toasts.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router,
    private authenticateService:AuthenticationService,
    public toastsService:ToastsService,
    private cookieService:CookieService) { }

  teacherLogin!:FormGroup;
  valid!:any;
  icons={
    envelopeIcon:faEnvelope,
    keyIcon:faKey,
  }

  
  ngOnInit(): void {
    this.createForm();

  }

  createForm(){
    this.teacherLogin=new FormGroup({
      userName:new FormControl(),
      password:new FormControl(),
    })
  }

  authenticate(){
    const body=this.generateBody()
    console.log("In authentication");
    this.authenticateService.teacherLogin(body).subscribe((value:any)=>{
      this.valid=value.valid
      if(this.valid==0){
          // cookiee
          console.log(this.valid)
          // this.isLoggedIn = true;
          this.cookieService.set("userName",value.UserName);
          this.cookieService.set("FullName",value.FullName);
          this.cookieService.set("token",value.tokenID);
          this.cookieService.set("userID",value.UserID);
          this.cookieService.set("isLoggedIn","true");
          this.router.navigate(["dashboard/teacher"])
      }
      else{
        this.toastsService.show({textOrTpl:'invalid credentials',
          classname:"bg-danger",delay:2000})
          alert("invalid credentials");
      }
    })
  }

  generateBody():any{
    const body=
    {
     ...this.teacherLogin.value
    }
    console.log(body);
    return body
   
  }
  
  signIn():void{
    this.router.navigate(["teachersign"])
  }


  redirect():void{
    this.router.navigate(["dashboard/teacher"])
  }

  
  submitForm():void{
    console.log("hi");
    this.authenticate();
  }
}
