import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentListComponent } from './student-list/student-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { RecordViewComponent } from './record-view/record-view.component';
// import { ParametersComponent } from '../teachers/parameters/parameters.component';
import { ParametersComponent } from './parameters/parameters.component';



@NgModule({
  declarations: [
    TeacherDashboardComponent,
    StudentListComponent,
    ProfileComponent,
    ViewComponent,
    RecordViewComponent,
    ParametersComponent,
    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule
  ],
  exports:[
    TeacherDashboardComponent,
    ProfileComponent,
    StudentListComponent,
    ViewComponent,
    RecordViewComponent,
    ParametersComponent
  ]
})
export class TeacherModule { }
