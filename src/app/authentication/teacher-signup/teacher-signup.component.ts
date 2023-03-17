import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { ToastsService } from 'src/app/shared/component/show-error/toasts.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-teacher-signup',
  templateUrl: './teacher-signup.component.html',
  styleUrls: ['./teacher-signup.component.css']
})
export class TeacherSignupComponent implements OnInit {

  constructor(private router: Router,
    private authenticationService:AuthenticationService,
    public toastsService :ToastsService) {

     }
  
  teacherSignUp!:FormGroup;
  validUserName!:number;

  icons={
    userIcon:faUser,
    envelopeIcon:faEnvelope,
    keyIcon:faKey
  }

  ngOnInit(): void {
    this.createTeacherSignUpForm();
  }
  
  createTeacherSignUpForm(){
    this.teacherSignUp=new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      userName:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      division:new FormControl('',[Validators.required]),
      gender:new FormControl('male'),
      password:new FormControl('',[Validators.required]),
      confirmPassword:new FormControl('',[Validators.required]),
    })
  } 

  validateTeacherUserName(){
    const user = this.teacherSignUp.get('userName')?.value
    this.authenticationService.validateTeacherUserName(user).subscribe((value:any)=>{
      this.validUserName=value.validUserName;
      if(this.validUserName){
        const body = this.generateBody();
        this.authenticationService.addTeacher(body).subscribe(()=>console.log("registeredTeacher"))
        this.redirect()
      }
      else{
        this.toastsService.show({textOrTpl:'userName already  exists',
          classname:"bg-danger",delay:2000})
          alert("userName already  exists");
        console.log("toasts");

    }
  })
}

  generateBody():any{
    const body=
    {
      ...this.teacherSignUp.value
    }
    console.log(body)
    this.authenticationService.addTeacher(body).subscribe(()=>console.log("registeredTeacher"));
    

  }

  submitForm():void{
    console.log("hi");
    this.validateTeacherUserName();
    this.redirect();
  }

  redirect():void{
    this.router.navigate(["login"])
  }


}
