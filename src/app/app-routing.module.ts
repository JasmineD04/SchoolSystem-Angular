import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ParentLoginComponent } from './authentication/parent-login/parent-login.component';
import { ParentSignupComponent } from './authentication/parent-signup/parent-signup.component';
import { TeacherSignupComponent } from './authentication/teacher-signup/teacher-signup.component';
import { AboutComponent } from './home/about/about.component';
import { RoleComponent } from './home/role/role.component';
import { SidenavComponent } from './shared/component/sidenav/sidenav.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

const routes: Routes = [
  {path:'choose',component:RoleComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'parentlogin',component:ParentLoginComponent},
  {path:'teachersign',component:TeacherSignupComponent},
  {path:'parentsign',component:ParentSignupComponent},
  {path:'dashboard',component:SidenavComponent},
  {path:'students',component:StudentListComponent},
  {path:'teachers',component:TeacherListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
