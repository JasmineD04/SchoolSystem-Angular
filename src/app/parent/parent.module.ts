import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';



@NgModule({
  declarations: [
    ParentDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ParentDashboardComponent
  ]
})
export class ParentModule { }
