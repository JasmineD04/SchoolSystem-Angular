import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { ToastsService } from 'src/app/shared/component/show-error/toasts.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-parent-login',
  templateUrl: './parent-login.component.html',
  styleUrls: ['./parent-login.component.css']
})
export class ParentLoginComponent implements OnInit {

  constructor(private router: Router,
    public toastsService:ToastsService,
    private authenticateService:AuthenticationService,private cookieService: CookieService)
    { }


  parentLogin!:FormGroup;
  valid!:any;

  icons={
    userIcon:faUser,
    envelopeIcon:faEnvelope,
    keyIcon:faKey,
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.parentLogin=new FormGroup({
      userName:new FormControl(),
      password:new FormControl(),
    })
  }

  authenticate(){
    const body=this.generateBody()
    this.authenticateService.parentLogin(body).subscribe((value:any)=>{
      this.valid=value.valid
      if(this.valid==0){
          //cookiee
          console.log(this.valid)
          // this.isLoggedIn = true;
          this.cookieService.set("userName",value.UserName);
          this.cookieService.set("FullName",value.FullName);
          this.cookieService.set("token",value.tokenID);
          this.cookieService.set("userID",value.UserID);
          this.cookieService.set("isLoggedIn","true");
          this.router.navigate(["dashboard/parent"])
      }
      else{
        this.toastsService.show({textOrTpl:'invalid credentials',
          classname:"bg-danger",delay:2000})
          alert("invalid credentials");
      }
    })
  }


  redirect():void{
    this.router.navigate(["dashboard/parent"])
  }

  signIn():void{
    this.router.navigate(["parentsign"])
  }

  generateBody():any{
    const body=
    {
     ...this.parentLogin.value
    }
    console.log(body);
    return body
   
  }

  submitForm():void{
    console.log("hi");
    this.authenticate()
    // this.redirect();
  }

}
