import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ParentLoginComponent } from './parent-login/parent-login.component';




@NgModule({
  declarations: [
    LoginComponent,
    ParentLoginComponent
  ],
  imports:[
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports:[
    LoginComponent,
    
  ]
})
export class AuthenticationModule { }
