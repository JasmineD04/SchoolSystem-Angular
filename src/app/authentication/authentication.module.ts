import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ParentLoginComponent } from './parent-login/parent-login.component';
import { TeacherSignupComponent } from './teacher-signup/teacher-signup.component';
import { ParentSignupComponent } from './parent-signup/parent-signup.component';




@NgModule({
  declarations: [
    LoginComponent,
    ParentLoginComponent,
    TeacherSignupComponent,
    ParentSignupComponent
  ],
  imports:[
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports:[
    LoginComponent,
    ParentLoginComponent,
    TeacherSignupComponent,
    ParentSignupComponent,

    
  ]
})
export class AuthenticationModule { }
