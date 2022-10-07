import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './shared/component/sidenav/sidenav.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { StudentModule } from './student/student.module';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ParametersComponent } from './parameters/parameters.component';

@NgModule({
  declarations: [
    AppComponent,
    // StudentListComponent,
    TeacherListComponent,
    TestComponent,
    LoginComponent,
    ParametersComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    StudentModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
