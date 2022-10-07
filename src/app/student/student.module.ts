import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ]
})
export class StudentModule { }
