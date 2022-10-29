import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SidenavComponent } from './shared/component/sidenav/sidenav.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:SidenavComponent},
  {path:'students',component:StudentListComponent},
  {path:'teachers',component:TeacherListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
