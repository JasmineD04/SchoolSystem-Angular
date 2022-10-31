import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ParentLoginComponent } from './authentication/parent-login/parent-login.component';
import { ParentSignupComponent } from './authentication/parent-signup/parent-signup.component';
import { TeacherSignupComponent } from './authentication/teacher-signup/teacher-signup.component';
import { AboutComponent } from './home/about/about.component';
import { RoleComponent } from './home/role/role.component';
import { HomeReportsComponent } from './parent/home-reports/home-reports.component';
import { InformationComponent } from './parent/information/information.component';
import { ParentDashboardComponent } from './parent/parent-dashboard/parent-dashboard.component';
import { ReportViewComponent } from './parent/report-view/report-view.component';
import { StudentProfileComponent } from './parent/student-profile/student-profile.component';
import { SidenavComponent } from './shared/component/sidenav/sidenav.component';
import { ParametersComponent } from './teacher/parameters/parameters.component';
import { ProfileComponent } from './teacher/profile/profile.component';
import { RecordViewComponent } from './teacher/record-view/record-view.component';
import { StudentListComponent } from './teacher/student-list/student-list.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { ViewComponent } from './teacher/view/view.component';
// import { ParametersComponent } from './teachers/parameters/parameters.component';


const routes: Routes = [
  {path:'choose',component:RoleComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'parentlogin',component:ParentLoginComponent},
  {path:'teachersign',component:TeacherSignupComponent},
  {path:'parentsign',component:ParentSignupComponent},
  {path:'dashboard/parent',component:ParentDashboardComponent},
  {path:'dashboard/teacher',component:TeacherDashboardComponent},
  {path:'view',component:ViewComponent},
  {path:'studentslist',component:StudentListComponent},
  {path:'parameters',component:ParametersComponent},
  {path:'record',component:RecordViewComponent},
  {path:'teacherprofile',component:ProfileComponent},
  {path:'homereports',component:HomeReportsComponent},
  {path:'schoolinfo',component:InformationComponent},
  {path:'studentprofile',component:StudentProfileComponent},
  {path:'reportview',component:ReportViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
