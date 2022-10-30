import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ParentLoginComponent } from './authentication/parent-login/parent-login.component';
import { ParentSignupComponent } from './authentication/parent-signup/parent-signup.component';
import { TeacherSignupComponent } from './authentication/teacher-signup/teacher-signup.component';
import { AboutComponent } from './home/about/about.component';
import { RoleComponent } from './home/role/role.component';
import { ParentDashboardComponent } from './parent/parent-dashboard/parent-dashboard.component';
import { SidenavComponent } from './shared/component/sidenav/sidenav.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';


const routes: Routes = [
  {path:'choose',component:RoleComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'parentlogin',component:ParentLoginComponent},
  {path:'teachersign',component:TeacherSignupComponent},
  {path:'parentsign',component:ParentSignupComponent},
  {path:'dashboard/parent',component:ParentDashboardComponent},
  {path:'dashboard/teacher',component:TeacherDashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
