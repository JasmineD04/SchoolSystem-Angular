import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { ToastsService } from 'src/app/shared/component/show-error/toasts.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-parent-signup',
  templateUrl: './parent-signup.component.html',
  styleUrls: ['./parent-signup.component.css']
})
export class ParentSignupComponent implements OnInit {

  constructor(private router: Router,
    private authenticationService:AuthenticationService,
    private toastsService:ToastsService) {

     }

  validUserName!:number;

  icons={
    userIcon:faUser,
    envelopeIcon:faEnvelope,
    keyIcon:faKey
  }
  parentSignUp!:FormGroup;

  ngOnInit(): void {
    this.createParentSignUpForm();
  }

  createParentSignUpForm(){
    this.parentSignUp=new FormGroup({
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      userName:new FormControl(''),
      email:new FormControl(''),
      division:new FormControl(''),
      rollNo:new FormControl(),
      gender:new FormControl(),
      password:new FormControl(''),
      confirmPassword:new FormControl('')
    })
  }

  validateParentUserName(){
    const user = this.parentSignUp.get('userName')?.value
    this.authenticationService.validateTeacherUserName(user).subscribe((value:any)=>{
      this.validUserName=value.validUserName;
      if(this.validUserName){
        const body = this.generateBody();
        this.authenticationService.addTeacher(body).subscribe(()=>console.log("registeredParent"))
        this.redirect();
      }
      else{
        this.toastsService.show({textOrTpl:'userName already  exists',
          classname:"bg-danger",delay:2000})
          alert("userName already exists");
        console.log("toasts");

    }
  })
}
  
  submitForm():void{
    console.log("hi");
    this.validateParentUserName()
    // this.generateBody();
    // this.redirect();
  }

  generateBody():any{
    const body={
      ...this.parentSignUp.value
    }
    console.log(body)
    this.authenticationService.addParent(body).subscribe(()=>console.log("registeredParent"))
  }


  redirect():void{
    this.router.navigate(["parentlogin"])
  }

}
