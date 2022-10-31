import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ReportViewComponent } from './report-view/report-view.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { InformationComponent } from './information/information.component';
import { HomeReportsComponent } from './home-reports/home-reports.component';



@NgModule({
  declarations: [
    ParentDashboardComponent,
    ReportViewComponent,
    StudentProfileComponent,
    InformationComponent,
    HomeReportsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule
  ],
  exports:[
    ParentDashboardComponent,
    StudentProfileComponent,
    HomeReportsComponent,
    ReportViewComponent

  ]
})
export class ParentModule { }
